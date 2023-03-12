"""Project Runner"""
from flask import Flask, render_template
from services import hello_service

app = Flask(__name__)

URL = "aarshps-obscure-space-tribble-q7qwvwpjv5xcx6j-5000.preview.app.github.dev"

@app.route('/')
def home():
    """Home Route"""
    return render_template('home.html')

@app.route('/hello/')
def hello():
    """Hello Route"""
    return hello_service.hello_world()
