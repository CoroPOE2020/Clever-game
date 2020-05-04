<?php

namespace App\Controller;

use App\Command\gameCommand;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Console\Output\OutputInterface;

class TestController extends AbstractController
{
    protected $games;

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
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

    public function setCommand($name, $kernel) {
        $application = new Application($kernel);
        $application->setAutoExit(false);

        $input = new ArrayInput([
            'command' => 'game',
            'name' => $name
        ]);
        // You can use NullOutput() if you don't need the output
        $output = new BufferedOutput(
            OutputInterface::VERBOSITY_NORMAL,
            true
        );
        $application->run($input, $output);
        // return the output, don't use if you used NullOutput()
        $this->games = $output->fetch();
        dump($this->games);
    }

    protected function read($response)
    {
        $games = $response->toArray();
        foreach ($games as $game) {
            $gameNames[] = $game['name'];
        }
        dump($gameNames);

    }
}
