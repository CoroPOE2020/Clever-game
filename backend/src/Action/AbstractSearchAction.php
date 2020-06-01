<?php

namespace App\Action;

use App\Entity\Game;
use App\Service\ImportIgdb;
use App\Service\GameImporter;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

abstract class AbstractSearchAction 
{
    protected $managerRegistry;
    protected $importIgdb;
    protected $gameImporter;
    protected $igdbExist = false;
    protected $dbExist =  true;


    public function __construct(
        ManagerRegistry $managerRegistry,
        ImportIgdb $importIgdb,
        GameImporter $gameImporter
    ) {
        $this->managerRegistry = $managerRegistry;
        $this->importIgdb = $importIgdb;
        $this->gameImporter = $gameImporter;
    }

    /**
     * @param string $game
     * 
     * @return JsonResponse
     */

    public function __invoke($game = 'pika', $force = null)
    {

        if ($force != null) {

            $this->dbExist = false;
            $this->execute($game);
        } else {

            $repo = $this->managerRegistry->getRepository(Game::class)->findGames($game);

            if (empty($repo)) {

                $this->dbExist = false;
                $this->execute($game);
            }   
        }
        if ($this->igdbExist) {
            $repo = $this->managerRegistry->getRepository(Game::class)->findGames($game);
            if (!empty($repo)) {
                $this->dbExist  = true;
            }
        }

        return new JsonResponse($repo);
    }

    protected function execute($name)
    {
        $apiEndpoint = 'games';
        $fields = 'name';
        $options = 'where version_parent = null & category = 0';

        $responseJson = $this->importIgdb->setImport($name, $apiEndpoint, $fields, $options);

        $data = json_decode($responseJson);

        if ($data == []) {
            return null;
        } else {
            $this->igdbExist = true;
        }

        foreach ($data as $entry) {

            $DTO = $this->gameImporter->read($entry);
            $entity = $this->gameImporter->process($DTO);
            $this->gameImporter->write($entity);
        }
    }
}
