<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class ImportIgdb
{
    protected $httpclient;
    
    public function __construct(HttpClientInterface $httpclient) {
        $this->httpclient = $httpclient;
    }

    public function setImport($name)
    {
                
        $request = $this->httpclient->request('GET', 'https://api-v3.igdb.com/games', [
            'headers' => [
                'user-key' => '0cfafd24e45e89068e7324bd83d8c2e5'
            ],

            'body' => 'fields name; limit 50; search "' . $name . '"; where version_parent = null & category = 0;'
        ]);

        $data = $request->getContent();

        return $data;

    }
}
