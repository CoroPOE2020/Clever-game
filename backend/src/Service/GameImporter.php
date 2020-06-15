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

    public function read($data)
    {
        $result = $this->gameRepository->findOneBy([
            'identifier' => $data->id,
        ]);

        if ($result !== null) {
            // echo '<pre>';
            // print_r("déjô lô");
            // echo '</pre>';
            return null;
        }

        // echo '<pre>';
        // print_r($data);
        // echo '</pre>';
        // die();


        isset($data->rating) ? $this->rating = $data->rating : $this->rating;
        isset($data->summary) ? $this->summary = $data->summary : $this->summary;
        isset($data->url) ? $this->url = $data->url : $this->url;
        isset($data->first_release_date) ? $this->first_release_date = $data->first_release_date : $this->first_release_date;        

        isset($data->cover) ? $this->image_id = $data->cover : $this->image_id = null;

        isset($data->alternative_names) ? $this->gameId = $data->id : $this->gameId = null;

        $dto = new GameDto($data->id, $data->name, $this->rating, $this->summary, $this->url, $this->first_release_date);

        return $dto;
    }

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

    protected function getGameCover(Game $game): void
    {
        isset($this->image_id) ? $cover = json_decode($this->assetInterface->setImport($this->image_id, 'covers', 'integer', 'image_id', '')) : $cover = null;

        isset($cover) ? $response = $cover[0]->image_id : $response = null;

        $game->setCoverId($response);
    }

    protected function getAlternativeNames(Game $game): void
    {
        isset($this->gameId) ? $data = json_decode($this->assetInterface->setImport($this->gameId, 'alternative_names', 'alt', '*', '')) : $data = [];
        $response = [];

        foreach ($data as $entry) {

            $altName = new AlternativeNames();
            $altName->setName($entry->name);
            isset($entry->comment) ? $altName->setComment($entry->comment) : $altName->setComment('');

            $game->addAlternativeName($altName);
        }
    }
}
