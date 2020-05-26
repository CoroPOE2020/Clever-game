<?php

namespace App\Command;
use App\Service\ImportIgdb;
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
    protected $importCommand;
    protected $fields;
    protected $options;

    public function __construct($name = null, HttpClientInterface $httpClient, $description, $argument, $fields, $options)
    {
        parent::__construct($name);
        $this->httpClient = $httpClient;
        $this->description = $description;
        $this->argument = $argument;
        $this->fields = $fields;
        $this->options =$options;
    }

    protected function configure()
    {
        $this
            ->setDescription($this->description)
            ->addArgument('name', InputArgument::OPTIONAL, $this->argument);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $importCommand = new ImportIgdb($this->httpClient);
        
        $io = new SymfonyStyle($input, $output);
        
        $name = $input->getArgument('name');       
        
        $this->games = $importCommand->setImport($name, static::$defaultName, $this->fields, $this->options);

        $io->success($this->games);

        return 0;
    }
}