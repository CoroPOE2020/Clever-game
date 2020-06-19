<?php

namespace App\Service;

use App\DTO\GameDto;
use App\Entity\Game;
use App\Entity\Company;
use App\Factory\IgdbFactory;
use App\Service\AssetInterface;
use App\Entity\AlternativeNames;
use App\Repository\GameRepository;
use App\Service\ImporterInterface;
use App\Repository\CompanyRepository;
use Doctrine\Persistence\ManagerRegistry;

class GameImporter implements ImporterInterface
{
    protected $managerRegistry;
    protected $gameRepository;
    protected $companyRepository;
    protected $assetInterface;
    private $rating = 0;
    private $summary = '';
    private $url = null;
    private $first_release_date = 0;
    private $image_id = null;
    private $gameId = null;
    private $involved_companies = [];


    public function __construct(ManagerRegistry $managerRegistry, GameRepository $gameRepository, CompanyRepository $companyRepository, AssetInterface $assetInterface)
    {
        $this->managerRegistry = $managerRegistry;
        $this->gameRepository = $gameRepository;
        $this->companyRepository = $companyRepository;
        $this->assetInterface = $assetInterface;
    }

    // Get data from the DB and verify each fields
    public function read($data)
    {
        $result = $this->gameRepository->findOneBy([
            'identifier' => $data->id,
        ]);

        if ($result !== null) {

            return null;
        }





        // check if all fields exist
        isset($data->rating) ? $this->rating = $data->rating : $this->rating;
        isset($data->summary) ? $this->summary = $data->summary : $this->summary;
        isset($data->url) ? $this->url = $data->url : $this->url;
        isset($data->first_release_date) ? $this->first_release_date = $data->first_release_date : $this->first_release_date;

        isset($data->cover) ? $this->image_id = $data->cover : $this->image_id = null;

        isset($data->alternative_names) ? $this->gameId = $data->id : $this->gameId = null;

        isset($data->involved_companies) ? $this->involved_companies = $data->involved_companies : $this->involved_companies = [];

        $dto = new GameDto($data->id, $data->name, $this->rating, $this->summary, $this->url, $this->first_release_date);

        return $dto;
    }

    // Once datas are checked, they are stocked in their Entity
    public function process($data): ?Game
    {
        if ($data === null) {
            return null;
        }

        $gameEntity = IgdbFactory::CreateGame($data);

        $this->getGameCover($gameEntity);
        $this->getAlternativeNames($gameEntity);
        $this->getCompanies($gameEntity);

        // echo '<pre>';
        // print_r($gameEntity);
        // echo '</pre>';
        // die();

        return $gameEntity;
    }

    // Persist and flush datas with the objectManager 
    public function write($data)
    {
        $om = $this->getObjectManager(Game::class);

        if ($om === null || $data === null) {
            return false;
        }

        $om->persist($data);
        $om->flush();
        return true;
    }

    // For the image of the game, we need to use another endpoint 
    protected function getGameCover(Game $game): void
    {
        // if the game data contains a cover, we send a request to get the cover_id to IGDB
        isset($this->image_id) ? $cover = json_decode($this->assetInterface->setImport($this->image_id, 'covers', 'byId', 'image_id', '')) : $cover = null;

        isset($cover) ? $response = $cover[0]->image_id : $response = null;

        $game->setCoverId($response);
    }

    // Use another endpoint and set datas in Entity 
    protected function getAlternativeNames(Game $game): void
    {
        // if the game data contains alternatives names, we send a request to get the alternatives names to IGDB
        isset($this->gameId) ? $data = json_decode($this->assetInterface->setImport($this->gameId, 'alternative_names', 'byGameId', '*', '')) : $data = [];

        foreach ($data as $entry) {

            $altName = new AlternativeNames();
            $altName->setName($entry->name);
            isset($entry->comment) ? $altName->setComment($entry->comment) : $altName->setComment('');

            $game->addAlternativeName($altName);
        }
    }

    protected function getCompanies(Game $game): void
    {
        foreach ($this->involved_companies as $involved_company) {
            $response = $this->assetInterface->setImport($involved_company, 'involved_companies', 'byId', '*', '');
            $result = json_decode($response);
            $publisher = $result[0]->publisher;

            if ($publisher == 1) {
                $companyEntry = json_decode($this->assetInterface->setImport($result[0]->company, 'companies', 'byId', 'name, description, created_at, logo, url', ''))[0];

                if ($companyEntry) {                    
                    
                    $identifier = $this->companyRepository->findOneBy(["identifier" => $companyEntry->id]);

                    // echo '<pre>';
                    // print_r($identifier);
                    // echo '</pre>';
                    // die();
                    
                    if ($identifier === null) {

                        $company = new Company();

                        isset($companyEntry->name) ? $company->setName($companyEntry->name) : $company->setName('');


                        isset($companyEntry->id) ? $company->setIdentifier($companyEntry->id) : $company->setIdentifier('');


                        isset($companyEntry->logo) ? $company->setImgUrl($companyEntry->logo) :  $company->setImgUrl('');

                        isset($companyEntry->description) ? $company->setDescription($companyEntry->description) : $company->setDescription('');

                        isset($companyEntry->created_at) ? $company->setCreationDate($companyEntry->created_at) : $company->setCreationDate(0);

                        isset($companyEntry->url) ? $company->setIgdbUrl($companyEntry->url) : $company->setIgdbUrl('');

                        $game->addCompany($company);
                    }
                } else {
                    return;
                }
            }

            // die();
        }
    }

    protected function getObjectManager($entity)
    {
        return $this->managerRegistry->getManagerForClass($entity);
    }
}
