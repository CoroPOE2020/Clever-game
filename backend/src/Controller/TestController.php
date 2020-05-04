<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestController extends AbstractController
{
    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }
    /**
     * @Route("/test", name="test")
     */
    public function index()
    {
        $request = $this->httpClient->request('GET', 'https://api-v3.igdb.com/games', [
            'headers' => [
                'user-key' => '0cfafd24e45e89068e7324bd83d8c2e5'
            ],

            'body' => 'fields name; limit 200; search "call of duty"; where version_parent = null & category = 0;'
        ]);        

        $read = $this->read($request);

        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
            'request' => $read
        ]); }

        protected function read($response) {
            $games = $response->toArray();

            foreach($games as $game){
                $gameNames[] = $game["name"];
            }

            
            return $gameNames;
        }
}
