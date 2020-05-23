#!/bin/sh

#------------------------------------------------------------------------------
# startup for php
#
# executed as "www-data"
#------------------------------------------------------------------------------

set -o pipefail
set -e

# start the command
exec php-fpm

