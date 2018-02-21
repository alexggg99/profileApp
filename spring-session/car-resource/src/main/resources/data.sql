insert into user(id, username, enable) VALUES (1, 'admin', true);
insert into user(id, username, enable) VALUES (2, 'user', true);

insert into car(id, model, seats, user_id) values ( 1, 'Audi', 2, 2);
insert into car(id, model, seats, user_id) values ( 2, 'Mercedes-Benz', 3, 2);
insert into car(id, model, seats, user_id) values ( 3, 'BMW', 3, 1);

insert into trip(id, date, source_point, destination, car_id) values
(1, {ts '2018-01-17 18:22:52.69'}, 'source1', 'source2', 1);

insert into trip(id, date, source_point, destination, car_id) values
(2, {ts '2018-01-19 11:03:14.69'}, 'source3', 'source6', 1);

insert into trip(id, date, source_point, destination, car_id) values
(3, {ts '2018-02-12 10:11:16.14'}, 'source3', 'source2', 1);

insert into trip(id, date, source_point, destination, car_id) values
(4, {ts '2018-01-21 18:11:16.14'}, 'source4', 'source1', 2);

insert into trip(id, date, source_point, destination, car_id) values
(5, {ts '2018-02-08 14:22:16.14'}, 'source3', 'source2', 3);

insert into trip(id, date, source_point, destination, car_id) values
(6, {ts '2018-01-12 22:45:16.14'}, 'source4', 'source5', 2);

insert into trip(id, date, source_point, destination, car_id) values
(7, {ts '2018-02-12 16:20:16.14'}, 'source3', 'source2', 3);