<?php

namespace App\Service;

use App\DTO\GameDto;
use App\Entity\Game;
use App\Factory\IgdbFactory;
use App\Repository\GameRepository;
use App\Service\ImporterInterface;
use Doctrine\Persistence\ManagerRegistry;

class GameImporter implements ImporterInterface
{
    protected $managerRegistry;
    protected $gameRepository;
    private $rating = 0;
    private $summary = null;
    private $url = null;
    private $first_release_date = 0;


    public function __construct(ManagerRegistry $managerRegistry, GameRepository $gameRepository)
    {
        $this->managerRegistry = $managerRegistry;
        $this->gameRepository = $gameRepository;
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

        // print_r($this->summary);
        //              dans DTO , IGDB Factory, GameImporter

        //  age_rating = faire une entity 
        //  imgUrl 


        $dto = new GameDto($data->id, $data->name, $this->rating, $this->summary, $this->url, $this->first_release_date);
        // print_r($dto);
        // die();

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

}
