<?php

declare(strict_types=1);

namespace App\DTO;

class GameDto 
{
    private $identifier;
    private $name;

    /**
     * @param string $identifier
     * @param string $name
     */
    public function __construct(string $identifier, string $name)
    {
        $this->identifier = $identifier;
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getIdentifier(): string
    {
        return $this->identifier;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }
}
