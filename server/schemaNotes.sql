--This is not used in the seeding script. 
--SQL commands placed here for reference.

--SCHEMA TABLES EARLY
--customers used during init testing


CREATE TABLE IF NOT EXISTS customers 
(
id serial primary key,
first_name varchar(100),
last_name varchar(200),
email varchar(300)
);

-- items left over from init test
CREATE TABLE IF NOT EXISTS items 
(
id serial primary key,
name varchar(200),
sku varchar(50),
inventory integer
);

-- Purchases leftover from init test
CREATE TABLE IF NOT EXISTS purchases (
id serial primary key,
item_id integer references items(id),
purchase_qty integer
);

--Review a customer with user name, text, and 1-5 stars. Need to convert to products reviews
CREATE TABLE reviews (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 review TEXT NOT NULL,
 rating INT NOT NULL check(rating >=1 and rating <=5)
);






--  Seed commands


INSERT into customers(first_name, last_name, email) 
VALUES ('John', 'Smith', 'jsmith@email.com'),
('Bob', 'Robertson', 'bobistheman@bob.com');

-- create some items that customers can purchase
INSERT into items(name, sku, inventory)
VALUES ('chair', 'A100', 50),
('ottoman', 'A101', 5),
('table', 'A102', 10),
('bench', 'A103', 19);

-- Create a purchase
INSERT into purchases(item_id, purchase_qty)
VALUES (4, 1);


-- Add review for a customer
INSERT INTO reviews (customer_id, name, review, rating) 
VALUES (1, 'Amanda', 'John  loves our products', 5);


