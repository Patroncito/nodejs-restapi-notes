CREATE DATABASE IF NOT EXISTS notesApp;

USE notesApp;

CREATE TABLE notes (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name varchar(100) DEFAULT NULL,
    tasktext varchar(1000) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE notes;

INSERT INTO notes VALUES
(1, 'Go to supermarket', "Buy new clothes, 1 T-shirt, 4 caps and 2 cinema ticket"),
(1, 'Sleep ', "don´t drink coffe later"),
(1, 'Australia Travel', "Mexico City -> Los Angeles -> Hawai -> Melboure"),
(1, 'Read a book', "Go to bookstore and buy harry potter");