#!/bin/bash

echo "888b.            8                 .d88b.       8  d8b "
echo "8   8 .d88b 88b. 8 .d8b. Yb  dP    YPwww. .d88b 8  8'  "
echo "8   8 8.dP' 8  8 8 8' .8  YbdP         d8 8.dP' 8 w8ww "
echo "888P' `Y88P 88P' 8 `Y8P'   dP      `Y88P' `Y88P 8  8   "
echo "            8             dP                           "

echo "Deploying ..."
echo "Commit label : $1."
git add -A && git commit -am "$1" && git push -u origin master
echo "Deployment completed."
$SHELL
