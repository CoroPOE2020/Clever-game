<?php

namespace App\Service;

use App\DTO\GameDto;
use App\Entity\Game;
use App\Factory\IgdbFactory;
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
            // echo '<pre>';
            // print_r("déjô lô");
            // echo '</pre>';
            return null;
        }

        $dto = new GameDto($data->id, $data->name);

        return $dto;
    }

    public function process($data): ?Game
    {
        if ($data === null) {
            return null;
        }

        $gameEntity = IgdbFactory::CreateGame($data);

        return $gameEntity;
    }

    public function write($data)
    {
        $om = $this->getObjectManager();

        if ($om === null || $data === null) {
            return false;
        }

        $om->persist($data);
        $om->flush();
        return true;
    }

    protected function getObjectManager()
    {
        return $this->managerRegistry->getManagerForClass(Game::class);
    }
}
