<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true, unique=true)
     */
    private $identifier;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $coverId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rating;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $igdbUrl;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $releaseDate;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Company", inversedBy="games", cascade={"persist"})
     */
    private $companies;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AlternativeNames", mappedBy="game", cascade={"persist"})
     */
    private $alternativeNames;

    public function __construct()
    {
        $this->companies = new ArrayCollection();
        $this->alternativeNames = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getIdentifier(): ?int
    {
        return $this->identifier;
    }

    public function setIdentifier(?int $identifier): self
    {
        $this->identifier = $identifier;

        return $this;
    }

    public function getCoverId(): ?string
    {
        return $this->coverId;
    }

    public function setCoverId(?string $coverId): self
    {
        $this->coverId = $coverId;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIgdbUrl(): ?string
    {
        return $this->igdbUrl;
    }

    public function setIgdbUrl(?string $igdbUrl): self
    {
        $this->igdbUrl = $igdbUrl;

        return $this;
    }

    public function getReleaseDate(): ?int
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?int $releaseDate): self
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    /**
     * @return Collection|Company[]
     */
    public function getCompanies(): Collection
    {
        return $this->companies;
    }

    public function addCompany(Company $company): self
    {
        if (!$this->companies->contains($company)) {
            $this->companies[] = $company;
        }

        return $this;
    }

    public function removeCompany(Company $company): self
    {
        if ($this->companies->contains($company)) {
            $this->companies->removeElement($company);
        }

        return $this;
    }

    /**
     * @return Collection|AlternativeNames[]
     */
    public function getAlternativeNames(): Collection
    {
        return $this->alternativeNames;
    }

    public function addAlternativeName(AlternativeNames $alternativeName): self
    {
        if (!$this->alternativeNames->contains($alternativeName)) {
            $this->alternativeNames[] = $alternativeName;
            $alternativeName->setGame($this);
        }

        return $this;
    }

    public function removeAlternativeName(AlternativeNames $alternativeName): self
    {
        if ($this->alternativeNames->contains($alternativeName)) {
            $this->alternativeNames->removeElement($alternativeName);
            // set the owning side to null (unless already changed)
            if ($alternativeName->getGame() === $this) {
                $alternativeName->setGame(null);
            }
        }

        return $this;
    }
}
