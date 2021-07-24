\c products_dev;


CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    photo TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL
);