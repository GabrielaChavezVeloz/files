insert into domains (domain) values("development");
insert into domains (domain) values("testing");
insert into domains (domain) values("web");
insert into domains (domain) values("design");

insert into courses (author, description, duration, name, price, domain_id) 
values ("Jose Perez", "java for beginners", "3 hours", "java fundamentals", 30, 1);

insert into courses (author, description, duration, name, price, domain_id) 
values ("Maria Lopez", "test for beginners", "2 hours", "test fundamentals", 10, 2);

insert into courses (author, description, duration, name, price, domain_id) 
values ("Jose Perez", "java web", "4 hours", "java web", 20, 1);

insert into courses (author, description, duration, name, price, domain_id) 
values ("Maria Lopez", "test advanced", "3 hours", "test advanced", 15, 1);


insert into reviews (id_user, id_course, review, rating, is_anonymous)
values (1, 1, "Excellent course!", 5, 0);

insert into reviews (id_user, id_course, review, rating, is_anonymous)
values (2, 1, "Good!", 4, 0);

insert into reviews (id_user, id_course, review, rating, is_anonymous)
values (2, 2, "Bad instructor", 2, 1);

insert into reviews (id_user, id_course, review, rating, is_anonymous)
values (1, 2, "Good course", 4, 1);