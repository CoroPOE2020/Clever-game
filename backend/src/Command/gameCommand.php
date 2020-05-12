<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class gameCommand extends Command
{
    protected static $defaultName = 'game';

    protected $httpClient;
    protected $games;

    public function __construct(string $name = null, HttpClientInterface $httpClient)
    {
        parent::__construct($name);
        $this->httpClient = $httpClient;
    }

    protected function configure()
    {
        $this
            ->setDescription('A command for find game\'s informations you want')
            ->addArgument('name', InputArgument::OPTIONAL, 'game\'s name you want');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        
        $io = new SymfonyStyle($input, $output);

        $name = $input->getArgument('name');

        $this->games = $this->getIgdbContent($name);

        $io->success($this->games);

        return 0;
    }

    protected function getIgdbContent($name)
    {

        $request = $this->httpClient->request('GET', 'https://api-v3.igdb.com/games', [
            'headers' => [
                'user-key' => '0cfafd24e45e89068e7324bd83d8c2e5'
            ],
            'body' => 'fields name; limit 10; search "' . $name . '"; where version_parent = null & category = 0;'
        ]);

        $response =  $request->getContent();

        return $response;
    }
}
