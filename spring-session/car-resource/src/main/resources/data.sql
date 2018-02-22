insert into user(id, username, enable) VALUES (1, 'admin', true);
insert into user(id, username, enable) VALUES (2, 'user', true);

insert into car(id, model, seats, user_id) values ( 1, 'Audi', 2, 2);
insert into car(id, model, seats, user_id) values ( 2, 'Mercedes-Benz', 3, 2);
insert into car(id, model, seats, user_id) values ( 3, 'BMW', 3, 1);

insert into trip(id, date, source_point, destination, car_id) values
(1, {ts '2018-01-17 18:20:00.00'}, 'source1', 'source2', 1);

insert into trip(id, date, source_point, destination, car_id) values
(2, {ts '2018-01-19 17:20:00.00'}, 'source3', 'source6', 1);

insert into trip(id, date, source_point, destination, car_id) values
(3, {ts '2018-02-12 19:40:00.00'}, 'source3', 'source2', 1);

insert into trip(id, date, source_point, destination, car_id) values
(4, {ts '2018-01-21 14:30:00.00'}, 'source4', 'source1', 2);

insert into trip(id, date, source_point, destination, car_id) values
(5, {ts '2018-02-08 12:00:00.00'}, 'source3', 'source2', 3);

insert into trip(id, date, source_point, destination, car_id) values
(6, {ts '2018-01-12 10:30:00.00'}, 'source4', 'source5', 2);

insert into trip(id, date, source_point, destination, car_id) values
(7, {ts '2018-02-12 9:40:00.00'}, 'source3', 'source2', 3);