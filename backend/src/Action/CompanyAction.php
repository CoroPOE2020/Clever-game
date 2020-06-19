<?php

namespace App\Action;

use App\Entity\Company;
use App\Service\CompanyImporter;
use App\Service\ImportIgdb;
use Doctrine\Common\Persistence\ManagerRegistry;

class CompanyAction extends AbstractSearchAction
{
    protected $entity = Company::class;
    protected $apiEndpoint = 'companies';
    protected $searchType = 'byId';
    protected $fields = 'name, rating, age_ratings, summary, url, first_release_date, cover, involved_companies, alternative_names';
    protected $options = 'where version_parent = null & category = 0';

    public function __construct(ManagerRegistry $managerRegistry, ImportIgdb $importIgdb, CompanyImporter $companyImporter)
    {
        parent::__construct(
            $managerRegistry,
            $importIgdb,
            $companyImporter
        );
    }

    /**
     * @param string $game
     * $force allow to send a request directly to IGDB api for more results and add this in our DataBase ($force is null by default)
     * @param string $force
     */
    public function __invoke($game, $force)
    {
        return $this->ActionJsonResponse($game, $force);
    }
}
