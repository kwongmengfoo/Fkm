from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    # return "Hello World!\n"
    return render_template('index.html')