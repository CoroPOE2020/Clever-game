<?php

namespace App\Service;

use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;

class ImportCommand 
{
    protected $kernel= 'coucou';

    function __construct(KernelInterface $kernel)
    {
        $this->kernel = $kernel;        
    }
    
    public function setCommand($name)
    {   
        $application = new Application($this->kernel);
        $application->setAutoExit(false);
        $input = new ArrayInput(
            [
                'command' => 'game',
                'name' => $name,
                '-v' => true,
            ]
        );

        $output = new BufferedOutput(
            OutputInterface::VERBOSITY_QUIET
        );
        $application->run($input, $output);

        return $output->fetch();
    }

 }