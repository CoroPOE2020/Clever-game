<?php

namespace App\Controller;

use App\Entity\Game;
use App\Repository\GameRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Service\ImportCommand;
use App\Service\GameImporter;

class GameController extends AbstractController
{
    protected $gameRepository;
    protected $managerRegistry;
    protected $games;
    protected $responseJson;
    protected $importCommand;
    protected $gameImporter;
    protected $igdbExist = false;
    protected $dbExist =  true;


    public function __construct(
        GameRepository $gameRepository,
        ManagerRegistry $managerRegistry,
        ImportCommand $importCommand,
        GameImporter $gameImporter
    ) {
        $this->gameRepository = $gameRepository;
        $this->managerRegistry = $managerRegistry;
        $this->importCommand = $importCommand;
        $this->gameImporter = $gameImporter;
    }

    /**
     * @Route("/game/{name}", name="game")
     */
    public function game($name = null)
    {

        $repo = $this->gameRepository->findGames($name);

        if (empty($repo)) {
            $this->dbExist = false;
            $this->execute($name);
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
        $this->responseJson = $this->importCommand->setCommand($name);

        $this->games = json_decode($this->responseJson);

        echo '<pre>';
        print_r($this->games);
        echo '</pre>';
        die();

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
