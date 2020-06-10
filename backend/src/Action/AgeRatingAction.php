<?php

namespace App\Action;

use App\Entity\AgeRating;
use App\Service\ImportIgdb;
use App\Service\AgeRatingImporter;
use Doctrine\Common\Persistence\ManagerRegistry;

class AgeRatingAction extends AbstractSearchAction
{
    protected $entity = AgeRating::class;
    protected $apiEndpoint = 'age_ratings';
    protected $searchType = '';
    protected $fields = '*';
    protected $options = 'where id = 2707';
    protected $ageRatingImporter;

    public function __construct(ManagerRegistry $managerRegistry, ImportIgdb $importIgdb, AgeRatingImporter $ageRatingImporter)
    {
        parent::__construct(
            $managerRegistry,
            $importIgdb,        
            $ageRatingImporter
        );
    }

    /**
     * @param string $name
     */
    public function __invoke()
    {
        return $this->ActionJsonResponse('', 'true');
    }
}