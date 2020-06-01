<?php

namespace App\Action;

use App\Service\ImportIgdb;
use App\Service\GameImporter;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

abstract class AbstractSearchAction
{
    protected $managerRegistry;
    protected $importIgdb;
    protected $gameImporter;  //ImportInterface
    protected $igdbExist = false;
    protected $dbExist =  true;
    protected $entity;
    protected $apiEndpoint;
    protected $fields;
    protected $options;

    public function __construct(
        ManagerRegistry $managerRegistry,
        ImportIgdb $importIgdb,
        GameImporter $gameImporter //ImportInterface
    ) {
        $this->managerRegistry = $managerRegistry;
        $this->importIgdb = $importIgdb;
        $this->gameImporter = $gameImporter; //ImportInterface

    }

    /**
     * @param string $name
     * 
     * @return JsonResponse
     */

    public function ActionJsonResponse($name, $force = null)
    {

        if ($force != null) {

            $this->dbExist = false;
            $this->execute($name);
        } else {

            $repo = $this->managerRegistry->getRepository($this->entity)->findData($name);

            if (empty($repo)) {

                $this->dbExist = false;
                $this->execute($name);
            }
        }
        if ($this->igdbExist) {
            $repo = $this->managerRegistry->getRepository($this->entity)->findData($name);
            if (!empty($repo)) {
                $this->dbExist  = true;
            }
        }

        return new JsonResponse($repo);
    }

    protected function execute($name)
    {
        $responseJson = $this->importIgdb->setImport($name, $this->apiEndpoint, $this->fields, $this->options);

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
