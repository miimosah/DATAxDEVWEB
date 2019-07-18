from flask import Flask, render_template, request
from flaskext.mysql import MySQL 
#from flask_sqlalchemy import SQLAlchemy

import mysql.connector

app = Flask(__name__)

#app.config['MYSQL_DATABASE_USER'] = 'root'
#app.config['MYSQL_DATABASE_PASSWORD'] = 'Thonon63'
#app.config['MYSQL_DATABASE_DB'] = 'chat_nanterre'
#app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql = MySQL(app)

mysql.init_app(app)

cnx = mysql.connector.connect(user='root', password='Thonon63',
                              host='localhost',
                              database='chat_nanterre')
cursor = cnx.cursor()
query = "SELECT * FROM chat_nanterre.users" 
cursor.execute(query) 

connection.close()

if __name__ == '__main__':
    app.run(debug=True)


