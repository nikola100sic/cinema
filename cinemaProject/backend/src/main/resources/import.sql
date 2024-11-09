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


INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,6);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,3);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,4);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (4,6);

INSERT INTO users (`role`, `birth_date`, `id`, `first_name`, `last_name`, `password`, `username`) VALUES ('ADMIN', '1999-01-22', '1', 'Nikola', 'Stosic', 'encryptedPassword1', 'dzoni');
INSERT INTO users (`role`, `birth_date`, `id`, `first_name`, `last_name`, `password`, `username`) VALUES ('USER', '1997-04-16', '2', 'Marko', 'Markovic', 'encryptedPassword2', 'mare');
INSERT INTO users (`role`, `birth_date`, `id`, `first_name`, `last_name`, `password`, `username`) VALUES ('USER', '1991-03-12', '3', 'Lazar', 'Lazarevic', 'encryptedPassword3', 'laza');
INSERT INTO users (`role`, `birth_date`, `id`, `first_name`, `last_name`, `password`, `username`) VALUES ('USER', '1978-07-21', '4', 'Marija', 'Marijanovic', 'encryptedPassword4', 'marija');




