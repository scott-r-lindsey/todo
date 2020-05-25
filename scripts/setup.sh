#!/bin/bash

set -o pipefail
set -e

__here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__root="$__here/../"

export APP_PATH=$__root

. $__here/dep/colors.sh

###############################################################################

cd $__root/laravel

# installs laravel deps, but we don't run on this PHP so we can ignore
# missing php modules, etc.
green "-------------------------------------------------------------------------------"
purple "composer --ignore-platform-reqs install"
green "-------------------------------------------------------------------------------"
composer --ignore-platform-reqs install

# .env.example is safe for development
green "-------------------------------------------------------------------------------"
purple "cp .env.example ./.env"
green "-------------------------------------------------------------------------------"
cp .env.example ./.env

# generate a laravel secret
green "-------------------------------------------------------------------------------"
purple "php artisan key:generate"
green "-------------------------------------------------------------------------------"
php artisan key:generate

# install React dependencies
green "-------------------------------------------------------------------------------"
purple "yarn"
green "-------------------------------------------------------------------------------"
yarn

# compile the react app
green "-------------------------------------------------------------------------------"
purple "yarn run dev"
green "-------------------------------------------------------------------------------"
yarn run dev

green "-------------------------------------------------------------------------------"
yellow "Configured; now run start.sh to bring up docker"
green "-------------------------------------------------------------------------------"
