from flask import Flask, render_template, request
from flask_mysqldb import MySQL 
#from flask_sqlalchemy import SQLAlchemy
#from pandas.io import sql 

import mysql.connector

app = Flask(__name__)

#@app.route("/", methods=['GET', 'POST'])
#def home():
    #return render_template('form.html')


#app.config['MYSQL_DATABASE_USER'] = 'root'
#app.config['MYSQL_DATABASE_PASSWORD'] = 'Thonon63'
#app.config['MYSQL_DATABASE_DB'] = 'chat_nanterre'
#app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql = MySQL(app)

#@app.route('/', methods=['GET', 'POST'])
#def index():
    #if request.method == "POST":
        #details = request.form
        #firstName = details['fname']
        #lastName = details['lname']
        #cur = mysql.connection.cursor()
        #cur.execute("INSERT INTO MyUsers(firstName, lastName) VALUES (%s, %s)", (firstName, lastName))
        #mysql.connection.commit()
        #cur.close()
        #return 'success'
    #return render_template('index.html')

#mysql.init_app(app)

cnx = mysql.connector.connect(user='root', password='Thonon63',
                              host='localhost',
                              database='chat_nanterre')
cursor = cnx.cursor()
query = "SELECT * FROM chat_nanterre.users" 
cursor.execute(query) 

connection.close()

if __name__ == '__main__':
    app.run(debug=True)


