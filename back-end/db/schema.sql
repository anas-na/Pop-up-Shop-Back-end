CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    photo TEXT NOT NULL,
    description VARCHAR(300) NOT NULL,
    price NUMERIC NOT NULL
);  

-- https://www.youtube.com/watch?v=SAUvlkTDMM4