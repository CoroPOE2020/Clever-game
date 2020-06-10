<?php

namespace App\Factory;

use App\DTO\AgeRatingDto;
use App\Entity\AgeRating;
use App\Entity\Game;
use App\DTO\GameDto;

class IgdbFactory
{
    /**
     * @param GameDto $gameDto
     *
     * @return Game $gameEntity
     */
    public static function CreateGame(GameDto $gameDto)
    {
        $gameEntity = new Game;
        $gameEntity->setIdentifier($gameDto->getIdentifier());
        $gameEntity->setName($gameDto->getName());
        $gameEntity->setRating($gameDto->getRating());
        $gameEntity->setDescription($gameDto->getDescription());
        $gameEntity->setIgdbUrl($gameDto->getIgdbUrl());
        $gameEntity->setReleaseDate($gameDto->getReleaseDate());


        return $gameEntity;
    }

    /**
     * @param AgeRatingDto $ageRatingDto
     *
     * @return AgeRating $ageRatingEntity
     */
    public static function CreateAgeRating(AgeRatingDto $ageRatingDto)
    {
        $ageRatingEntity = new AgeRating;
        $ageRatingEntity->setIdentifier($ageRatingDto->getIdentifier());
        $ageRatingEntity->setCategory($ageRatingDto->getCategory());
        $ageRatingEntity->setRating($ageRatingDto->getRating());

        return $ageRatingEntity;
    }
}