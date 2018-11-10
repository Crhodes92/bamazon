DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the product table in the database
CREATE TABLE products (

  item_id INT NOT NULL AUTO_INCREMENT,

  product_name VARCHAR(45),
  
  dept_name VARCHAR(45),
  
  price INTEGER(10,2) NULL,

  stock_quantity INT(5) NULL,

  PRIMARY KEY(item_id),
);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("NTX 2080Ti (Ripoff edition)", "Electronics", 1500.99, 4);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Samsong Tablet/Phone", "Electronics", 800.00, 15);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Nintendo Power Glove by Thanos", "Electronics", 59.99, 1);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("La Creux Sparkling Water+", "Restaurants, Food, and Groceries", 5.99, 150);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Big Joe's Frozen Pizzuritos", "Restaurants, Food, and Groceries", 9.99, 571);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Azure Apron Meal Service, Lazy Edition", "Restaurants, Food, and Groceries", 99.99, 99);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Bamazon Basics Desk (no warranty included)", "Furniture and Home", 10.99, 5000);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Banksy Self Shredding Poster", "Furniture and Home", 74.99, 0);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Mattress Soft Lightly Used Bed", "Furniture and Home", 599.49, 1);

INSERT INTO products (product_name, dept_name, price, stock_quantity)
VALUES ("Insta-pot Fast Cooker", "Furniture and Home", 149.99, 200);