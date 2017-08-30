#!/bin/bash
echo "Starting deployment script..."
echo "Commit label : $1."
git add -A && git commit -am "$1" && git push -u origin master && git push heroku master
echo "Completed."
