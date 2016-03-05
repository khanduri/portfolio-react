from flask import Flask, render_template


app = Flask(__name__)


@app.route("/home")
def home():
    return render_template('home.html')


@app.route("/<name>")
def member(name):
    return render_template('index.html')


@app.route("/")
def index():
    # redirect this to home
    return render_template('index.html')


@app.errorhandler(404)
def not_found(error):
    return render_template('error.html'), 404


if __name__ == '__main__':
    app.run(debug=True)
