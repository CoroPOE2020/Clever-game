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

class GameController extends AbstractController
{
    protected $games;
    protected $managerRegistry;
    protected $gameRepository;

    public function __construct(HttpClientInterface $httpClient, ManagerRegistry $managerRegistry, GameRepository $gameRepository)
    {
        $this->httpClient = $httpClient;
        $this->managerRegistry = $managerRegistry;
        $this->gameRepository = $gameRepository;
    }
    /**
     * @Route("/test/{name}", name="test")
     */
    public function index($name, KernelInterface $kernel)
    {

        $repo = $this->gameRepository->findGames($name);

        if (empty($repo)) {
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
        $result = $this->gameRepository->findOneBy([
            'identifier' => $game->id,
        ]);

        if ($result !== null) {
            print_r("deja la");
            return null;
        }

        $DTO = new GameDto($game->id, $game->name);

        return $DTO;
    }

    protected function process($dto)
    {
        if ($dto === null) {
            return null;
        }

        $game = IgdbFactory::CreateGame($dto);

        return $game;
    }

    protected function write($game)
    {
        $om = $this->getObjectManager();

        if ($om === null || $game === null) {
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
