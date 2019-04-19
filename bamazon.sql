DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
item_id INTEGER (11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (40),
department_name VARCHAR (40),
price INTEGER (11),
stock_quantity INTEGER (11),
primary key (item_id)
);
SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Shoes', 'Apparel', '10', '100');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Speaker', 'Electronics', '200', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('TV', 'Appliance', '1020', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Laptop', 'Electronics', '1000', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Iphone', 'Phones', '800', '100');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Scooter', 'Toys', '50', '50');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ps4', 'Electronics', '400', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Charger', 'Phones', '15', '40');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Projector', 'Electronics', '600', '50'); 
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pants', 'Apparel', '25', '50');

SELECT * FROM products;

