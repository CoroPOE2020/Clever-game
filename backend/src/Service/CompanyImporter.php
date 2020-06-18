<?php

namespace App\Service;

use App\Entity\Company;
use App\Repository\CompanyRepository;
use App\Service\ImporterInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\AssetInterface;

class CompanyImporter implements ImporterInterface
{
    protected $managerRegistry;
    protected $companyRepository;
    protected $assetInterface;

    public function __construct(ManagerRegistry $managerRegistry, CompanyRepository $companyRepository, AssetInterface $assetInterface)
    {
        $this->managerRegistry = $managerRegistry;
        $this->companyRepository = $companyRepository;
        $this->assetInterface = $assetInterface;
    }

    // Get data from the DB and verify each fields
    public function read($data)
    {
       
    }

    // Once datas are checked, they are stocked in their Entity
    public function process($data)
    {
       
    }

    // Persist and flush datas with the objectManager 
    public function write($data)
    {
        
    }

    protected function getObjectManager()
    {
        return $this->managerRegistry->getManagerForClass(Company::class);
    }

    // For the company logo, we need to use another endpoint 
    protected function getCompanyLogo(Company $company): void
    {

    }
    // Use another endpoint and set datas in Entity 
    protected function getAlternativeNames(Company $company): void
    {
       
    }
}