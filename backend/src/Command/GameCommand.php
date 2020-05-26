<?php

namespace App\Command;

use App\Command\AbstractIgdbCommand;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class GameCommand extends AbstractIgdbCommand
{
    protected static $defaultName = 'games';
    protected $description = 'Command for find games in IGDB database';
    protected $argument = "Game\'s name";
    protected $fields = "name";
    protected $options  = "where version_parent = null & category = 0";

    /**
     * @param HttpClientInterface    $httpClient
     */
    public function __construct(HttpClientInterface $httpClient)
    {
        parent::__construct(
            static::$defaultName, 
            $httpClient, 
            $this->description, 
            $this->argument,
            $this->fields,
            $this->options
        );
    }
}