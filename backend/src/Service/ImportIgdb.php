<?php

namespace App\Service;

use App\Service\AssetInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ImportIgdb implements AssetInterface
{
    protected $httpclient;
    protected $url = 'https://api-v3.igdb.com';
    protected $nbResult = 200;

    public function __construct(HttpClientInterface $httpclient)
    {
        $this->httpclient = $httpclient;
    }

    public function setImport($entry, $apiEndpoint, $searchType, $fields, $options)
    {
        $path = $this->setPath($this->url, $apiEndpoint);
        $body = $this->createBodyRequest($fields, $searchType, $entry, $options);
        $request = $this->httpclient->request('GET', $path, [
            'headers' => [
                'user-key' => $_ENV['APP_IGDB_TOKEN']
            ],

            'body' => $body
        ]);

        $data = $request->getContent();

        return $data;
    }

    // Create url for search into igdb
    public function setPath($url, $path)
    {
        return join(DIRECTORY_SEPARATOR, [$url, $path]);
    }


    public function createBodyRequest($fields, $searchType, $entry, $options)
    {
        $body = '';
        $bodyDefault = 'fields ' . $fields . '; limit ' . $this->nbResult . '; ';

        switch($searchType) {

            // Body request for searching game by name
            case 'byString':
                $body = $bodyDefault . 'search "' . $entry . '"; ' . $options . ';';
            break;
            
            // Body request for searching cover by identifier
            case 'byId':
                $body = $bodyDefault . 'where id = ' . $entry . ';';
            break;
            
            //  Body request for searching Alternative Name by GameIdentifier
            case 'byGameId':
                $body = $bodyDefault . 'where game = ' . $entry . ';';
            break;

            // Body request by default
            default:
                $body = $bodyDefault . $options . ';';
            break;
        }

        return $body;
    }
}
