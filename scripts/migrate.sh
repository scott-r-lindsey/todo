#!/bin/sh

docker exec -it todo-php-container sh -c 'php artisan migrate'

