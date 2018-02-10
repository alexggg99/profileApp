insert into user(id, username, enable) VALUES (1, 'admin', true);
insert into user(id, username, enable) VALUES (2, 'user', true);

insert into todo_group(id, name) values ( 1, 'private');
insert into todo_group(id, name) values ( 2, 'family');
insert into todo_group(id, name) values ( 3, 'work');

insert into todo(id, title, user_id, created_at, group_id, done) values
(1, 'prepare homework', 2, {ts '2012-09-17 18:47:52.69'}, 1, false);

insert into todo(id, title, user_id, created_at, group_id, done) values
(2, 'prepare admin homework', 1, {ts '2012-09-18 19:47:52.69'}, 1, false);


insert into todo(id, title, user_id, created_at, group_id, done) values
(3, 'clean house', 2, {ts '2012-09-22 22:15:00.06'}, 1, false);


insert into todo(id, title, user_id, created_at, group_id, done) values
(4, 'repair machine', 2, {ts '2012-08-02 12:00:15.12'}, 1, false);


insert into todo(id, title, user_id, created_at, group_id, done) values
(5, 'go in supermarket', 2, {ts '2012-09-03 22:15:52.69'}, 1, false);