insert into category(id, name) values ( 1, 'Romance');
insert into category(id, name) values ( 2, 'Comics');
insert into category(id, name) values ( 3, 'Travel');
insert into books(id, title, author, publisher, lang, category_id, number_of_pages, list_price, our_price, active, description)
values ( 1, 'Give place to Wrath', 'Roger Viceroy', 'SubmitPress', 'ru', 1, 230, 14.25 ,12.25, true, 'Romance Novel');
insert into books(id, title, author, publisher, lang, category_id, number_of_pages, list_price, our_price, active, description)
values ( 2, 'How not to travel the world', 'Lauren Juliff', 'AsmPress', 'ru', 3, 125, 7.0 ,6.8, true, 'Travel book');