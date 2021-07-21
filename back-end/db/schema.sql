DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev;

\c products_dev;


CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    photo TEXT NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL
);