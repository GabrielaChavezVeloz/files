insert into areas (area) values ("development");
insert into areas (area) values ("design");
insert into areas (area) values ("testing");

insert into types (type) values("student");
insert into types (type) values("professional");
insert into types (type) values("admin");

insert into roles (role) values("developer");
insert into roles (role) values("tester");
insert into roles (role) values("leader");
insert into roles (role) values("designer");

insert into users (about_yourself, display_name, domain_expertise, experience, first_name, last_name, profile_picture, role_id, type_id) 
values ("a person", "gabychavez", "Software development", "java developer", "Gabriela", "Chavez", "C://Documents/photo.img", 1, 1);

insert into users (about_yourself, display_name, domain_expertise, experience, first_name, last_name, profile_picture, role_id, type_id) 
values ("a person", "pepitoperez", "Software development", "tester", "Jose", "Perez", "C://Documents/pepito.img", 2, 2);

