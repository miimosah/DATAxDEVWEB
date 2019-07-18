# -*- coding: utf-8 -*-
"""
Created on Tue Jul 16 15:42:48 2019

@author: utilisateur
"""

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug = True)
    