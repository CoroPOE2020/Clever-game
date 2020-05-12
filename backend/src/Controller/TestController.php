<?php

namespace App\Controller;

use App\Command\gameCommand;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Response;
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
        // echo('<pre>');
        //     var_dump($this->games);
        // echo('</pre>');
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

        $this->games = $this->read($output->fetch());

        var_dump(($this->games));
        die();
    }

    protected function read($response)
    {
        $json = substr($response,6);
        $games = json_decode($json);

        // foreach ($games as $game) {
        //     $gameNames[] = $game['name'];
        // }
        return $games;
    }
}
