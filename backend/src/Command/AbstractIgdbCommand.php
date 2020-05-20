<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Contracts\HttpClient\HttpClientInterface;

abstract class AbstractIgdbCommand extends Command
{
    protected static $defaultName;
    protected $httpClient;
    protected $games;
    protected $description;
    protected $argument;

    public function __construct($name = null, HttpClientInterface $httpClient, $description, $argument)
    {
        parent::__construct($name);
        $this->httpClient = $httpClient;
        $this->description = $description;
        $this->argument = $argument;
    }

    protected function configure()
    {
        $this
            ->setDescription($this->description)
            ->addArgument('name', InputArgument::OPTIONAL, $this->argument);
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
            'body' => 'fields name; limit 50; search "' . $name . '"; where version_parent = null & category = 0; '
        ]);

        $response =  $request->getContent();

        return $response;
    }
}