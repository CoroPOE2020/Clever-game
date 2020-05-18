<?php

namespace App\Service;

interface ImporterInterface {
    
    public function read ($data);

    public function process($data);

    public function write($data);
}