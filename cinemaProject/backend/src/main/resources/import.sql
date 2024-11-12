INSERT INTO genres (id, name) VALUES (1, 'Comedy');
INSERT INTO genres (id, name) VALUES (2, 'Horror');
INSERT INTO genres (id, name) VALUES (3, 'Crime');
INSERT INTO genres (id, name) VALUES (4, 'Drama');
INSERT INTO genres (id, name) VALUES (5, 'Science fiction');
INSERT INTO genres (id, name) VALUES (6, 'Romance');

INSERT INTO movies (name, duration, image,rating) VALUES ('The Godfather', 140, 'image1',5);
INSERT INTO movies (name, duration, image,rating) VALUES ('Meet the Fockers', 162, 'image2',4);
INSERT INTO movies (name, duration, image,rating) VALUES ('Joker', 178, 'image3',5);
INSERT INTO movies (name, duration, image,rating) VALUES ('Titanic', 150, 'image4',4);

INSERT INTO `cinema`.`user` (`id`, `password`, `username`) VALUES ('1', '111', 'dzoni');



INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,6);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,6);

INSERT INTO halls (`capacity`, `id`, `name`) VALUES ('20', '1', 'Gold ');
INSERT INTO halls (`capacity`, `id`, `name`) VALUES ('15', '2', 'Silver ');
INSERT INTO halls (`capacity`, `id`, `name`) VALUES ('10', '3', 'Bronze ');

INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('1', '1','1', '1');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('1', '1','2', '2');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('1', '1','3', '3');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('1', '1','4', '4');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('2', '1','1', '5');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('2', '1','2', '6');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('2', '1','3', '7');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('2', '1','4', '8');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('3', '1','1', '9');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('3', '1','2', '10');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('3', '1','3', '11');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('3', '1','4', '12');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('4', '1','1', '13');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('4', '1','2', '14');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('4', '1','3', '15');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('4', '1','4', '16');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('5', '1','1', '17');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('5', '1','2', '18');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('5', '1','3', '19');
INSERT INTO `seats` ( `seat_column`, `hall_id`,`seat_row`, `id`) VALUES ('5', '1','4', '20');

INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12', '15:30:00', '1', '1', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12', '18:30:00', '1', '2', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12' ,'20:30:00', '1', '3', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12' ,'22:00:00', '1', '4', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12' ,'17:30:00', '1', '5', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13' ,'15:30:00', '1', '6', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13' ,'20:00:00', '1', '7', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13', '16:30:00', '1', '8', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13', '18:30:00', '1', '9', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13' ,'21:30:00', '1', '10', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-14' ,'15:30:00', '1', '11', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-14' ,'17:30:00', '1', '12', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-14' ,'20:15:00', '1', '13', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-14' ,'20:00:00', '1', '14', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-15' ,'13:30:00', '1', '15', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-15' ,'22:30:00', '1', '16', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-15' ,'21:00:00', '1', '17', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-15', '15:30:00', '1', '18', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-16', '17:30:00', '1', '19', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-16' ,'22:30:00', '1', '20', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-16' ,'11:30:00', '1', '21', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-17' ,'13:30:00', '1', '22', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-17' ,'22:30:00', '1', '23', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-17' ,'20:00:00', '1', '24', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-18' ,'16:30:00', '1', '25', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-18' ,'18:30:00', '1', '26', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-18' ,'21:30:00', '1', '27', '4');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-18' ,'23:00:00', '1', '28', '2');

INSERT INTO `reservation` (`is_active`, `id`, `screening_id`, `seat_id`, `user_id`) VALUES (1, '1', '1', '1', '1');
INSERT INTO `reservation` (`is_active`, `id`, `screening_id`, `seat_id`, `user_id`) VALUES (1, '2', '1', '7', '1');










