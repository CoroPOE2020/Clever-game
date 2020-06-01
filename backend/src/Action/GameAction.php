<?php

namespace App\Action;

use App\Entity\Game;

class GameAction extends AbstractSearchAction
{
    protected $entity = Game::class;
    protected $apiEndpoint = 'games';
    protected $fields = 'name, rating';
    protected $options = 'where version_parent = null & category = 0';

    /**
     * @param string $game
     * @param string $force
     */
    public function __invoke($game, $force)
    {
        return $this->ActionJsonResponse($game, $force);
    }
}
