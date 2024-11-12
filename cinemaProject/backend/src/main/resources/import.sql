INSERT INTO genres (id, name) VALUES (1, 'Comedy');
INSERT INTO genres (id, name) VALUES (2, 'Horror');
INSERT INTO genres (id, name) VALUES (3, 'Crime');
INSERT INTO genres (id, name) VALUES (4, 'Drama');
INSERT INTO genres (id, name) VALUES (5, 'Science fiction');
INSERT INTO genres (id, name) VALUES (6, 'Romance');

INSERT INTO movies (name, duration, image) VALUES ('The Godfather', 140, 'image1');
INSERT INTO movies (name, duration, image) VALUES ('Meet the Fockers', 162, 'image2');
INSERT INTO movies (name, duration, image) VALUES ('Joker', 178, 'image3');
INSERT INTO movies (name, duration, image) VALUES ('Titanic', 150, 'image4');

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
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-13', '20:30:00', '1', '2', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-14' ,'22:30:00', '1', '3', '1');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-17' ,'11:30:00', '1', '4', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12' ,'13:30:00', '1', '5', '2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-12' ,'22:30:00', '1', '6', '3');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`) VALUES ('2024-11-10' ,'20:00:00', '1', '7', '4');

INSERT INTO `reservation` (`is_active`, `id`, `screening_id`, `seat_id`, `user_id`) VALUES (1, '1', '1', '1', '1');
INSERT INTO `reservation` (`is_active`, `id`, `screening_id`, `seat_id`, `user_id`) VALUES (1, '2', '1', '7', '1');










