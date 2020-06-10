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

    public function setImportByString($name, $apiEndpoint, $fields, $options)
    {
        $path = $this->setPath($this->url, $apiEndpoint);

        $request = $this->httpclient->request('GET', $path, [
            'headers' => [
                'user-key' => $_ENV['APP_IGDB_TOKEN']
            ],

            'body' => 'fields ' . $fields . '; limit 50; search "' . $name . '"; ' . $options . ';'
        ]);

        $data = $request->getContent();

        return $data;
    }

    public function setImportById(int $identifier, $apiEndpoint, $fields)
    {
        $path = $this->setPath($this->url, $apiEndpoint);

        $request = $this->httpclient->request('GET', $path, [
            'headers' => [
                'user-key' => $_ENV['APP_IGDB_TOKEN']
            ],

            'body' => 'fields ' . $fields . '; where id =  ' . $identifier . '; '
        ]);

        $data = $request->getContent();

        return $data;
    }

    public function setPath($url, $path)
    {
        return join(DIRECTORY_SEPARATOR, [$url, $path]);
    }
}
