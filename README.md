# Get started project

## Initialize project

```docker-compose up --build```

## Install Symfony container

```docker-compose exec php bash```

```COMPOSER_MEMORY_LIMIT=-1 composer install```

## Config node container

```docker-compose exec node bash```

```npm install```

```node app.js```

## Debug parts

* Problem with mysql port : `service mysql stop`
* Problem with apache port : `service apache2 stop`
* Problem with docker container : `docker system prune -a`


## Ports

*  [**symfony**][1]
*  [**node**][2]


## Contributors

List of contributors of Clever Game project

|<a href="https://github.com/Anneb1309"><img alt="Anne Bouccin" src="https://avatars3.githubusercontent.com/u/46346256?s=400&v=4" width="100"></a>|<a href="https://github.com/Fatoorehchi"><img alt="Tom Fatoorehchi" src="https://avatars0.githubusercontent.com/u/48093078?s=400&v=4" width="100"></a>|<a href="https://github.com/glukor"><img alt="Clement Franch" src="https://avatars1.githubusercontent.com/u/46323702?s=400&u=73a1567bfc862623a8960a4fed8d846b9c30fcfd&v=4g" width="100"></a>|<a href="https://github.com/merigoharra"><img alt="Mohamed Henini" src="https://avatars1.githubusercontent.com/u/46314970?s=400&u=c9d3ef33d16d2422a5653d02b2c4c319e1531e1c&v=4" width=100></a>|<a href="https://github.com/GevangeN"><img alt="Guillaume Nanette" src="https://avatars1.githubusercontent.com/u/48018533?s=400&u=a0739087d1e688ad01b67fe486b80e0559972778&v=4" width=100></a>|<a href="https://github.com/manuscri95"><img alt="Emmanuel Phirmis" src="https://avatars3.githubusercontent.com/u/57350102?s=400&v=4" width=100></a>|<a href="https://github.com/vreymond"><img alt="Valentin Reymond" src="https://avatars2.githubusercontent.com/u/25683049?s=460&u=2601a55abad686c7bf9176391995a1e4cb73801f&v=4" width=100></a>|
|---|---|---|---|---|---|---|
|[Anne Bouccin](https://github.com/Anneb1309)|[Tom Fatoorehchi](https://github.com/Fatoorehchi)|[Clément Franch](https://github.com/glukor)|[Mohamed Henini](https://github.com/merigoharra)|[Guillaume Nanette](https://github.com/GevangeN)|[Emmanuel Phirmis](https://github.com/manuscri95)|[Valentin Reymond](https://github.com/vreymond)|

[1]: http://localhost:80
[2]: http://localhost:3001