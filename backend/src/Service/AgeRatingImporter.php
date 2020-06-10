<?php

namespace App\Service;

use App\DTO\AgeRatingDto;
use App\Entity\AgeRating;
use App\Factory\IgdbFactory;
use App\Service\AssetInterface;
use App\Repository\AgeRatingRepository;
use Doctrine\Persistence\ManagerRegistry;

class AgeRatingImporter implements ImporterInterface 
{
    public function __construct(ManagerRegistry $managerRegistry, AgeRatingRepository $AgeRatingRepository, AssetInterface $assetInterface)
    {
        $this->managerRegistry = $managerRegistry;
        $this->AgeRatingRepository = $AgeRatingRepository;
        $this->assetInterface = $assetInterface;
    }

    public function read($data)
    {

        $result = $this->AgeRatingRepository->findOneBy([
            'identifier' => $data->id,
        ]);

        if ($result !== null) {

            return null;
        }
        
        $dto = new AgeRatingDto($data->id, $data->category, $data->rating);
        return $dto;
    }

    public function process($data)
    {
        if ($data === null) {
            return null;
        }

        $ageRatingEntity = IgdbFactory::CreateAgeRating($data);

        return $ageRatingEntity;
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
        return $this->managerRegistry->getManagerForClass(AgeRating::class);
    }
}