<?php

declare(strict_types=1);

namespace App\DTO;

class GameDto 
{
    private $identifier;
    private $name;
    private $rating;
    private $description;
    private $igdbUrl;
    private $releaseDate;
    private $coverId;

    /**
     * @param string $identifier
     * @param string $name
     * @param int $rating
     * @param string $description
     * @param string $igdbUrl
     * @param int $releaseDate
     * @param string $coverId
     */
    public function __construct(string $identifier, string $name, int $rating, string $description, string $igdbUrl, int $releaseDate, string $coverId)
    {
        $this->identifier = $identifier;
        $this->name = $name;
        $this->rating = $rating;
        $this->description = $description;
        $this->igdbUrl = $igdbUrl;
        $this->releaseDate = $releaseDate;
        $this->$coverId = $coverId;
    }

    /**
     * @return string 
     */
    public function getIdentifier(): ?string
    {
        return $this->identifier;
    }

    /**
     * @return string
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @return int
     */
    public function getRating(): ?int
    {
        return $this->rating;
    }

    /**
     * @return string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @return string
     */
    public function getIgdbUrl(): ?string
    {
        return $this->igdbUrl;
    }
    /**
     * @return int
     */
    public function getReleaseDate(): ?int
    {
        return $this->releaseDate;
    }
    
    /**
     * @return string
     */
    public function getCoverId(): ?string
    {
        return $this->coverId;
    }
}