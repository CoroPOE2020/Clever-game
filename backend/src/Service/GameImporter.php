<?php

namespace App\Service;

use App\DTO\GameDto;
use App\Entity\AlternativeNames;
use App\Entity\Game;
use App\Factory\IgdbFactory;
use App\Repository\GameRepository;
use App\Service\ImporterInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\AssetInterface;

class GameImporter implements ImporterInterface
{
    protected $managerRegistry;
    protected $gameRepository;
    protected $assetInterface;
    private $rating = 0;
    private $summary = '';
    private $url = null;
    private $first_release_date = 0;
    private $image_id = null;
    private $gameId = null;


    public function __construct(ManagerRegistry $managerRegistry, GameRepository $gameRepository, AssetInterface $assetInterface)
    {
        $this->managerRegistry = $managerRegistry;
        $this->gameRepository = $gameRepository;
        $this->assetInterface = $assetInterface;
    }

    // Get data from the DB and verify each fields
    public function read($data)
    {
        $result = $this->gameRepository->findOneBy([
            'identifier' => $data->id,
        ]);

        if ($result !== null) {

            return null;
        }

        // check if all fields exist
        isset($data->rating) ? $this->rating = $data->rating : $this->rating;
        isset($data->summary) ? $this->summary = $data->summary : $this->summary;
        isset($data->url) ? $this->url = $data->url : $this->url;
        isset($data->first_release_date) ? $this->first_release_date = $data->first_release_date : $this->first_release_date;        

        isset($data->cover) ? $this->image_id = $data->cover : $this->image_id = null;

        isset($data->alternative_names) ? $this->gameId = $data->id : $this->gameId = null;

        $dto = new GameDto($data->id, $data->name, $this->rating, $this->summary, $this->url, $this->first_release_date);

        return $dto;
    }

    // Once datas are checked, they are stocked in their Entity
    public function process($data): ?Game
    {
        if ($data === null) {
            return null;
        }

        $gameEntity = IgdbFactory::CreateGame($data);

        $this->getGameCover($gameEntity);
        $this->getAlternativeNames($gameEntity);

        return $gameEntity;
    }

    // Persist and flush datas with the objectManager 
    public function write($data)
    {
        $om = $this->getObjectManager();

        if ($om === null || $data === null) {
            return false;
        }

        $om->persist($data);
        $om->flush();
        return true;
    }

    protected function getObjectManager()
    {
        return $this->managerRegistry->getManagerForClass(Game::class);
    }

    // For the image of the game, we need to use another endpoint 
    protected function getGameCover(Game $game): void
    {
        // if the game data contains a cover, we send a request to get the cover_id to IGDB
        isset($this->image_id) ? $cover = json_decode($this->assetInterface->setImport($this->image_id, 'covers', 'byId', 'image_id', '')) : $cover = null;

        isset($cover) ? $response = $cover[0]->image_id : $response = null;

        $game->setCoverId($response);
    }
    // Use another endpoint and set datas in Entity 
    protected function getAlternativeNames(Game $game): void
    {
        // if the game data contains alternatives names, we send a request to get the alternatives names to IGDB
        isset($this->gameId) ? $data = json_decode($this->assetInterface->setImport($this->gameId, 'alternative_names', 'byGameId', '*', '')) : $data = [];

        foreach ($data as $entry) {

            $altName = new AlternativeNames();
            $altName->setName($entry->name);
            isset($entry->comment) ? $altName->setComment($entry->comment) : $altName->setComment('');

            $game->addAlternativeName($altName);
        }
    }
}