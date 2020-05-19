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
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class TestController extends AbstractController
{
    protected $gameRepository;
    protected $managerRegistry;
    protected $games;
    protected $commandOutput;
    protected $importCommand;
    protected $gameImporter;
    protected $igdbExist = false;
    protected $dbExist =  true;


    public function __construct(
        GameRepository $gameRepository,
        ManagerRegistry $managerRegistry,
        HttpClientInterface $httpClient,
        ImportCommand $importCommand,
        GameImporter $gameImporter
    ) {
        $this->gameRepository = $gameRepository;
        $this->managerRegistry = $managerRegistry;
        $this->httpClient = $httpClient;
        $this->importCommand = $importCommand;
        $this->gameImporter = $gameImporter;
    }

    /**
     * @Route("/game/{name}", name="game")
     */
    public function game($name = null)
    {
        // regler la response json

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

        // dump($response);

        // return $this->render('Game/index.html.twig',[
        //     'controller_name' => 'TestController',
        //     'games' => $repo
        // ]);
    }

    protected function execute($name)
    {
        $this->commandOutput = $this->importCommand->setCommand($name);

        $json = substr($this->commandOutput, 6);
        $this->games = json_decode($json);

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
