# "todo"
Simple test app with Laravel 7

This is just Scott learning Laravel, with React as a front end.

# Requirements
 - docker
 - docker-compose
 - PHP (Any recent PHP version)
 - composer
 - yarn

# Installation

```sh
./scripts/setup.sh
```

This will install dependecies for Laravel and React.

# Run

```sh
./scripts/start.sh
```

In addition, you will have to run ```./scripts/migrate.sh``` to setup the database.

The application will appear on http://localhost:8081/

# TODO
- PHP is dockerized, node is not.  I should really choose one strategy
- testing
- linting

