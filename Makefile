MAKEFLAGS += --silent

build:
	docker-compose build --no-cache

upd:
	docker-compose up -d

php:
	docker-compose exec php bash

node:
	docker-compose exec node bash

db:
	docker-compose exec db bash

stop:
	docker-compose stop

down:
	docker-compose down