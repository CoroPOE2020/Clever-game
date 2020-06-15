<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyRepository")
 */
class Company
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
     * @ORM\Column(type="integer", nullable=true)
     */
    private $identifier;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imgUrl;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $creationDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $igdbUrl;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Game", mappedBy="companies")
     */
    private $games;

    public function __construct()
    {
        $this->games = new ArrayCollection();
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

    public function getImgUrl(): ?string
    {
        return $this->imgUrl;
    }

    public function setImgUrl(?string $imgUrl): self
    {
        $this->imgUrl = $imgUrl;

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

    public function getCreationDate(): ?int
    {
        return $this->creationDate;
    }

    public function setCreationDate(?int $creationDate): self
    {
        $this->creationDate = $creationDate;

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

    /**
     * @return Collection|Game[]
     */
    public function getGames(): Collection
    {
        return $this->games;
    }

    public function addGame(Game $game): self
    {
        if (!$this->games->contains($game)) {
            $this->games[] = $game;
            $game->addCompany($this);
        }

        return $this;
    }

    public function removeGame(Game $game): self
    {
        if ($this->games->contains($game)) {
            $this->games->removeElement($game);
            $game->removeCompany($this);
        }

        return $this;
    }
}
