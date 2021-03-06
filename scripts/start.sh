#!/bin/bash

set -o pipefail
set -e

__here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
__root="$__here/../"

set -a 
source $__root/laravel/.env
set +a

export APP_PATH=$__root

. $__here/dep/colors.sh

###############################################################################

green "-------------------------------------------------------------------------------"
purple "docker-compose --file docker/dev.yml up --build"
green "-------------------------------------------------------------------------------"
docker-compose --file docker/dev.yml up --build

