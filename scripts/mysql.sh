#!/bin/sh

set -a 
source $__root/laravel/.env
set +a

docker exec -it todo-mysql-container sh -c 'mysql -h mysql -P 3306 -u $MYSQL_USER $MYSQL_DATABASE -p$MYSQL_PASSWORD'

