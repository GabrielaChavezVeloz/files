#################################################################################
#################################################################################
-- SECTION: First Steps in SQL
#################################################################################
#################################################################################

##Creating a Database - Part I
CREATE DATABASE IF NOT EXISTS Sales;

##Creating a Database - Part II
USE Sales;

##Creating a table
create table sales
(
	purchase_number int not null primary key auto_increment,
    date_of_purchase date not null,
    customer_id int,
    item_code varchar(10) not null
);

##Creating a table - exercise
create table customers
(
	customer_id int,
    first_name varchar(255),
    last_name varchar(255),
    email_address varchar(255),
    number_of_complaints int
);

##Using Databases and Tables - excercise 
select * from sales;

select * from sales.customers;

##Additional notes on using tables - exercise
drop table sales;

#################################################################################
#################################################################################
-- SECTION: MySQL Constraints
#################################################################################
#################################################################################

##PRIMARY KEY constraint

CREATE TABLE sales
(
	purchase_number int auto_increment,
    date_of_purchase date,
    customer_id int,
    item_code varchar(10),
PRIMARY KEY (purchase_number)
);

##PRIMARY KEY constraint - exercise

drop table customers;

CREATE TABLE customers                                                              
(  
    customer_id INT,  
    first_name varchar(255),  
    last_name varchar(255),  
    email_address varchar(255),  
    number_of_complaints int,  
primary key (customer_id)  
);  

create table items (
    item_code varchar(255),
    item varchar(255),
    unit_price numeric(10,2),
    company_id varchar(255),
PRIMARY KEY (item_code)
);

create table companies   
(
    company_id varchar(255),   
    company_name varchar(255),  
    headquarters_phone_number int(12),   
primary key (company_id)   
);


##FOREIGN KEY Constraint - Part I

drop table sales;

create table sales
(
	purchase_number int auto_increment,
    date_of_purchase DATE,
    customer_id int,
    item_code varchar(10),
PRIMARY KEY (purchase_number),
FOREIGN KEY (customer_id) references customers(customer_id) on delete cascade
);

alter table sales
add foreign key (customer_id) references customersv (customer_id) on delete cascade;

alter table sales
drop foreign key sales_ibfk_1;

##FOREIGN KEY Constraint - Part II - exercise

drop table sales;

drop table customers;

drop table items;

drop table companies;

## UNIQUE Constraint

create table customers 
(
    customer_id int,
    first_name varchar(255),
    last_name varchar(255),
    email_address varchar(255),
    number_of_complaints int,
primary key (customer_id),
unique key (email_address)
);

drop table customers;
create table customers 
(
    customer_id int,
    first_name varchar(255),
    last_name varchar(255),
    email_address varchar(255),
    number_of_complaints int,
primary key (customer_id)
);

alter table customers
add unique key (email_address);

alter table customers
drop index email_address;

## UNIQUE Constraint - exercise

drop table customers;
create table customers 
(
    customer_id int auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    email_address varchar(255),
    number_of_complaints int,
primary key (customer_id)
);

ALTER TABLE customers
ADD COLUMN gender ENUM('M', 'F') AFTER last_name;

INSERT INTO customers (first_name, last_name, gender, email_address, number_of_complaints)
VALUES ('John', 'Mackinley', 'M', 'john.mckinley@365careers.com', 0);

## DEFAULT Constraint

alter table customers
change column number_of_complaints number_of_complaints int default 0;

INSERT INTO customers (first_name, last_name, gender) 
VALUES	('Peter', 'Figaro', 'M');

select * from customers;

alter table customers
alter column number_of_complaints drop default;

## DEFAULT Constrains - exercise
CREATE TABLE companies
(
    company_id VARCHAR(255),
    company_name VARCHAR(255) DEFAULT 'X',
    headquarters_phone_number VARCHAR(255),
PRIMARY KEY (company_id),
UNIQUE KEY (headquarters_phone_number)
);

DROP TABLE companies;

##  NOT NULL Constraint - Part I

create table companies
(
	company_id int auto_increment,
    headquarters_phone_number varchar(255),
    company_name VARCHAR(255) not null,
PRIMARY KEY (company_id)
);

alter table companies
modify company_name varchar(255) null;

alter table companies
change column company_name company_name varchar(255) not null;

INSERT INTO companies (headquarters_phone_number)
VALUES	('+1 (202) 555-0196');

INSERT INTO companies (headquarters_phone_number, company_name)
VALUES	('+1 (202) 555-0196', 'Company A');

SELECT * FROM companies;


## NOT NULL Constraint - Part I - exercise

ALTER TABLE companies
MODIFY headquarters_phone_number VARCHAR(255) NULL;

ALTER TABLE companies
CHANGE COLUMN headquarters_phone_number headquarters_phone_number VARCHAR(255) NOT NULL;

#################################################################################
#################################################################################
-- SECTION: SQL Best Practices
#################################################################################
#################################################################################

## Coding techniques and best practices - Part II
CREATE TABLE IF NOT EXISTS test (
    numbers INT(10),
    words VARCHAR(10)
);

##########################################################
##########################################################

-- SECTION: Loading the 'employees' Database

##########################################################
##########################################################

USE employees;


##########################################################
##########################################################

-- SECTION: The SQL SELECT Statement

##########################################################
##########################################################


## SELECT - FROM

SELECT 
    first_name, last_name
FROM
    employees;
    
SELECT 
    *
FROM
    employees;

## SELECT - FROM - exercise
SELECT 
    dept_no
FROM
    departments;

SELECT 
    *
FROM
    departments;

    
## WHERE

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis';
    
## WHERE - exercise
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Elvis';


## AND

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis' AND gender = 'M';
    
## AND - exercise
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Kellie' AND gender = 'F'; 
    
## OR

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis';
    
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis' AND gender = 'M';

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis' OR first_name = 'Elvis';

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Denis'
        AND first_name = 'Elvis';
    
## OR - exercise
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Kellie'
        OR first_name = 'Aruna'; 
    
## Operator precedence

SELECT 
    *
FROM
    employees
WHERE
    last_name = 'Denis' AND gender = 'M' OR gender = 'F';

SELECT 
    *
FROM
    employees
WHERE
    last_name = 'Denis' AND (gender = 'M' OR gender = 'F');
    
## Operator Precedence - exercise
SELECT 
    *
FROM
    employees
WHERE
    gender = 'F' AND (first_name = 'Kellie' OR first_name = 'Aruna');


## IN -NOT IN 

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Cathie'
        OR first_name = 'Mark'
        OR first_name = 'Nathan';

SELECT 
    *
FROM
    employees
WHERE
    first_name IN ('Cathie' , 'Mark', 'Nathan');

SELECT 
    *
FROM
    employees
WHERE
    first_name NOT IN ('Cathie' , 'Mark', 'Nathan');
    
## IN -NOT IN - exercise 1
SELECT 
    *
FROM
    employees
WHERE
    first_name IN ('Denis' , 'Elvis');
    
## IN -NOT IN - exercise 2
SELECT 
    *
FROM
    employees
WHERE
    first_name NOT IN ('John' , 'Mark', 'Jacob');
    
    
## LIKE - NOT LIKE 

SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE('Mar%');
    
SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE('ar%');

SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE('%ar');
    
SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE('%ar%');

SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE ('Mar_');
    
SELECT 
    *
FROM
    employees
WHERE
    first_name NOT LIKE ('%Mar%');

## LIKE - NOT LIKE  - exercise
SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE('Mark%');

SELECT 
    *
FROM
    employees
WHERE
    hire_date LIKE ('%2000%');

SELECT 
    *
FROM
    employees
WHERE
    emp_no LIKE ('1000_');


## Wildcard Characters

## Wildcard Characters - exercise
SELECT 
    *
FROM
    employees
WHERE
    first_name LIKE ('%JACK%');

SELECT 
    *
FROM
    employees
WHERE
    first_name NOT LIKE ('%Jack%'); 
    
    
## BETWEEN - AND
   
SELECT 
    *
FROM
    employees
WHERE
    hire_date BETWEEN '1990-01-01' AND '2000-01-01';
    
    
SELECT 
    *
FROM
    employees
WHERE
    hire_date NOT BETWEEN '1990-01-01' AND '2000-01-01';    

## BETWEEN - AND - exersice
SELECT 
    *
FROM
    salaries;

SELECT 
    *
FROM
    salaries
WHERE
    salary BETWEEN 66000 AND 70000;
    
SELECT 
    *
FROM
    employees
WHERE
    emp_no NOT BETWEEN '10004' AND '10012';
    
SELECT 
    dept_name
FROM
    departments
WHERE
    dept_no BETWEEN 'd003' AND 'd006';
    
    
## IS NOT NULL - IS NULL
    
SELECT 
    *
FROM
    employees
WHERE
    first_name IS NOT NULL;
    
SELECT 
    *
FROM
    employees
WHERE
    first_name IS NULL;

## IS NOT NULL - IS NULL -exersice
SELECT 
    dept_name
FROM
    departments
WHERE
    dept_no IS NOT NULL;
    
##  Other Comparison Operators

SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Mark';
    
SELECT 
	*
FROM 
	employees
WHERE
	first_name <> 'Mark';
    
SELECT 
	*
FROM 
	employees
WHERE
	first_name != 'Mark';
    
SELECT 
    *
FROM
    employees
WHERE
    hire_date > '2000-01-01';
    
SELECT 
    *
FROM
    employees
WHERE
    hire_date >= '2000-01-01';

SELECT 
    *
FROM
    employees
WHERE
    hire_date < '1985-02-01';
    
SELECT 
    *
FROM
    employees
WHERE
    hire_date <= '1985-02-01';

##  Other Comparison Operators - exersice
SELECT 
    *
FROM
    employees
WHERE
    hire_date >= '2000-01-01'
        AND gender = 'F';
SELECT 
    *
FROM
    salaries
WHERE
    salary > 150000;
    
    
## SELECT DISTINCT

SELECT 
    gender
FROM
    employees;
    
SELECT DISTINCT
    gender
FROM
    employees;
    
## SELECT DISTINCT -exercise
SELECT DISTINCT
    hire_date
FROM
    employees;

## Introduction to Aggregate Functions    
    
SELECT 
    COUNT(emp_no)
FROM
    employees;
    
SELECT 
    *
FROM
    employees
WHERE
    first_name IS NULL;
    
SELECT 
    COUNT(first_name)
FROM
    employees;

SELECT 
    COUNT(DISTINCT first_name)
FROM
    employees;

## Introduction to Aggregate Functions - exercise
SELECT 
    COUNT(*)
FROM
    salaries
WHERE
    salary >= 100000;
    
SELECT 
    COUNT(*)
FROM
    dept_manager;
    

## ORDER BY

SELECT 
    *
FROM
    employees
ORDER BY first_name;

SELECT 
    *
FROM
    employees
ORDER BY first_name ASC;

SELECT 
    *
FROM
    employees
ORDER BY first_name DESC;

SELECT 
    *
FROM
    employees
ORDER BY emp_no DESC;

SELECT 
    *
FROM
    employees
ORDER BY first_name , last_name ASC;

## ORDER BY - exercise
SELECT 
    *
FROM
    employees
ORDER BY hire_date DESC;


## GROUP BY

SELECT 
    first_name
FROM
    employees;
    
SELECT 
    first_name
FROM
    employees
GROUP BY first_name;

SELECT DISTINCT
    first_name
FROM
    employees;

SELECT 
    COUNT(first_name)
FROM
    employees
GROUP BY first_name;

SELECT 
    first_name, COUNT(first_name)
FROM
    employees
GROUP BY first_name;

SELECT 
    first_name, COUNT(first_name)
FROM
    employees
GROUP BY first_name
ORDER BY first_name DESC;


## Using Aliases (AS)

SELECT 
    first_name, COUNT(first_name) AS names_count
FROM
    employees
GROUP BY first_name
ORDER BY first_name DESC;

## Using Aliases (AS) - exercise
SELECT 
    salary, COUNT(emp_no) AS emps_with_same_salary
FROM
    salaries
WHERE
    salary > 80000
GROUP BY salary
ORDER BY salary;


## HAVING

SELECT 
    *
FROM
    employees
WHERE
    hire_date >= '2000-01-01';
    
SELECT 
    *
FROM
    employees
HAVING
    hire_date >= '2000-01-01';


SELECT 
    first_name, COUNT(first_name) as names_count
FROM
    employees
WHERE
    COUNT(first_name) > 250
GROUP BY first_name
ORDER BY first_name;


SELECT 
    first_name, COUNT(first_name) as names_count
FROM
    employees
GROUP BY first_name
HAVING COUNT(first_name) > 250
ORDER BY first_name;

## HAVING - exercise
SELECT 
    emp_no, AVG(salary)
FROM
    salaries
GROUP BY emp_no
HAVING AVG(salary) > 120000
ORDER BY emp_no;

# When using WHERE instead of HAVING, the output is larger because in the output we include 
# individual contracts higher than $120,000 per year. The output does not contain average salary values.
SELECT 
    *, AVG(salary)
FROM
    salaries
WHERE
    salary > 120000
GROUP BY emp_no
ORDER BY emp_no;

# Finally, using the star symbol instead of “emp_no” extracts a list that contains all columns 
# from the “salaries” table.
SELECT 
    *, AVG(salary)
FROM
    salaries
GROUP BY emp_no
HAVING AVG(salary) > 120000;


## WHERE vs HAVING - Part I

SELECT 
    first_name, COUNT(first_name) AS names_count
FROM
    employees
WHERE
    hire_date > '1999-01-01'
GROUP BY first_name
HAVING COUNT(first_name) < 200
ORDER BY first_name;


## WHERE vs HAVING - Part II

SELECT 
    first_name, COUNT(first_name) AS names_count
FROM
    employees
GROUP BY first_name
HAVING COUNT(first_name) < 200
    AND hire_date > '1999-01-01'
ORDER BY first_name DESC;

## WHERE vs HAVING - Part II - exercise
SELECT 
    emp_no, from_date
FROM
    dept_emp
WHERE
    from_date > '2000-01-01'
GROUP BY emp_no
HAVING COUNT(from_date) > 1
ORDER BY emp_no;

## LIMIT

SELECT 
    *
FROM
    salaries;
    
SELECT 
    *
FROM
    salaries
ORDER BY salary DESC;

SELECT 
    *
FROM
    salaries
ORDER BY salary DESC
LIMIT 10;

SELECT 
    first_name, COUNT(first_name) AS names_count
FROM
    employees
WHERE
    hire_date > '1999-01-01'
GROUP BY first_name
HAVING COUNT(first_name) < 200
ORDER BY first_name
LIMIT 100;

## LIMIT - exercise
SELECT 
    *
FROM
    dept_emp
LIMIT 100;



##########################################################
##########################################################

-- SECTION: The SQL INSERT Statement

##########################################################
##########################################################

## The INSERT Statement - Part I

SELECT 
    *
FROM
    employees
LIMIT 10;


INSERT INTO employees
(
	emp_no,
	birth_date,
	first_name,
	last_name,
	gender,
	hire_date
) VALUES 
(
	999901,
    '1986-04-21',
    'John',
    'Smith',
    'M',
    '2011-01-01'
);

SELECT 
    *
FROM
    employees
ORDER BY emp_no DESC
LIMIT 10;


## The INSERT Statement - Part II

INSERT INTO employees
(
	birth_date,
    emp_no,
	first_name,
	last_name,
	gender,
	hire_date
) VALUES 
(
	'1973-3-26',
    999902,
    'Patricia',
    'Lawrence',
    'F',
    '2005-01-01'
);

INSERT INTO employees
VALUES
(
	999903,
    '1977-09-14',
    'Johnathan',
    'Creek',
    'M',
    '1999-01-01'
);

SELECT 
    *
FROM
    employees
ORDER BY emp_no DESC
LIMIT 10;

## The INSERT Statement - Part I - exercise
SELECT 
    *
FROM
    titles
LIMIT 10; 
 
INSERT INTO titles
(
	emp_no,
    title,
    from_date
)
VALUES
(
	999903,
    'Senior Engineer',
    '1997-10-01'
);

SELECT 
    *
FROM
    titles
ORDER BY emp_no DESC;

## The INSERT Statement - Part II - exercise
SELECT 
    *
FROM
    dept_emp
ORDER BY emp_no DESC
LIMIT 10;
 
INSERT INTO dept_emp
(
	emp_no,
    dept_no,
    from_date,
    to_date
)
VALUES
(
	999903,
    'd005',
    '1997-10-01',
    '9999-01-01'
);


## Inserting Data INTO a New Table

SELECT 
    *
FROM
    departments
LIMIT 10;

CREATE TABLE departments_dup 
(
    dept_no CHAR(4) NOT NULL,
    dept_name VARCHAR(40) NOT NULL
);

SELECT 
    *
FROM
    departments_dup;

INSERT INTO departments_dup
(
    dept_no,
    dept_name
)
SELECT 
	*
FROM 
	departments;

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

## Inserting Data INTO a New Table - exercise
INSERT INTO departments VALUES ('d010', 'Business Analysis');



##########################################################
##########################################################

-- SECTION: The SQL UPDATE Statement

##########################################################
##########################################################


## The UPDATE Statement - Part I

/*
INSERT INTO employees
(
	emp_no,
	birth_date,
	first_name,
	last_name,
	gender,
	hire_date
) VALUES 
(
	999901,
    '1986-04-21',
    'John',
    'Smith',
    'M',
    '2011-01-01'
);
*/

USE employees;

SELECT 
    *
FROM
    employees
WHERE
    emp_no = 999901;

UPDATE employees 
SET 
    first_name = 'Stella',
    last_name = 'Parkinson',
    birth_date = '1990-12-31',
    gender = 'F'
WHERE
    emp_no = 999901;

SELECT 
    *
FROM
    employees
WHERE
    emp_no = 999901;
    
UPDATE employees 
SET 
    first_name = 'Stella',
    last_name = 'Parkinson',
    birth_date = '1990-12-31',
    gender = 'F'
WHERE
    emp_no = 999909;

SELECT 
    *
FROM
    employees
ORDER BY emp_no DESC
LIMIT 10;


## The UPDATE Statement - Part II

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

COMMIT;

UPDATE departments_dup 
SET 
    dept_no = 'd011',
    dept_name = 'Quality Control';

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

ROLLBACK;

COMMIT;


## The UPDATE Statement - Part II - exercise

SELECT 
    *
FROM
    departments
ORDER BY dept_no;


UPDATE departments 
SET 
    dept_name = 'Data Analysis'
WHERE
    dept_no = 'd010';

##########################################################
##########################################################

-- SECTION: The SQL DELETE Statement

##########################################################
##########################################################


## The DELETE Statement - Part I

USE employees;

COMMIT;

SELECT 
    *
FROM
    employees
WHERE
    emp_no = 999903;
    
SELECT 
    *
FROM
    titles
WHERE
    emp_no = 999903;

DELETE FROM employees 
WHERE
    emp_no = 999903;

SELECT 
    *
FROM
    employees
WHERE
    emp_no = 999903;
    
SELECT 
    *
FROM
    titles
WHERE
    emp_no = 999903;

ROLLBACK;

SELECT 
    *
FROM
    employees
WHERE
    emp_no = 999903;
    
SELECT 
    *
FROM
    titles
WHERE
    emp_no = 999903;
    
    
## The DELETE Statement - Part II

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

DELETE FROM departments_dup;

ROLLBACK;

## The DELETE Statement - Part II - exercise
DELETE FROM departments 
WHERE
    dept_no = 'd010';
    
SELECT 
    *
FROM
    departments
ORDER BY dept_no;


##########################################################
##########################################################

-- SECTION: MySQL Aggregate Functions

##########################################################
##########################################################


## COUNT()

SELECT 
    *
FROM
    salaries
ORDER BY salary DESC
LIMIT 10; 

SELECT 
    COUNT(salary)
FROM
    salaries;   

SELECT 
    COUNT(from_date)
FROM
    salaries;

SELECT 
    COUNT(DISTINCT from_date)
FROM
    salaries;
    
SELECT 
    COUNT(*)
FROM
    salaries;
    
## COUNT() - exercise
SELECT 
    COUNT(DISTINCT dept_no)
FROM
    dept_emp;
    
    
## SUM()

SELECT 
    SUM(salary)
FROM
    salaries;
    

SELECT 
    SUM(*)
FROM
    salaries;


## SUM() - exercise
SELECT 
    SUM(salary)
FROM
    salaries
WHERE
    from_date > '1997-01-01';
    
## MIN() and MAX()

SELECT 
    MAX(salary)
FROM
    salaries;

SELECT 
    MIN(salary)
FROM
    salaries;
    
## MIN() and MAX() - exercise
SELECT 
    MIN(emp_no)
FROM
    employees;

SELECT 
    MAX(emp_no)
FROM
    employees;
    
    
## AVG()

SELECT 
    AVG(salary)
FROM
    salaries;

## AVG() - exercise
SELECT 
    AVG(salary)
FROM
    salaries
WHERE
    from_date > '1997-01-01';
    

## ROUND()
    
SELECT 
    ROUND(AVG(salary))
FROM
    salaries;

SELECT 
    ROUND(AVG(salary), 2)
FROM
    salaries;
    
## ROUND() - exercise
SELECT 
    ROUND(AVG(salary), 2)
FROM
    salaries
WHERE
    from_date > '1997-01-01'; 
    

## COALESCE() - Preamble

ALTER TABLE departments_dup
CHANGE COLUMN dept_name dept_name VARCHAR(40) NULL;
 
INSERT INTO departments_dup(dept_no) VALUES ('d010'), ('d011');

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no ASC; 

ALTER TABLE employees.departments_dup 
ADD COLUMN dept_manager VARCHAR(255) NULL AFTER dept_name;

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

COMMIT;
    
## IFNULL() and COALESCE()

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

SELECT 
    dept_no,
    IFNULL(dept_name, 
           'Department name not provided') 
FROM
    departments_dup;

SELECT 
    dept_no,
    IFNULL(dept_name, 
           'Department name not provided') AS dept_name
FROM
    departments_dup;
    
SELECT 
    dept_no,
    COALESCE(dept_name, 
            'Department name not provided') AS dept_name
FROM
    departments_dup;

SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;

SELECT 
    dept_no,
    dept_name,
    COALESCE(dept_manager, dept_name, 'N/A') AS dept_manager
FROM
    departments_dup
ORDER BY dept_no ASC; 

ROLLBACK;


## Another Example of Using COALESCE()

SELECT 
    dept_no,
    dept_name,
    COALESCE('deparment manager name') AS fake_col
FROM
    departments_dup;
    
/*
SELECT 
    dept_no,
    dept_name,
    IFNULL('deparment manager name') AS fake_col
FROM
    departments_dup;
*/

## Another Example of Using COALESCE() - exercise 1
SELECT 
    dept_no,
    dept_name,
    COALESCE(dept_no, dept_name) AS dept_info
FROM
    departments_dup
ORDER BY dept_no ASC;

## Another Example of Using COALESCE() - exercise 2
SELECT 
    IFNULL(dept_no, 'N/A') AS dept_no,
    IFNULL(dept_name,
            'Department name not provided') AS dept_name,
    COALESCE(dept_no, dept_name) AS dept_info
FROM
    departments_dup
ORDER BY dept_no ASC;



##########################################################
##########################################################

-- SECTION: SQL Joins

##########################################################
##########################################################

## Introduction to Joins - exercise 1

# if you currently have ‘departments_dup’ set up:
ALTER TABLE departments_dup
DROP COLUMN dept_manager;

ALTER TABLE departments_dup
CHANGE COLUMN dept_no dept_no CHAR(4) NULL;

ALTER TABLE departments_dup
CHANGE COLUMN dept_name dept_name VARCHAR(40) NULL;


##  Introduction to Joins - exercise 2

DROP TABLE IF EXISTS dept_manager_dup;

CREATE TABLE dept_manager_dup (
    emp_no INT(11) NOT NULL,
    dept_no CHAR(4) NULL,
    from_date DATE NOT NULL,
    to_date DATE NULL
);
 
INSERT INTO dept_manager_dup 
select * from dept_manager;

 

INSERT INTO dept_manager_dup 
(emp_no, from_date)
VALUES                
(999904, '2017-01-01'),
(999905, '2017-01-01'),
(999906, '2017-01-01'),
(999907, '2017-01-01');

 
DELETE FROM dept_manager_dup 
WHERE
    dept_no = 'd001';

INSERT INTO departments_dup (dept_name)
VALUES                
('Public Relations');


DELETE FROM departments_dup 
WHERE
    dept_no = 'd002'; 
    
select * from departments_dup;


## INNER JOIN - Part I

-- dept_manager_dup
SELECT 
    *
FROM
    dept_manager_dup
ORDER BY dept_no;

-- departments_dup
SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no;


## INNER JOIN - Part II

SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        INNER JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

## INNER JOIN - Part II - exercise
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    dm.dept_no,
    e.hire_date
FROM
    employees e
        JOIN
    dept_manager dm ON e.emp_no = dm.emp_no;
    
 ## A Note on Using Joins


SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        INNER JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;


-- add m.to_date and d.dept_name
SELECT 
    m.dept_no, m.emp_no, m.from_date, m.to_date, d.dept_name
FROM
    dept_manager_dup m
		INNER JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

-- JOIN
SELECT 
    m.dept_no, m.emp_no, m.from_date, m.to_date, d.dept_name
FROM
    dept_manager_dup m
		JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

-- d.dept_no = m.dept_no
SELECT 
    m.dept_no, m.emp_no, m.from_date, m.to_date, d.dept_name
FROM
    dept_manager_dup m
		JOIN
    departments_dup d ON d.dept_no = m.dept_no
ORDER BY m.dept_no;

-- ORDER BY d.dept_no
SELECT 
    m.dept_no, m.emp_no, m.from_date, m.to_date, d.dept_name
FROM
    dept_manager_dup m
		JOIN
    departments_dup d ON d.dept_no = m.dept_no
ORDER BY d.dept_no;

-- ORDER BY dept_no
SELECT 
    m.dept_no, m.emp_no, m.from_date, m.to_date, d.dept_name
FROM
    dept_manager_dup m
		JOIN
    departments_dup d ON d.dept_no = m.dept_no
ORDER BY dept_no;


## Duplicate Records

-- duplicate records
INSERT INTO dept_manager_dup 
VALUES 	('110228', 'd003', '1992-03-21', '9999-01-01');
        
INSERT INTO departments_dup 
VALUES	('d009', 'Customer Service');

-- dept_manager_dup
SELECT 
    *
FROM
    dept_manager_dup
ORDER BY dept_no ASC;

-- departments_dup
SELECT 
    *
FROM
    departments_dup
ORDER BY dept_no ASC;

-- inner join
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        INNER JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY dept_no;

-- add GROUP BY m.emp_no
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        JOIN
    departments_dup d ON m.dept_no = d.dept_no
GROUP BY m.emp_no
ORDER BY dept_no;


## LEFT JOIN - Part I

-- remove the duplicates from the two tables
DELETE FROM dept_manager_dup 
WHERE emp_no = '110228';
        
DELETE FROM departments_dup 
WHERE dept_no = 'd009';

-- add back the initial records
INSERT INTO dept_manager_dup 
VALUES 	('110228', 'd003', '1992-03-21', '9999-01-01');
        
INSERT INTO departments_dup 
VALUES	('d009', 'Customer Service');

-- left join

SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        LEFT JOIN
    departments_dup d ON m.dept_no = d.dept_no
GROUP BY m.emp_no
ORDER BY m.dept_no;


## LEFT JOIN - Part II

-- d LEFT JOIN m
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    departments_dup d
		LEFT JOIN
    dept_manager_dup m ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

-- SELECT d.dept_no
SELECT 
    d.dept_no, m.emp_no, d.dept_name
FROM
    departments_dup d
		LEFT JOIN
    dept_manager_dup m ON m.dept_no = d.dept_no
ORDER BY d.dept_no;

-- LEFT OUTER JOIN
SELECT 
    d.dept_no, m.emp_no, d.dept_name
FROM
    departments_dup d
        LEFT OUTER JOIN
    dept_manager_dup m ON m.dept_no = d.dept_no
ORDER BY d.dept_no;

-- m LEFT JOIN d
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        LEFT JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

-- add WHERE
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        LEFT JOIN
    departments_dup d ON m.dept_no = d.dept_no
WHERE
    dept_name IS NULL
ORDER BY m.dept_no;

## LEFT JOIN - Part II - exercise
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    dm.dept_no,
    dm.from_date
FROM
    employees e
        LEFT JOIN
    dept_manager dm ON e.emp_no = dm.emp_no
WHERE
    e.last_name = 'Markovitch'
ORDER BY dm.dept_no DESC , e.emp_no;


## RIGHT JOIN

SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        RIGHT JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY dept_no;

-- SELECT d.dept_no
SELECT 
    d.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
        RIGHT JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY dept_no;

-- d LEFT JOIN m
SELECT 
    d.dept_no, m.emp_no, d.dept_name
FROM
    departments_dup d
        LEFT JOIN
    dept_manager_dup m ON m.dept_no = d.dept_no
ORDER BY dept_no;


## The New and the Old Join Syntax

-- JOIN
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m
		INNER JOIN
    departments_dup d ON m.dept_no = d.dept_no
ORDER BY m.dept_no;

-- WHERE
SELECT 
    m.dept_no, m.emp_no, d.dept_name
FROM
    dept_manager_dup m,
    departments_dup d
WHERE
    m.dept_no = d.dept_no
ORDER BY m.dept_no;

## The New and the Old Join Syntax - exercise
-- Old Join Syntax
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    dm.dept_no,
    e.hire_date
FROM
    employees e,
    dept_manager dm
WHERE
    e.emp_no = dm.emp_no;

-- New Join Syntax:
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    dm.dept_no,
    e.hire_date
FROM
    employees e
        JOIN
    dept_manager dm ON e.emp_no = dm.emp_no; 
    

## JOIN and WHERE Used Together

SELECT 
    e.emp_no, e.first_name, e.last_name, s.salary
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    s.salary > 145000
;

SELECT 
    e.first_name, e.last_name, s.salary
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    s.salary > 145000
;

## Important - Prevent Error Code: 1055!

set @@global.sql_mode := replace(@@global.sql_mode, 'ONLY_FULL_GROUP_BY', '');



## JOIN and WHERE Used Together - exercise
SELECT 
    e.first_name, e.last_name, e.hire_date, t.title
FROM
    employees e
        JOIN
    titles t ON e.emp_no = t.emp_no
WHERE
    first_name = 'Margareta'
        AND last_name = 'Markovitch'
ORDER BY e.emp_no
;   


## CROSS JOIN

SELECT 
    dm.*, d.*
FROM
    dept_manager dm
        CROSS JOIN
    departments d
ORDER BY dm.emp_no , d.dept_no;

SELECT 
    dm.*, d.*
FROM
    dept_manager dm,
    departments d
ORDER BY dm.emp_no , d.dept_no;

SELECT 
    dm.*, d.*
FROM
    dept_manager dm
        INNER JOIN
    departments d
ORDER BY dm.emp_no , d.dept_no;

SELECT 
    dm.*, d.*
FROM
    departments d
        CROSS JOIN
    dept_manager dm
WHERE
    d.dept_no <> dm.dept_no
ORDER BY dm.emp_no , d.dept_no;

SELECT 
    e.*, d.*
FROM
    departments d
        CROSS JOIN
    dept_manager dm
        JOIN
	employees e ON dm.emp_no = e.emp_no
WHERE
    d.dept_no <> dm.dept_no
ORDER BY dm.emp_no , d.dept_no
;

## CROSS JOIN - exercise 1
SELECT 
    dm.*, d.*
FROM
    departments d
        CROSS JOIN
    dept_manager dm
WHERE
    d.dept_no = 'd009'
ORDER BY d.dept_name;

## CROSS JOIN - exercise 2
SELECT 
    e.*, d.*
FROM
    employees e
        CROSS JOIN
    departments d
WHERE
    e.emp_no < 10011
ORDER BY e.emp_no, d.dept_name;


## Using Aggregate Functions with Joins

SELECT 
    e.gender, AVG(s.salary) AS average_salary
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
GROUP BY gender;    

-- SELECT e.emp_no
SELECT 
    e.emp_no, e.gender, AVG(s.salary) AS average_salary
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
GROUP BY gender; 


## Join more than Two Tables in SQL

SELECT 
    e.first_name,
    e.last_name,
    e.hire_date,
    m.from_date,
    d.dept_name
FROM
    employees e
        JOIN
    dept_manager m ON e.emp_no = m.emp_no
        JOIN
    departments d ON m.dept_no = d.dept_no
;

SELECT 
    e.first_name,
    e.last_name,
    e.hire_date,
    m.from_date,
    d.dept_name
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    employees e ON m.emp_no = e.emp_no
;

-- RIGHT JOIN - JOIN
SELECT 
    e.first_name,
    e.last_name,
    e.hire_date,
    m.from_date,
    d.dept_name
FROM
    departments d
        RIGHT JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    employees e ON m.emp_no = e.emp_no
;

-- JOIN - RIGHT JOIN
SELECT 
    e.first_name,
    e.last_name,
    e.hire_date,
    m.from_date,
    d.dept_name
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        RIGHT JOIN
    employees e ON m.emp_no = e.emp_no
;

## Join more than Two Tables in SQL - exercise
SELECT 
    e.first_name,
    e.last_name,
    e.hire_date,
    t.title,
    m.from_date,
    d.dept_name
FROM
    employees e
        JOIN
    dept_manager m ON e.emp_no = m.emp_no
        JOIN
    departments d ON m.dept_no = d.dept_no
        JOIN
    titles t ON e.emp_no = t.emp_no
WHERE t.title = 'Manager'
ORDER BY e.emp_no;


## Tips and Tricks for Joins

SELECT 
    d.dept_name, AVG(salary)
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
;

-- add GROUP BY d.dept_name
SELECT 
    d.dept_name, AVG(salary)
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY d.dept_name
;

-- add ORDER BY d.dept_no
SELECT 
    d.dept_name, AVG(salary)
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY d.dept_name
ORDER BY d.dept_no
;


-- GROUP BY dept_name
SELECT 
    d.dept_name, AVG(salary)
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY dept_name
ORDER BY d.dept_no
;


-- AVG(salary) AS aaverage_salary 
-- add back GROUP BY d.dept_name
SELECT 
    d.dept_name, AVG(salary) AS average_salary
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY d.dept_name
ORDER BY d.dept_no
;

-- ORDER BY AVG(salary) DESC
SELECT 
    d.dept_name, AVG(salary) AS average_salary
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY d.dept_name
ORDER BY AVG(salary) DESC
;

-- ORDER BY average_salary DESC
SELECT 
    d.dept_name, AVG(salary) AS average_salary
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY d.dept_name
ORDER BY average_salary DESC
;

-- add HAVING average_salary > 60000
SELECT 
    d.dept_name, AVG(salary) AS average_salary
FROM
    departments d
        JOIN
    dept_manager m ON d.dept_no = m.dept_no
        JOIN
    salaries s ON m.emp_no = s.emp_no
GROUP BY dept_name
HAVING average_salary > 60000
ORDER BY average_salary DESC
;

##  Tips and Tricks for Joins - exercise
SELECT 
    e.gender, COUNT(dm.emp_no)
FROM
    employees e
        JOIN
    dept_manager dm ON e.emp_no = dm.emp_no
GROUP BY gender;


## UNION vs UNION ALL

-- create employees_dup
DROP TABLE IF EXISTS employees_dup;
CREATE TABLE employees_dup (
   emp_no int(11),
   birth_date date,
   first_name varchar(14),
   last_name varchar(16),
   gender enum('M','F'),
   hire_date date
  );
  
-- duplicate  the structure of the 'employees' table
INSERT INTO employees_dup 
SELECT 
    e.*
FROM
    employees e
LIMIT 20;

-- Check
SELECT 
    *
FROM
    employees_dup
;

INSERT INTO employees_dup VALUES
('10001', '1953-09-02', 'Georgi', 'Facello', 'M', '1986-06-26');

-- Check
SELECT 
    *
FROM
    employees_dup;


-- UNION ALL
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    NULL AS dept_no,
    NULL AS from_date
FROM
    employees_dup e
WHERE
    e.emp_no = 10001 
UNION ALL SELECT 
    NULL AS emp_no,
    NULL AS first_name,
    NULL AS last_name,
    m.dept_no,
    m.from_date
FROM
    dept_manager m;
    
-- UNION
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    NULL AS dept_no,
    NULL AS from_date
FROM
    employees_dup e
WHERE
    e.emp_no = 10001 
UNION SELECT 
    NULL AS emp_no,
    NULL AS first_name,
    NULL AS last_name,
    m.dept_no,
    m.from_date
FROM
    dept_manager m;

## UNION vs UNION ALL - exercise
SELECT 
    *
FROM
    (SELECT 
        e.emp_no,
            e.first_name,
            e.last_name,
            NULL AS dept_no,
            NULL AS from_date
    FROM
        employees e
    WHERE
        last_name = 'Denis' UNION SELECT 
        NULL AS emp_no,
            NULL AS first_name,
            NULL AS last_name,
            dm.dept_no,
            dm.from_date
    FROM
        dept_manager dm) AS a
ORDER BY - a.emp_no DESC;



##########################################################
##########################################################

-- SECTION: Subqueries

##########################################################
##########################################################    


## Subqueries with IN nested inside WHERE

SELECT 
    *
FROM
    dept_manager;
    
SELECT 
    e.first_name, e.last_name
FROM
    employees e
WHERE
    e.emp_no IN (SELECT 
            dm.emp_no
        FROM
            dept_manager dm);
            
SELECT 
    dm.emp_no
FROM
    dept_manager dm;
    
## Subqueries with IN nested inside WHERE - exercise
SELECT 
    *
FROM
    dept_manager
WHERE
    emp_no IN (SELECT 
            emp_no
        FROM
            employees
        WHERE
            hire_date BETWEEN '1990-01-01' AND '1995-01-01');


## Subqueries with EXISTS-NOT EXISTS nested inside WHERE

SELECT 
    e.first_name, e.last_name
FROM
    employees e
WHERE
    EXISTS( SELECT 
            *
        FROM
            dept_manager dm
        WHERE
            dm.emp_no = e.emp_no);
       
    
-- add ORDER BY emp_no
SELECT 
    e.first_name, e.last_name
FROM
    employees e
WHERE
    EXISTS( SELECT 
            *
        FROM
            dept_manager dm
        WHERE
            dm.emp_no = e.emp_no
        ORDER BY emp_no);

SELECT 
    e.first_name, e.last_name
FROM
    employees e
WHERE
    EXISTS( SELECT 
            *
        FROM
            dept_manager dm
        WHERE
            dm.emp_no = e.emp_no)
ORDER BY emp_no;

## Subqueries with IN nested inside WHERE - exercise
SELECT 
    *
FROM
    employees e
WHERE
    EXISTS( SELECT 
            *
        FROM
            titles t
        WHERE
            t.emp_no = e.emp_no
                AND title = 'Assistant Engineer');
                
                
## Subqueries nested in SELECT and FROM

-- 1) 
SELECT 
    emp_no
FROM
    dept_manager
WHERE
    emp_no = 110022;

-- 2) 
SELECT 
    e.emp_no AS employee_ID,
    MIN(de.dept_no) AS department_code,
    (SELECT 
            emp_no
        FROM
            dept_manager
        WHERE
            emp_no = 110022) AS manager_ID
FROM
    employees e
        JOIN
    dept_emp de ON e.emp_no = de.emp_no
WHERE
    e.emp_no <= 10020
GROUP BY e.emp_no
ORDER BY e.emp_no;

-- 3) 
SELECT 
    a.*
FROM
    (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110022) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no <= 10020
    GROUP BY e.emp_no
    ORDER BY e.emp_no) AS a;

-- 4)
SELECT 
    a.*
FROM
    (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110022) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no <= 10020
    GROUP BY e.emp_no
    ORDER BY e.emp_no) AS a 
UNION SELECT 
    b.*
FROM
    (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110039) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no > 10020
    GROUP BY e.emp_no
    ORDER BY e.emp_no
    LIMIT 20) AS b;

## Subqueries nested in SELECT and FROM - exercise
DROP TABLE IF EXISTS emp_manager;

CREATE TABLE emp_manager (
    emp_no INT(11) NOT NULL,
    dept_no CHAR(4) NULL,
    manager_no INT(11) NOT NULL
);

## Subqueries nested in SELECT and FROM - exercise
INSERT INTO emp_manager
SELECT 
    u.*
FROM
    (SELECT 
        a.*
    FROM
        (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110022) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no <= 10020
    GROUP BY e.emp_no
    ORDER BY e.emp_no) AS a UNION SELECT 
        b.*
    FROM
        (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110039) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no > 10020
    GROUP BY e.emp_no
    ORDER BY e.emp_no
    LIMIT 20) AS b UNION SELECT 
        c.*
    FROM
        (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110039) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no = 110022
    GROUP BY e.emp_no) AS c UNION SELECT 
        d.*
    FROM
        (SELECT 
        e.emp_no AS employee_ID,
            MIN(de.dept_no) AS department_code,
            (SELECT 
                    emp_no
                FROM
                    dept_manager
                WHERE
                    emp_no = 110022) AS manager_ID
    FROM
        employees e
    JOIN dept_emp de ON e.emp_no = de.emp_no
    WHERE
        e.emp_no = 110039
    GROUP BY e.emp_no) AS d) as u;
    
    
    
    
##########################################################
##########################################################

-- SECTION: SQL Self Join

##########################################################
########################################################## 


## Self Join


SELECT 
   *
FROM
    emp_manager
ORDER BY emp_manager.emp_no;

SELECT 
    e1.*
FROM
    emp_manager e1
        JOIN
    emp_manager e2 ON e1.emp_no = e2.manager_no;

    
-- Select e2.*
SELECT 
    e2.*
FROM
    emp_manager e1
        JOIN
    emp_manager e2 ON e1.emp_no = e2.manager_no;
    

-- SELECT e1.emp_no, e1.dept_no, e2.manager_no
SELECT 
    e1.emp_no, e1.dept_no, e2.manager_no
FROM
    emp_manager e1
        JOIN
    emp_manager e2 ON e1.emp_no = e2.manager_no;
    
SELECT DISTINCT
    e1.*
FROM
    emp_manager e1
        JOIN
    emp_manager e2 ON e1.emp_no = e2.manager_no;
    
SELECT 
    e1.*
FROM
    emp_manager e1
        JOIN
    emp_manager e2 ON e1.emp_no = e2.manager_no
WHERE
    e2.emp_no IN (SELECT 
            manager_no
        FROM
            emp_manager);
            
-- inner select 
SELECT 
    manager_no
FROM
    emp_manager
GROUP BY manager_no;


##########################################################
##########################################################

-- SECTION: SQL Views

##########################################################
########################################################## 


## Using SQL Views

SELECT 
    *
FROM
    dept_emp;

SELECT 
    emp_no, from_date, to_date, COUNT(emp_no) AS Num
FROM
    dept_emp
GROUP BY emp_no
HAVING Num > 1;

CREATE OR REPLACE VIEW v_dept_emp_latest_date AS
    SELECT 
        emp_no, MAX(from_date) AS from_date, MAX(to_date) AS to_date
    FROM
        dept_emp
    GROUP BY emp_no;
        
-- The SELECT statement
SELECT 
    emp_no, MAX(from_date) AS from_date, MAX(to_date) AS to_date
FROM
    dept_emp
GROUP BY emp_no;

select * from employees.v_dept_emp_latest_date;


## Using SQL Views - exercise
CREATE OR REPLACE VIEW v_manager_avg_salary AS
    SELECT 
        ROUND(AVG(salary), 2)
    FROM
        salaries s
            JOIN
        dept_manager m ON s.emp_no = m.emp_no;

select * from v_manager_avg_salary;



##########################################################
##########################################################

-- SECTION: Stored Routines

##########################################################
########################################################## 


## Stored Procedures - Example - Part I

USE employees;

DROP procedure IF EXISTS select_employees;

DELIMITER $$
CREATE PROCEDURE select_employees()
BEGIN
          
			SELECT * FROM employees
			LIMIT 1000;
            
END$$

DELIMITER ;


## Stored Procedures - Example - Part II

call employees.select_employees();
call employees.select_employees;

call select_employees();
call select_employees;

## Stored Procedures - Example - Part II - exercise
DELIMITER $$
CREATE PROCEDURE avg_salary()
BEGIN
	SELECT 
		AVG(salary)
	FROM
		salaries;
END$$
DELIMITER ;

CALL avg_salary();


## Another Way to Create a Procedure in MySQL

DROP PROCEDURE select_employees;


## Stored Procedures with an Input Parameter

USE employees;
DROP procedure IF EXISTS emp_salary;

DELIMITER $$
CREATE PROCEDURE emp_salary(IN p_emp_no INTEGER)
BEGIN
SELECT 
    e.first_name, e.last_name, s.salary, s.from_date, s.to_date
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;
END$$

DELIMITER ;


-- emp_avg_salary with SELECT e.first_name, e.last_name, avg(s.salary)
DROP procedure IF EXISTS emp_avg_salary;

DELIMITER $$
CREATE PROCEDURE emp_avg_salary (in p_emp_no integer)
BEGIN
SELECT 
    e.first_name, e.last_name, avg(s.salary)
FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;
END$$

DELIMITER ;

CALL emp_avg_salary(11300);


## Stored Procedures with an Output Parameter

DROP procedure IF EXISTS emp_avg_salary_out;

DELIMITER $$
CREATE PROCEDURE emp_avg_salary_out(in p_emp_no integer, out p_avg_salary decimal(10,2))
BEGIN
SELECT 
    AVG(s.salary)
INTO p_avg_salary FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;
END$$

DELIMITER ;

## Stored Procedures with an Output Parameter - exercise

DROP procedure IF EXISTS emp_info;

DELIMITER $$
CREATE PROCEDURE emp_info(in p_first_name varchar(255), in p_last_name varchar(255), out p_emp_no integer)
BEGIN

	SELECT 
		e.emp_no
	INTO p_emp_no FROM
		employees e
	WHERE
		e.first_name = p_first_name
			AND e.last_name = p_last_name;
END$$
DELIMITER ;


## Variables

SET @v_avg_salary = 0;
CALL employees.emp_avg_salary_out(11300, @v_avg_salary);
SELECT @v_avg_salary;

## Variables - exercise

set @v_emp_no = 0;
call emp_info('Aruna', 'Journel', @v_emp_no);
select @v_emp_no;


## User-Defined Functions in MySQL

USE employees;
DROP FUNCTION IF EXISTS f_emp_avg_salary;

DELIMITER $$
CREATE FUNCTION f_emp_avg_salary (p_emp_no INTEGER) RETURNS DECIMAL(10,2)
BEGIN

DECLARE v_avg_salary DECIMAL(10,2);

SELECT 
    AVG(s.salary)
INTO v_avg_salary FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;

RETURN v_avg_salary;
END$$

DELIMITER ;


SELECT f_emp_avg_salary(11300);

## User-Defined Functions in MySQL - exercise

DELIMITER $$
CREATE FUNCTION emp_info(p_first_name varchar(255), p_last_name varchar(255)) RETURNS decimal(10,2)
BEGIN
	DECLARE v_max_from_date date;
    DECLARE v_salary decimal(10,2);

	SELECT 
    MAX(from_date)
INTO v_max_from_date FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.first_name = p_first_name
        AND e.last_name = p_last_name;

	SELECT 
    s.salary
INTO v_salary FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.first_name = p_first_name
        AND e.last_name = p_last_name
        AND s.from_date = v_max_from_date;
            
	RETURN v_salary;
END$$
DELIMITER ;

SELECT emp_info('Aruna', 'Journel');


## Stored Routines - Conclusion

SET @v_emp_no = 11300; 

SELECT 
    emp_no,
    first_name,
    last_name,
    f_emp_avg_salary(@v_emp_no) AS avg_salary
FROM
    employees
WHERE
    emp_no = @v_emp_no;
    

##########################################################
##########################################################

-- SECTION: Advanced SQL Tools

##########################################################
########################################################## 


## Types of MySQL Variables - Local Variables

-- v_avg_salary
DROP FUNCTION IF EXISTS f_emp_avg_salary;

DELIMITER $$
CREATE FUNCTION f_emp_avg_salary (p_emp_no integer) RETURNS decimal(10,2)
BEGIN

DECLARE v_avg_salary DECIMAL(10,2);

SELECT 
    AVG(s.salary)
INTO v_avg_salary FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;

RETURN v_avg_salary;
END$$

DELIMITER ;

SELECT v_avg_salary;

-- v_avg_salary_2 (ERROR)
DROP FUNCTION IF EXISTS f_emp_avg_salary;

DELIMITER $$
CREATE FUNCTION f_emp_avg_salary (p_emp_no integer) RETURNS decimal(10,2)
BEGIN

DECLARE v_avg_salary decimal(10,2);

BEGIN
	DECLARE v_avg_salary_2 decimal(10,2);
END;


SELECT 
    AVG(s.salary)
INTO v_avg_salary_2 FROM
    employees e
        JOIN
    salaries s ON e.emp_no = s.emp_no
WHERE
    e.emp_no = p_emp_no;

RETURN v_avg_salary_2;
END$$

DELIMITER ;


## Session Variables

set @s_var1 = 3;
select @s_var1;


## Global Variables

SET GLOBAL max_connections = 1000;


SET @@global.max_connections = 1;


## User-Defined vs System Variables

-- ERROR
SET SESSION max_connections = 1000;

SET SESSION sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
SET GLOBAL sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

SET @@session.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';


## MySQL Triggers
USE employees;
COMMIT;

-- BEFORE INSERT
DELIMITER $$

CREATE TRIGGER before_salaries_insert
BEFORE INSERT ON salaries
FOR EACH ROW
BEGIN 
	IF NEW.salary < 0 THEN 
		SET NEW.salary = 0; 
	END IF; 
END $$

DELIMITER ;


SELECT 
    *
FROM
    salaries;

SELECT 
    *
FROM
    salaries
WHERE
    emp_no = '10001';
    
INSERT INTO salaries VALUES('10001', -92891, '2010-06-22', '9999-01-01');

SELECT 
    *
FROM
    salaries
WHERE
    emp_no = '10001';
    
    
-- BEFORE UPDATE
DELIMITER $$

CREATE TRIGGER trig_upd_salary
BEFORE UPDATE ON salaries
FOR EACH ROW
BEGIN 
	IF NEW.salary < 0 THEN 
		SET NEW.salary = OLD.salary; 
	END IF; 
END $$

DELIMITER ;


UPDATE salaries 
SET 
    salary = 98765
WHERE
    emp_no = '10001'
        AND from_date = '2010-06-22';
        
SELECT 
    *
FROM
    salaries
WHERE
    emp_no = '10001'
        AND from_date = '2010-06-22';
        
UPDATE salaries 
SET 
    salary = - 50000
WHERE
    emp_no = '10001'
        AND from_date = '2010-06-22';

SELECT 
    *
FROM
    salaries
WHERE
    emp_no = '10001'
        AND from_date = '2010-06-22';
        
SELECT SYSDATE();

SELECT DATE_FORMAT(SYSDATE(), '%Y-%m-%d') as today;

-- AFTER INSERT
DELIMITER $$

CREATE TRIGGER trig_ins_dept_mng
AFTER INSERT ON dept_manager
FOR EACH ROW
BEGIN
	DECLARE v_curr_salary int;
    
    SELECT 
		MAX(salary)
	INTO v_curr_salary FROM
		salaries
	WHERE
		emp_no = NEW.emp_no;

	IF v_curr_salary IS NOT NULL THEN
		UPDATE salaries 
		SET 
			to_date = SYSDATE()
		WHERE
			emp_no = NEW.emp_no and to_date = NEW.to_date;

		INSERT INTO salaries 
			VALUES (NEW.emp_no, v_curr_salary + 20000, NEW.from_date, NEW.to_date);
    END IF;
END $$

DELIMITER ;

INSERT INTO dept_manager VALUES ('111534', 'd009', date_format(sysdate(), '%Y-%m-%d'), '9999-01-01');

SELECT 
    *
FROM
    dept_manager
WHERE
    emp_no = 111534;
    
SELECT 
    *
FROM
    salaries
WHERE
    emp_no = 111534;
    

ROLLBACK;


## MySQL Triggers - exercise

DELIMITER $$
CREATE TRIGGER trig_hire_date  
BEFORE INSERT ON employees
FOR EACH ROW  
BEGIN  
	IF NEW.hire_date > date_format(sysdate(), '%Y-%m-%d') THEN     
		SET NEW.hire_date = date_format(sysdate(), '%Y-%m-%d');     
	END IF;  
END $$  
DELIMITER ;  

INSERT employees VALUES ('999904', '1970-01-31', 'John', 'Johnson', 'M', '2025-01-01');  

SELECT * FROM employees
ORDER BY emp_no DESC;


## MySQL Indexes
 
SELECT 
    *
FROM
    employees
WHERE
    hire_date > '2000-01-01';

CREATE INDEX i_hire_date ON employees(hire_date);

SELECT 
    *
FROM
    employees
WHERE
    hire_date > '2000-01-01';
    
-- Composite Indexes
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Georgi'
        AND last_name = 'Facello';
        
CREATE INDEX i_composite ON employees(first_name, last_name);
    
SELECT 
    *
FROM
    employees
WHERE
    first_name = 'Georgi'
        AND last_name = 'Facello';

CREATE INDEX i_composite ON employees(first_name, last_name);

-- SHOW INDEX
SHOW INDEX FROM employees FROM employees;
SHOW INDEX FROM employees;

## MySQL Indexes - exercise 1

ALTER TABLE employees
DROP INDEX i_hire_date;

## MySQL Indexes - exercise 2

SELECT 
    *
FROM
    salaries
WHERE
    salary > 89000;

CREATE INDEX i_salary ON salaries(salary);

SELECT 
    *
FROM
    salaries
WHERE
    salary > 89000;



## The CASE Statement

SELECT 
    emp_no,
    first_name,
    last_name,
    CASE
        WHEN gender = 'M' THEN 'Male'
        ELSE 'Female'
    END AS gender
FROM
    employees;

    
SELECT 
	emp_no,
	first_name,
	last_name,
	CASE gender
		WHEN 'M' THEN 'Male'
		ELSE 'Female'
	END AS gender
FROM
	employees;
    

SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    CASE dm.emp_no
        WHEN  dm.emp_no IS NOT NULL THEN 'Manager'
        ELSE 'Employee'
    END AS is_manager
FROM
    employees e
        LEFT JOIN
    dept_manager dm ON dm.emp_no = e.emp_no
WHERE
    e.emp_no > 109990;


SELECT 
    emp_no,
    first_name,
    last_name,
    IF(gender = 'M', 'Male', 'Female') AS gender
FROM
    employees;
    

SELECT 
    dm.emp_no,
    e.first_name,
    e.last_name,
    MAX(s.salary) - MIN(s.salary) AS salary_difference,
    CASE
        WHEN MAX(s.salary) - MIN(s.salary) > 30000 THEN 'Salary was raised by more than $30,000'
        WHEN MAX(s.salary) - MIN(s.salary) BETWEEN 20000 AND 30000 THEN 
									'Salary was raised by more than $20,000 but less than $30,000'
        ELSE 'Salary was raised by less than $20,000'
    END AS salary_increase
FROM
    dept_manager dm
        JOIN
    employees e ON e.emp_no = dm.emp_no
        JOIN
    salaries s ON s.emp_no = dm.emp_no
GROUP BY s.emp_no;


## The CASE Statement - exercise 1
SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    CASE
        WHEN dm.emp_no IS NOT NULL THEN 'Manager'
        ELSE 'Employee'
    END AS is_manager
FROM
    employees e
        LEFT JOIN
    dept_manager dm ON dm.emp_no = e.emp_no
WHERE
    e.emp_no > 109990;


## The CASE Statement - exercise 2

SELECT 
    dm.emp_no,
    e.first_name,
    e.last_name,
    MAX(s.salary) - MIN(s.salary) AS salary_difference,
    CASE
        WHEN MAX(s.salary) - MIN(s.salary) > 30000 THEN 'Salary was raised by more then $30,000'
        ELSE 'Salary was NOT raised by more then $30,000'
    END AS salary_raise
FROM
    dept_manager dm
        JOIN
    employees e ON e.emp_no = dm.emp_no
        JOIN
    salaries s ON s.emp_no = dm.emp_no
GROUP BY s.emp_no;

SELECT 
    dm.emp_no,
    e.first_name,
    e.last_name,
    MAX(s.salary) - MIN(s.salary) AS salary_difference,
    IF(MAX(s.salary) - MIN(s.salary) > 30000, 'Salary was raised by more then $30,000', 'Salary was NOT raised by more then $30,000') AS salary_increase  
FROM
    dept_manager dm
        JOIN
    employees e ON e.emp_no = dm.emp_no
        JOIN
    salaries s ON s.emp_no = dm.emp_no
GROUP BY s.emp_no;


## The CASE Statement - exercise 3

SELECT 
    e.emp_no,
    e.first_name,
    e.last_name,
    CASE
        WHEN MAX(de.to_date) > SYSDATE() THEN 'Is still employed'
        ELSE 'Not an employee anymore'
    END AS current_employee
FROM
    employees e
        JOIN
    dept_emp de ON de.emp_no = e.emp_no
GROUP BY de.emp_no
LIMIT 100;



#########################################################
##########################################################

-- SECTION: SQL Windows Fuctions

##########################################################
########################################################## 


## The ROW_NUMBER() Ranking Window Function and the Relevant MySQL Syntax

Use employees;

SELECT 
    emp_no, 
    salary,
    ROW_NUMBER() OVER(PARTITION BY emp_no ORDER BY salary DESC) AS row_num
FROM
    salaries;


##  The ROW_NUMBER() Ranking Window Function - Exercises
SELECT
    emp_no,
    dept_no,
    ROW_NUMBER() OVER (ORDER BY emp_no) AS row_num
FROM
	dept_manager;

SELECT
	emp_no,
	first_name,
	last_name,
	ROW_NUMBER() OVER (PARTITION BY first_name ORDER BY last_name) AS row_num
FROM
	employees;
    

## A Note on Using Several Window Functions in a Query

SELECT 
	emp_no,
    salary,
    ROW_NUMBER() OVER () AS row_num1,
    ROW_NUMBER() OVER (PARTITION BY emp_no) AS row_num2,
    ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary) AS row_num3,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num4
FROM
	salaries
ORDER  BY emp_no, salary;

SELECT 
	emp_no,
    salary,
    ROW_NUMBER() OVER (PARTITION BY emp_no) AS row_num2,
    ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary) AS row_num3
FROM
	salaries;


## A Note on Using Several Window Functions - Exercise

SELECT
	dm.emp_no,
    salary,
    ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary ASC) AS row_num1,
    ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary DESC) AS row_num2   
FROM
	dept_manager dm
    JOIN 
    salaries s ON dm.emp_no = s.emp_no;

SELECT
	dm.emp_no,
    salary,
    ROW_NUMBER() OVER () AS row_num1,
    ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary DESC) AS row_num2
FROM
	dept_manager dm
    JOIN 
    salaries s ON dm.emp_no = s.emp_no
ORDER BY row_num1, emp_no, salary ASC;


## MySQL Window Functions Syntax


SELECT 
	emp_no,
    salary,
    ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

## MySQL Window Functions Syntax - Exercise

SELECT
	emp_no,
	first_name,
	ROW_NUMBER() OVER w AS row_num
FROM
	employees
WINDOW w AS (PARTITION BY first_name ORDER BY emp_no);


## The PARTITION BY Clause VS the GROUP BY Clause

SELECT 
    *
FROM
    salaries
GROUP BY emp_no;

select a.emp_no,
	max(salary) AS max_salary FROM (
    select
		emp_no, salary ROW_NUMBER() OVER w AS row_num
	FROM
		salaries
    WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC)) a
GROUP BY emp_no;


select 
		a.emp_no,
		a.salary AS max_salary FROM (
    SELECT 
		emo_no, salary, ROW_NUMBER() OVER w AS row_num
	FROM
		salaries
	WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC)) a
WHERE a.row_num=1;


## The PARTITION BY Clause VS the GROUP BY Clause - Exercise

 #1:

SELECT a.emp_no,
       MIN(salary) AS min_salary FROM (
SELECT
	emp_no, salary, ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WINDOW w AS (PARTITION BY emp_no ORDER BY salary)) a
GROUP BY emp_no;


#2:

SELECT a.emp_no,
       MIN(salary) AS min_salary FROM (
SELECT
	emp_no, salary, ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY salary) AS row_num
FROM
	salaries) a
GROUP BY emp_no;

#3:

SELECT
    a.emp_no, MIN(salary) AS min_salary
FROM
    (SELECT
        emp_no, salary
    FROM
        salaries) a
GROUP BY emp_no;

#4:

SELECT a.emp_no,
	a.salary as min_salary FROM (
SELECT
	emp_no, salary, ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WINDOW w AS (PARTITION BY emp_no ORDER BY salary)) a
WHERE a.row_num=1;

#5:

SELECT a.emp_no,
	a.salary as min_salary FROM (
SELECT
	emp_no, salary, ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WINDOW w AS (PARTITION BY emp_no ORDER BY salary)) a
WHERE a.row_num=2;

## The MySQL RANK() and DENSE_RANK() Window Functions
Use employees;

SELECT DISTINCT
	emp_no, salary, ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WHERE emp_no = 10001
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

SELECT 
	emp_no, (COUNT(salary) - COUNT(DISTINCT salary)) as diff
FROM
	salaries
GROUP BY emp_no
HAVING diff > 0
ORDER BY emp_no;

select * from salaries
where emp_no = 11839;

SELECT 
	emp_no, salary, RANK() OVER w AS rank_num
FROM
	salaries
WHERE emp_no = 11839
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

SELECT 
	emp_no, salary, DENSE_RANK() OVER w AS rank_num
FROM
	salaries
WHERE emp_no = 11839
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

## The MySQL RANK() and DENSE_RANK() Window Functions - Exercise

#1:



SELECT
	emp_no,
	salary,
	ROW_NUMBER() OVER w AS row_num
FROM
	salaries
WHERE emp_no = 10560
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

#2:

SELECT
    dm.emp_no, (COUNT(salary)) AS no_of_salary_contracts
FROM
    dept_manager dm
        JOIN
    salaries s ON dm.emp_no = s.emp_no
GROUP BY emp_no
ORDER BY emp_no;

#3:

SELECT
	emp_no,
	salary,
	RANK() OVER w AS rank_num
FROM
	salaries
WHERE emp_no = 10560
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);

#4:

SELECT
	emp_no,
	salary,
	DENSE_RANK() OVER w AS rank_num
FROM
	salaries
WHERE emp_no = 10560
WINDOW w AS (PARTITION BY emp_no ORDER BY salary DESC);


##  Working with MySQL Ranking Window Functions and Joins Together

SELECT 	
	d.dept_no,
    d.dept_name,
    dm.emp_no,
    RANK() OVER w AS department_salary_ranking,
    s.salary,
    s.to_date AS salary_to_date,
    dm.from_date AS dept_manager_from_date,
    dm.to_date AS dept_manager_to_date
FROM
	 dep_manager dm
		JOIN 
	salaries s ON s.emp_no = dm.emp_no
		AND s.from_date BETWEEN dm.from_date AND dm.to_date
        AND s.to_date BETWEENv dm.from_date AND dm.to_date
		JOIN 
	departments d ON d.dept_no = dm.dept_no
WINDOW w AS (PARTITION BY dm.dept_no ORDER BY s.salary DESC);


## Working with MySQL Ranking Window Functions and Joins Together - Exercise

#1:

SELECT
    e.emp_no,
    RANK() OVER w as employee_salary_ranking,
    s.salary
FROM
employees e
JOIN
    salaries s ON s.emp_no = e.emp_no
WHERE e.emp_no BETWEEN 10500 AND 10600
WINDOW w as (PARTITION BY e.emp_no ORDER BY s.salary DESC);

#2:

SELECT
    e.emp_no,
    DENSE_RANK() OVER w as employee_salary_ranking,
    s.salary,
    e.hire_date,
    s.from_date,
    (YEAR(s.from_date) - YEAR(e.hire_date)) AS years_from_start
FROM
employees e
JOIN
    salaries s ON s.emp_no = e.emp_no
    AND YEAR(s.from_date) - YEAR(e.hire_date) >= 5
WHERE e.emp_no BETWEEN 10500 AND 10600
WINDOW w as (PARTITION BY e.emp_no ORDER BY s.salary DESC);


## The LAG() and LEAD() Value Window Functions

select * from salaries
limit 10;

select 
	emp_no,
    salary,
    LAG(salary) OVER w AS previous_salary,
    LEAD() OVER w AS next_salary,
    salary - LAG(salary) OVER w AS diff_salary_current-previous,
    LEAD(salary) OVER w - salary AS diff_salary_next_current
from 
	salaries
where emp_no = 10001
WINDOW w AS (ORDER BY salary);


## The LAG() and LEAD() Value Window Functions - Exercise

#1:

SELECT
	
	emp_no,
	salary,
	LAG(salary) OVER w AS previous_salary,
    LEAD(salary) OVER w AS next_salary,
    salary - LAG(salary) OVER w AS diff_salary_current_previous,
LEAD(salary) OVER w - salary AS diff_salary_next_current
FROM
salaries
    WHERE salary > 80000 AND emp_no BETWEEN 10500 AND 10600
WINDOW w AS (PARTITION BY emp_no ORDER BY salary);

#2:

SELECT
	emp_no,
	salary,
    LAG(salary) OVER w AS previous_salary,
	LAG(salary, 2) OVER w AS 1_before_previous_salary,
	LEAD(salary) OVER w AS next_salary,
    LEAD(salary, 2) OVER w AS 1_after_next_salary
FROM
salaries
WINDOW w AS (PARTITION BY emp_no ORDER BY salary)
LIMIT 1000;


## MySQL Aggregate Functions in the Context of Window Functions - Part I

SELECT SYSDATE();

SELECT 
    emp_no, salary, from_date, to_date
FROM
    salaries
WHERE
    to_date > SYSDATE();
    

## Error code: 1055

SELECT 
    emp_no, salary, MAX(from_date), to_date
FROM
    salaries
WHERE
    to_date > SYSDATE()
GROUP BY emp_no;

SELECT 
    s1.emp_no, s.salary, s.from_date, s.to_date
FROM
    salaries s
        JOIN
    (SELECT 
        emp_no, MAX(from_date) AS from_date
    FROM
        salaries
    GROUP BY emp_no) s1 ON s.emp_no = s1.emp_no
WHERE
    s.to_date > SYSDATE()
        AND s.from_date = s1.from_date;
     
     
## MySQL Aggregate Functions in the Context of Window Functions - Part I-Exercise

SELECT
    s1.emp_no, s.salary, s.from_date, s.to_date
FROM
    salaries s
        JOIN
    (SELECT
        emp_no, MIN(from_date) AS from_date
    FROM
        salaries
    GROUP BY emp_no) s1 ON s.emp_no = s1.emp_no
WHERE
    s.from_date = s1.from_date;
    

## MySQL Aggregate Functions in the Context of Window Functions - Part II

SELECT 
    *
FROM
    dept_emp
LIMIT 1000;

select * from dept_emp where emp_no = 10010 order by from_date;

select * from dept_emp where emp_no = 10018 order by from_date;

select * from salaries where emp_no = 10010 order by from_date;

SELECT 
    de.emp_no, de.dept_no, de.from_date, de.to_date
FROM
    dept_emp de
        JOIN
    (SELECT 
        emp_no, MAX(from_date) AS from_date
    FROM
        dept_emp
    GROUP BY emp_no) de1 ON de1.emp_no = de.emp_no
WHERE
    de.to_date > SYSDATE()
        AND de.from_date = de1.from_date;


## MySQL Aggregate Functions in the Context of Window Functions - Part II-Exercise

SELECT
    de2.emp_no, d.dept_name, s2.salary, AVG(s2.salary) OVER w AS average_salary_per_department
FROM
    (SELECT
    de.emp_no, de.dept_no, de.from_date, de.to_date
FROM
    dept_emp de
        JOIN
	(SELECT
	emp_no, MAX(from_date) AS from_date
FROM
	dept_emp
GROUP BY emp_no) de1 ON de1.emp_no = de.emp_no
WHERE
    de.to_date < '2002-01-01'
AND de.from_date > '2000-01-01'
AND de.from_date = de1.from_date) de2
JOIN
    (SELECT
    s1.emp_no, s.salary, s.from_date, s.to_date
FROM
    salaries s
    JOIN
    (SELECT
emp_no, MAX(from_date) AS from_date
FROM
salaries
    GROUP BY emp_no) s1 ON s.emp_no = s1.emp_no
WHERE
    s.to_date < '2002-01-01'
AND s.from_date > '2000-01-01'
AND s.from_date = s1.from_date) s2 ON s2.emp_no = de2.emp_no
JOIN
    departments d ON d.dept_no = de2.dept_no
GROUP BY de2.emp_no, d.dept_name
WINDOW w AS (PARTITION BY de2.dept_no)
ORDER BY de2.emp_no, salary;


##########################################################
##########################################################

-- SECTION: SQL Common Table Expressions (CTEs)

##########################################################
########################################################## 

## MySQL Common Table Expressions - Introduction

Use employees;

SELECT 
    AVG(salary) AS avg_salary
FROM
    salaries;
    
with cte as(
select avg(salary) as avg_salary from salaries)
select 
sum(case when s.salary > c.avg_salary then 1 else 0 end) as no_f_salaries_above_avg,
count(s.salary) as total_no_of_salary_contracts
from
	salaries s
		join
	emproyees e on s.emp_no and e.gender = 'F'
		cross join
	cte c;
    
with cte as (
select avg(salary) as avg_salary from salaries)
select 
	sum(case
		when s.salary > c.avg_salary then 1
        else 0
	end) as no_f_salaries_above_avg,
    count(s.salary) as total_no_of_salary_contracts
from
	salaries s
		join
	employees e on s.emp_no = e.emp_no and e.gender = 'F'
		join
        cte c;
        
        
## An Alternative Solution to the Same Task

with cte as (
select avg(salary) as avg_salary from salaries)
select 
	sum(case
		when s.salary > c.avg_salary then 1
        else 0
	end) as no_f_salaries_above_avg,
    count(case when s.salary > c.avg_salary then s.salary else null end) as no_f_saalries_above_avg_w_count,
    count(s.salary) as total_no_of_salary_contracts

from
	salaries s
		join
	employees e on s.emp_no = e.emp_no and e.gender = 'F'
		join
        cte c;
        
        
## Using Multiple Subclauses in a WITH Clause - Part I

USE employees;

select 
	avg(salary) as avg_salary
from 
	salaries;

select 
	s.emp_no, MAX(s.salary) AS highest_salary
from
	salaries s 
		JOIN 
	employees e ON e.emp_no = s.emp_no AND e.gender = 'F'
group by s.emp_no;

select 
	s.emp_no, MAX(salary) AS highest_salary
from
	salaries s
		join
	employees e on e.emp_no = s.emp_no
where e.gender = 'F'
group by s.emp_no;


## Using Multiple Subclauses in a WITH Clause - Part II

with cte as (
select avg(salary) as avg_salary from salaries),
cte_f_highest_salary AS (
select s.emp_no, MAX(s.salary) AS f_highest_salary
from salaries s
join employees e on e.emp_no = s.emp_no and e.gender = 'F'
group by s.emp_no
)
select 
SUM(case when c2.f_highest_salary > c1.avg_salary then 1 else 0 end) as f_highest_salaries_above_avg,
COUNT(e.emp_no) as total_no_female_contracts,
CONCAT(Round((SUM(case when c2.f_highest_salary > c1.avg_salary then 1 else 0 end)/count(e.emp_no))*100, 2), %) as '% percentage'
from employees e
join cte_f_highest_salary c2 on c2.emp_no = e.emp_no
cross join cte_avg_salary c1;

## Referring to Common Table Expressions in a WITH Clause

select * from employees
where hire_date > '2000-01-01';

with emp_hired_from_jan_2000 as (
select * from employees where hire_date > '2000-01-01'
),
highest_contract_salary_values as (
select e.emp_no, MAX(s.salary) from salaries s join emp_hired_from_jan_2000 e on e.emp_no = group by emp_no
)
select * from highest_contract_salary_values;

select * from salaries
where emp_no in (205048,
			222965,
            226633,
            227544,
            422990,
            424445,
            428377,
            463807,
            499553);
            
            
##########################################################
##########################################################

-- SECTION: Combining SQL and Tableau - Introduction

##########################################################
########################################################## 

##  no querys



