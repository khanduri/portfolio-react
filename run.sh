#!/bin/bash

echo "install npm packages"
npm install

echo "running gulp build"
gulp build

echo "opening up app"
gunicorn app:app --log-file=-
