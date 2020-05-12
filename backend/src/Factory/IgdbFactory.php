<?php

namespace App\Factory;

use App\Entity\Game;
use App\DTO\GameDto;

class IgdbFactory
{
    /**
     * @param GameDto $gameDto
     *
     * @return Game
     */
    public static function CreateGame(GameDto $gameDto)
    {
        $game = new Game;
        $game->setIdentifier($gameDto->getIdentifier());
        $game->setName($gameDto->getName());

        return $game;
    }
}
