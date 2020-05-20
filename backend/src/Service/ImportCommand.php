<?php

namespace App\Service;

use Symfony\Component\Console\Output\Output;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Validator\Constraints\Json;
use Symfony\Contracts\HttpClient\HttpClientInterface;


class ImportCommand
{
    protected $httpclient;
    
    public function __construct(HttpClientInterface $httpclient) {
        $this->httpclient = $httpclient;
    }

    public function setCommand($name)
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
