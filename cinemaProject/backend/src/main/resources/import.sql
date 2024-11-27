INSERT INTO genres (id, name) VALUES (1, 'Comedy');
INSERT INTO genres (id, name) VALUES (2, 'Horror');
INSERT INTO genres (id, name) VALUES (3, 'Crime');
INSERT INTO genres (id, name) VALUES (4, 'Drama');
INSERT INTO genres (id, name) VALUES (5, 'Science fiction');
INSERT INTO genres (id, name) VALUES (6, 'Romance');
INSERT INTO genres (id, name) VALUES (7, 'Action');
INSERT INTO genres (id, name) VALUES (8, 'Fantasy');
INSERT INTO genres (id, name) VALUES (9, 'Mystery');
INSERT INTO genres (id, name) VALUES (10, 'Thriller');
INSERT INTO genres (id, name) VALUES (11, 'Western romance');
INSERT INTO genres (id, name) VALUES (12, 'Adventure');



INSERT INTO movies (name, image_url,duration,rating) VALUES ('The Godfather', 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',140,5);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Meet the Fockers', 'https://images.moviesanywhere.com/62b942d4c4f4edec0252a503c60b2dcd/7f622a83-bf28-488f-9dd3-ba3134b92058.jpg',162, 4);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Joker', 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',178,5);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Titanic', 'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',150, 4);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('About My Father', 'https://m.media-amazon.com/images/M/MV5BZTQ3NDZhMjUtNGNhMS00ODhjLTk2OTktOWE1Y2VjNTRmNWUxXkEyXkFqcGc@._V1_.jpg',153, 4);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Taxi Driver', 'https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_.jpg',174, 5);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Gladiator', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_kenAC7V_GCDzYEeAwSw_dCFPa7ahAM_YgaHpPNpbzR_Z8tnC',208, 5);
INSERT INTO movies (name, image_url,duration,rating) VALUES ('Avengers', 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg',164, 5);

INSERT INTO `cinema`.`user` (`id`, `name`,`surname`,`e_mail`,`password`, `username`, `user_role`, `is_email_verified`, `token`) VALUES ('1','Nikola','Stosic','nikola@nikola' ,'$2a$10$leAXJYphj5ZuzUeI8/xF4Oe6sW7D/u8KlbVGgLFw6BkXxjrzlYWeq', 'dzoni', 'ADMIN',1, '1233');
INSERT INTO `cinema`.`user` (`id`, `name`,`surname`,`e_mail`,`password`, `username`, `user_role`, `is_email_verified`, `token`) VALUES ('2','Petar','Stosic','petar@petar' ,'$2a$10$rGFzFTHsScJ4X8SU5/9CweD07SeX67/GxRUHWnKLnUEaUPx/rgOsC', 'rope', 'USER', 1, '123');


INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,6);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,6);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (5,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (5,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (5,6);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (6,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (6,7);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (6,10);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (7,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (7,7);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (7,12);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (8,7);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (8,5);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (8,12);





INSERT INTO halls (`capacity`, `id`, `hall_number` ,`name`) VALUES ('20', '1', 1,'Gold ');
INSERT INTO halls (`capacity`, `id`, `hall_number`,`name`) VALUES ('15', '2', 2,'Silver ');
INSERT INTO halls (`capacity`, `id`, `hall_number`,`name`) VALUES ('10', '3', 3,'Bronze ');

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

INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-02', '15:30:00', '1', '1', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-02', '18:30:00', '2', '2', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-02' ,'20:30:00', '1', '3', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-03' ,'22:00:00', '2', '4', '2','2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-03' ,'17:30:00', '3', '5', '2','2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-03' ,'15:30:00', '1', '6', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-26' ,'20:00:00', '1', '7', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-26', '16:30:00', '2', '8', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-25', '18:30:00', '1', '9', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-24' ,'21:30:00', '3', '10', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-27' ,'15:30:00', '1', '11', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-27' ,'17:30:00', '1', '12', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-27' ,'20:15:00', '1', '13', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-27' ,'20:00:00', '1', '14', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-28' ,'13:30:00', '1', '15', '2','2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-28' ,'22:30:00', '2', '16', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-28' ,'21:00:00', '3', '17', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-28', '15:30:00', '2', '18', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-29', '17:30:00', '1', '19', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-29' ,'22:30:00', '2', '20', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-29' ,'11:30:00', '3', '21', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-29' ,'13:30:00', '1', '22', '2','2');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-29' ,'22:30:00', '3', '23', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-30' ,'20:00:00', '1', '24', '3','2.9');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-30' ,'16:30:00', '2', '25', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-30' ,'18:30:00', '3', '26', '1','2.5');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-11-30' ,'21:30:00', '2', '27', '4','3.0');
INSERT INTO `screening` (`screening_date`, `screening_time`, `hall_id`, `id`, `movie_id`,`ticket_price`) VALUES ('2024-12-01' ,'23:00:00', '1', '28', '2','2');

INSERT INTO `reservation` (`is_active`, `id`,`screening_id`, `seat_id`, `user_id`) VALUES (1, '1','1', '1', '1');
INSERT INTO `reservation` (`is_active`, `id`, `screening_id`, `seat_id`, `user_id`) VALUES (1, '2','1', '7', '1');










