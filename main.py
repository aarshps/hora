"""Project Runner"""
from flask import Flask

import hello_service

app = Flask(__name__)

@app.route('/')
def index():
    """Index method"""
    return hello_service.hello_world()
