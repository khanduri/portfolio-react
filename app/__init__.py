import json
from flask import Flask, render_template


app = Flask(__name__)


@app.route("/home")
def home():
    return render_template('home.html')

FILE_MAP = {
    'prashant': 'app/data/prashant.json',
}

@app.route("/<alias>")
def member(alias):
    data_file_path = FILE_MAP.get(alias)
    if not data_file_path:
        return render_template('error.html')

    json_data = json.loads(open(data_file_path).read())
    return render_template('index.html', json_data=json_data)


@app.route("/")
def index():
    json_data = json.loads(open('app/data/prashant.json').read())
    return render_template('index.html', json_data=json_data)


@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
