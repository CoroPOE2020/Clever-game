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
use Symfony\Component\HttpFoundation\JsonResponse;

class TestController extends AbstractController
{
    protected $gameRepository;
    protected $managerRegistry;
    protected $games;
    protected $commandOutput;
    protected $importCommand;
    protected $gameImporter;
    protected $isExistInIgdb = false;


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
        // ajouter une variable isExistDb pour verifier l'existence des données sur la db
        // regler la response json
        // terminer le process et le write


        $repo = $this->gameRepository->findGames($name);
        
        var_dump($this->isExistInIgdb);

        if (empty($repo)) {      
            $this->execute($name);
        }

        var_dump($this->isExistInIgdb);

        if ($this->isExistInIgdb) {
            $repo = $this->gameRepository->findGames($name);
        }

        print_r($repo);

        return new JsonResponse(
            [
                'response' => $repo
            ]
        );
    }

    protected function execute($name)
    {
        $this->commandOutput = $this->importCommand->setCommand($name);

        $json = substr($this->commandOutput, 6);
        $this->games = json_decode($json);

        if ($this->games == []) {
            return null;
        }
        else {
            $this->isExistInIgdb = true;
        }

        foreach ($this->games as $game) {

            $DTO = $this->gameImporter->read($game);
            $newGame = $this->gameImporter->process($DTO);
            $this->gameImporter->write($newGame);
        }
    }
}
