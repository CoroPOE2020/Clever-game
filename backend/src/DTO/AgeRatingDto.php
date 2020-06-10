<?php

declare(strict_types=1);

namespace App\DTO;

class AgeRatingDto
{
    private $identifier;
    private $category;
    private $rating;

    /**
     * @param string $identifier
     * @param string $category
     * @param int $rating
     */
    public function __construct(string $identifier, int $category, int $rating)
    {
        $this->identifier = $identifier;
        $this->category = $category;
        $this->rating = $rating;      
    }

    /**
     * Get the value of identifier
     */ 
    public function getIdentifier()
    {
        return $this->identifier;
    }

    /**
     * Get the value of category
     */ 
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Get the value of rating
     */ 
    public function getRating()
    {
        return $this->rating;
    }
}