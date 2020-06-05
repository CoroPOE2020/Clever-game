<?php

namespace App\Service;

use App\DTO\GameDto;
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
    private $summary = null;
    private $url = null;
    private $first_release_date = 0;
    private $image_id = '';


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

        // print_r($data);
        // die();

        // verifier que le choix demandé existe. Si oui on le stock dans la variable créer.
        // Sinon on laisse la valeur par defaut de la variable
        isset($data->rating) ? $this->rating = $data->rating : $this->rating;
        isset($data->summary) ? $this->summary = $data->summary : $this->summary;
        isset($data->url) ? $this->url = $data->url : $this->url;
        isset($data->first_release_date) ? $this->first_release_date = $data->first_release_date : $this->first_release_date;
        isset($data->cover) ? $data_image = $this->getGameCover($data->cover) : $this->image_id;
        
        isset($data_image) ? $this->image_id = $data_image : $this->image_id;

        $dto = new GameDto($data->id, $data->name, $this->rating, $this->summary, $this->url, $this->first_release_date, $this->image_id);

        return $dto;

    }

    public function process($data): ?Game
    {
        if ($data === null) {
            return null;
        }

        $gameEntity = IgdbFactory::CreateGame($data);

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

    protected function getGameCover($identifier)
    {
        $cover = json_decode($this->assetInterface->getCoverId($identifier));
        $response = $cover[0]->image_id;
         return $response;
        // print_r($this->image_id);
        // die;
    }
    
}