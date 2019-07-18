DROP TABLE message;

CREATE TABLE message (id_message SERIAL NOT NULL, 
contents VARCHAR(255) NOT NULL,
PRIMARY KEY (id_message), id_use INT NOT NULL); 

ALTER TABLE message ADD CONSTRAINT use FOREIGN KEY (id_use) REFERENCES use (id_use) MATCH FULL;