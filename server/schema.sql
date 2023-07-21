--This doc used for creating initial database and its tables. 

DROP DATABASE IF EXISTS customers;

--create db
CREATE DATABASE customers;

--Move into db
\c customers



CREATE TABLE IF NOT EXISTS customers 
(
id serial primary key,
first_name varchar(100),
last_name varchar(200),
email varchar(300)
);

CREATE TABLE IF NOT EXISTS items 
(
id serial primary key,
name varchar(200),
sku varchar(50),
inventory integer
);

CREATE TABLE IF NOT EXISTS purchases (
id serial primary key,
item_id integer references items(id),
purchase_qty integer
);

CREATE TABLE IF NOT EXISTS reviews (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 customer_id BIGINT NOT NULL REFERENCES customers(id),
 name VARCHAR(50) NOT NULL,
 review TEXT NOT NULL,
 rating INT NOT NULL check(rating >=1 and rating <=5)
);







-- Seed the DB


-- Create a few customers (will be reviewer)
INSERT into customers(first_name, last_name, email) 
VALUES ('John', 'Smith', 'jsmith@email.com'),
('Bob', 'Robertson', 'bobistheman@bob.com');



-- Create some items that customers can purchase (will become inventory)
INSERT into items(name, sku, inventory)
VALUES ('chair', 'A100', 50),
('ottoman', 'A101', 5),
('table', 'A102', 10),
('bench', 'A103', 19);



-- create a purchase (will become a product request)
INSERT into purchases(item_id, purchase_qty)
VALUES (4, 1);



--Reviews of Customer, by customer (just from tutorial, but could apply to gather specific client trends or lab results)
INSERT INTO reviews (customer_id, name, review, rating) 
VALUES (2, 'Igor', 'Bob always leaves bad reviews on our systems', 1);

INSERT INTO reviews (customer_id, name, review, rating) 
VALUES (1, 'Amanda', 'John  loves our products', 5);
