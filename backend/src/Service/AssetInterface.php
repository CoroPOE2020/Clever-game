<?php

namespace App\Service;

interface AssetInterface
{
    public function setImport($name, $apiEndpoint, $searchType, $fields, $options);
}