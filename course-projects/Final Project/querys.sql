USE udemy;

select * from users;

select * from areas;

select * from roles;
select * from types;
select * from user_areas;

insert into areas (area) values ("Development");
insert into areas (area) values ("Desing");
insert into areas (area) values ("Testing");
insert into areas (area) values ("Managment");

insert into types (type) values("student");
insert into types (type) values("professional");
insert into types (type) values("admin");

insert into roles (role) values("developer");
insert into roles (role) values("tester");
insert into roles (role) values("leader");
insert into roles (role) values("designer");