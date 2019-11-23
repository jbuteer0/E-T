DROP DATABASE IF EXISTS depatDB;

CREATE DATABASE depatDB;

USE depatDB;

CREATE TABLE department (
  id INT PRIMARY KEY  NOT NULL,
  name VARCHAR(30) 
);

DROP TABLE IF EXISTS roledb;

CREATE TABLE role(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR (30),
    salary DECIMAL,
    department_id INT

);

DROP TABLE IF EXISTS employeeDB;

CREATE TABLE Employee(
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NULL
);