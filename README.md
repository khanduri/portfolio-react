

HEROKU:
 - heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-python


STEPS:
  - virtualenv --no-site-packages env
  - source env/bin/activate
  - pip install Flask
  - pip install -r requirements.txt  # pip freeze > requirements.txt
  - npm install -b bower
  - bower init
  - npm init
  - npm install --save-dev bower
  - vim .bowerrc
  - update bower.json with dependencies
  - bower install
  - npm install gulp --save-dev
./run.py
gulp
