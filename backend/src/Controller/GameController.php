<?php

namespace App\Controller;

use App\Repository\GameRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\ImportIgdb;
use App\Service\GameImporter;

class GameController extends AbstractController
{
    protected $gameRepository;
    protected $managerRegistry;
    protected $games;
    protected $responseJson;
    protected $importIgdb;
    protected $gameImporter;
    protected $igdbExist = false;
    protected $dbExist =  true;


    public function __construct(
        GameRepository $gameRepository,
        ManagerRegistry $managerRegistry,
        ImportIgdb $importIgdb,
        GameImporter $gameImporter
    ) {
        $this->gameRepository = $gameRepository;
        $this->managerRegistry = $managerRegistry;
        $this->importIgdb = $importIgdb;
        $this->gameImporter = $gameImporter;
    }

    /**
     * @Route("/game/{name}/{force}", name="game")
     */

    public function game($name = null, $force = null)
    {
        if ($force != null) {
            $this->dbExist = false;
            $this->execute($name);
        } else {
            $repo = $this->gameRepository->findGames($name);

            if (empty($repo)) {
                $this->dbExist = false;
                $this->execute($name);
            }
        }

        if ($this->igdbExist) {
            $repo = $this->gameRepository->findGames($name);
            if (!empty($repo)) {
                $this->dbExist  = true;
            }
        }

        return $this->json(
            [
                'response' => $repo
            ]
        );
    }

    protected function execute($name)
    {
        $this->responseJson = $this->importIgdb->setImport($name);

        $this->games = json_decode($this->responseJson);

        if ($this->games == []) {
            return null;
        } else {
            $this->igdbExist = true;
        }

        foreach ($this->games as $game) {

            $DTO = $this->gameImporter->read($game);
            $newGame = $this->gameImporter->process($DTO);
            $this->gameImporter->write($newGame);
        }
    }
}
