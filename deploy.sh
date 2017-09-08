#!/bin/bash

echo"  ___                                                       "
echo" (|  \ _   |\ _              _     _|_     () _   ,_ o  _|_ "
echo"  |   |/|/\|// \|  | /|/|/| |/ /|/| |      /\/   /  |||/\|  "
echo" (\__/|_|_/|_\_/ \/|/ | | |_|_/ | |_|_/   /(_\__/   |||_/|_/"
echo"       (,         (|                                 (|     "
echo" (|  |_/|                                                   "
echo"  |  |  |                                                   "
echo"   \/   |                                                   "


echo "Deploying ..."
echo "Commit label : $1."
git add -A && git commit -am "$1" && git push -u origin master
echo "Deployment completed."
$SHELL
