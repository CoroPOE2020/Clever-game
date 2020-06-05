<?php

namespace App\Factory;

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
        $gameEntity->setCoverId($gameDto->getCoverId());

        return $gameEntity;
    }
}