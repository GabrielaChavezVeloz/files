DROP DATABASE IF EXISTS udemy;
CREATE DATABASE IF NOT EXISTS udemy; 
USE udemy;

SELECT 'CREATING DATABASE STRUCTURE' as 'INFO';

DROP TABLE IF EXISTS usrs,
                     roles,
                     titles,
                     areas, 
                     types, 
                     courses,
					 domains,
					 reviews,
					 enrolled_users,
					 carts,
					 orders;
	
	
CREATE TABLE roles (
    id_role      INT             NOT NULL,
    role  VARCHAR(20)     NOT NULL,
    PRIMARY KEY (id_role)
);					

CREATE TABLE types (
    id_type      INT             NOT NULL,
    type  VARCHAR(20)     NOT NULL,
    PRIMARY KEY (id_type)
); 
					 
CREATE TABLE users (
    id_user      INT             NOT NULL,
    first_name  VARCHAR(50)     NOT NULL,
    last_name   VARCHAR(50)     NOT NULL,
	display_name  VARCHAR(50)     NOT NULL,
	about_yourself  VARCHAR(50)     NOT NULL,
	experience  VARCHAR(50)     NOT NULL,
	domain_expertise  VARCHAR(50)     NOT NULL,
	id_role		INT				NOT NULL,
	id_type		INT				NOT NULL,
	profile_picture VARBINARY(4000),	
	FOREIGN KEY (id_role) REFERENCES roles (id_role) ON DELETE CASCADE,
	FOREIGN KEY (id_type) REFERENCES types (id_type) ON DELETE CASCADE,
    PRIMARY KEY (id_user)
);

CREATE TABLE areas (
    id_area      INT             NOT NULL,
    area  VARCHAR(20)     NOT NULL,
    PRIMARY KEY (id_area)
);

CREATE TABLE domains (
    id_domain      INT             NOT NULL,
    domain  VARCHAR(20)     NOT NULL,
    PRIMARY KEY (id_domain)
);

CREATE TABLE courses (
    id_course      INT             NOT NULL,
    name  VARCHAR(50)     NOT NULL,
    id_domain   INT             NOT NULL,
	description  VARCHAR(50)     NOT NULL,
	author  VARCHAR(50)     NOT NULL,
	price  DOUBLE     NOT NULL,
	duration  VARCHAR(50)     NOT NULL,
	FOREIGN KEY (id_domain) REFERENCES domains (id_domain) ON DELETE CASCADE,
    PRIMARY KEY (id_course)
);

CREATE TABLE reviews (
    id_review      INT             NOT NULL,
    review  VARCHAR(500)     NOT NULL,
	rating      INT             NOT NULL,
	id_user     INT             NOT NULL,
	id_course     INT             NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
	FOREIGN KEY (id_course) REFERENCES courses (id_course) ON DELETE CASCADE,
    PRIMARY KEY (id_review)
);

CREATE TABLE enrolled_users (
    id_enrrolled      INT             NOT NULL,
	id_user     INT             NOT NULL,
	id_course     INT             NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
	FOREIGN KEY (id_course) REFERENCES courses (id_course) ON DELETE CASCADE,
    PRIMARY KEY (id_enrrolled)
);

CREATE TABLE carts (
    id_cart      INT             NOT NULL,
	id_user     INT             NOT NULL,
	id_course     INT             NOT NULL,
	addition_date     DATE            NOT NULL,
	is_active		TINYINT		NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
	FOREIGN KEY (id_course) REFERENCES courses (id_course) ON DELETE CASCADE,
    PRIMARY KEY (id_cart)
);

CREATE TABLE orders (
    id_orders      INT             NOT NULL,
	id_user     INT             NOT NULL,
	id_cart     INT             NOT NULL,
	total_price  DOUBLE     NOT NULL,
	order_date     DATE            NOT NULL,
	credit_card		VARCHAR(20)		NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
	FOREIGN KEY (id_cart) REFERENCES carts	(id_cart) ON DELETE CASCADE,
    PRIMARY KEY (id_orders)
);

