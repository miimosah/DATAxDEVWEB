
DROP TABLE use;

CREATE TABLE use
(id_use SERIAL PRIMARY KEY, id_name VARCHAR(255) NOT NULL UNIQUE, 
mdp VARCHAR(255)NOT NULL UNIQUE);


