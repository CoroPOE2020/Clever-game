<?php

namespace App\Service;

interface AssetInterface
{
    public function setImport($entry, $apiEndpoint, $searchType, $fields, $options);
}