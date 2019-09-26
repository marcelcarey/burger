DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name, devoured) VALUES ("double western bacon cheeseburger");
INSERT INTO burgers(burger_name, devoured) VALUES ("western bacon cheeseburger");
INSERT INTO burgers(burger_name, devoured) VALUES("allstar cheeseburger");
