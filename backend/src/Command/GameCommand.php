<?php

namespace App\Command;

use App\Command\AbstractIgdbCommand;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class GameCommand extends AbstractIgdbCommand
{
    protected static $defaultName = 'game';
    protected $description = 'Command for find games in IGDB database';
    protected $argument = "Game\'s name";

    /**
     * @param HttpClientInterface    $httpClient
     */
    public function __construct(HttpClientInterface $httpClient)
    {
        parent::__construct(
            static::$defaultName, 
            $httpClient, 
            $this->description, 
            $this->argument
        );
    }
}