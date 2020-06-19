<?php

namespace App\Repository;

use App\Entity\AlternativeNames;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AlternativeNames|null find($id, $lockMode = null, $lockVersion = null)
 * @method AlternativeNames|null findOneBy(array $criteria, array $orderBy = null)
 * @method AlternativeNames[]    findAll()
 * @method AlternativeNames[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AlternativeNamesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AlternativeNames::class);
    }

    // /**
    //  * @return AlternativeNames[] Returns an array of AlternativeNames objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AlternativeNames
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
