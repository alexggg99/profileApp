insert into category(id, name) values ( 1, 'Romance');
insert into category(id, name) values ( 2, 'Comics');
insert into category(id, name) values ( 3, 'Travel');
insert into books(id, title, author, publisher, lang, category_id, number_of_pages, our_price, active, description)
values ( 1, 'Novel book', 'Dic Mortan', 'SubmitPress', 'ru', 1, 230, 12.25, true, 'Romance Novel');
insert into books(id, title, author, publisher, lang, category_id, number_of_pages, our_price, active, description)
values ( 2, 'Travel book', 'Sam Roman', 'AsmPress', 'ru', 3, 125, 6.8, true, 'Travel book');