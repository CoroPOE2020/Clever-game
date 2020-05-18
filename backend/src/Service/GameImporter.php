<?php

namespace App\Service;

use App\DTO\GameDto;
use App\Entity\Game;
use App\Repository\GameRepository;
use App\Service\ImporterInterface;
use Doctrine\Persistence\ManagerRegistry;

class GameImporter implements ImporterInterface
{
    protected $managerRegistry;
    protected $gameRepository;

    public function __construct(ManagerRegistry $managerRegistry, GameRepository $gameRepository)
    {
        $this->managerRegistry = $managerRegistry;
        $this->gameRepository = $gameRepository;
    }

    public function read($data)
    {
        $result = $this->gameRepository->findOneBy([
            'identifier' => $data->id,
        ]);

        if ($result !== null) {
            print_r("déjô lô");
            return null;
        }

        $dto = new GameDto($data->id, $data->name);

        return $dto;
    }

    public function process($data)
    {
        if($data === null)
        {
            return null;
        }
    }

    public function write($data)
    {
        print_r('holla write');
    }

    protected function getObjectManager()
    {
        return $this->managerRegistry->getManagerForClass(Game::class);
    }
}
