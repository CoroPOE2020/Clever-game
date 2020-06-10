<?php

namespace App\Service;

interface AssetInterface
{
    public function setImportByString(string $name, $apiEndpoint, $fields, $options);

    public function setImportById(int $id, $apiEndpoint, $fields);
}