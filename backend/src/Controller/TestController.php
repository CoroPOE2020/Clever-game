<?php

namespace App\Controller;


use App\DTO\GameDto;
use App\Entity\Game;
use App\Factory\IgdbFactory;
use App\Repository\GameRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestController extends AbstractController
{
    protected $games;
    protected $managerRegistry;

    public function __construct(HttpClientInterface $httpClient, ManagerRegistry $managerRegistry)
    {
        $this->httpClient = $httpClient;
        $this->managerRegistry = $managerRegistry;
    }
    /**
     * @Route("/test/{name}", name="test")
     */
    public function index($name, GameRepository $gameRepository, KernelInterface $kernel)
    {

        $repo = $gameRepository->find($name);
        if ($repo == null) {
            $this->setCommand($name, $kernel);
        }

        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
            'games' => $this->games
        ]);
    }

    public function setCommand($name, $kernel)
    {
        $application = new Application($kernel);
        $application->setAutoExit(false);

        $input = new ArrayInput([
            'command' => 'game',
            'name' => $name,
            '-v' => true,

        ]);

        $output = new BufferedOutput(
            OutputInterface::VERBOSITY_QUIET

        );
        $application->run($input, $output);

        $this->games = $this->importer($output->fetch());
    }

    protected function importer($data)
    {
        $json = substr($data, 6);
        $games = json_decode($json);

        if ($games == []) {
            echo "c\'est mort";
            return null;
        }

        foreach ($games as $game) {

            $DTO = $this->read($game);
            $newGame = $this->process($DTO);
            $this->write($newGame);
        }
    }

    protected function read($game)
    {
        $DTO = new GameDto($game->id, $game->name);

        return $DTO;
    }

    protected function process($dto)
    {
        $game =  IgdbFactory::CreateGame($dto);

        return $game;
    }

    protected function write($game)
    {
        $om = $this->getObjectManager();

        if ($om === null) {
            return false;
        }

        $om->persist($game);
        $om->flush();
        return true;
    }

    protected function getObjectManager()
    {
        return $this->managerRegistry->getManagerForClass(Game::class);
    }
}
