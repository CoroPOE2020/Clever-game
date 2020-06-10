<?php

namespace App\Service;

use App\Service\AssetInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ImportIgdb implements AssetInterface
{
    protected $httpclient;
    protected $url = 'https://api-v3.igdb.com';

    public function __construct(HttpClientInterface $httpclient)
    {
        $this->httpclient = $httpclient;
    }

    public function setImport($name, $apiEndpoint, $searchType, $fields, $options)
    {
        $path = $this->setPath($this->url, $apiEndpoint);
        $body = $this->createBodyRequest($fields, $searchType, $name, $options);
        $request = $this->httpclient->request('GET', $path, [
            'headers' => [
                'user-key' => $_ENV['APP_IGDB_TOKEN']
            ],

            'body' => $body 
        ]);

        $data = $request->getContent();

        return $data;
    }

    public function setPath($url, $path)
    {
        return join(DIRECTORY_SEPARATOR, [$url, $path]);
    }

    public function createBodyRequest($fields, $searchType, $entry, $options)
    {
        if ($searchType == 'string') {
            $body = 'fields ' . $fields . '; limit 50;  search "' . $entry . '"; ' . $options . ';' ;        
            return $body;
        }
        elseif ($searchType == 'integer') {
            $body = 'fields ' . $fields . '; limit 50;  where id = ' . $entry . ';';
            return $body;
        }
        $body = 'fields ' . $fields. '; limit 200;' . $options .';';
            return $body;
    }
}
