INSERT INTO genres (id, name) VALUES (1, 'Comedy');
INSERT INTO genres (id, name) VALUES (2, 'Horror');
INSERT INTO genres (id, name) VALUES (3, 'Crime');
INSERT INTO genres (id, name) VALUES (4, 'Drama');
INSERT INTO genres (id, name) VALUES (5, 'Science fiction');
INSERT INTO genres (id, name) VALUES (6, 'Romance');

INSERT INTO movies (name, duration, image) VALUES ('The Godfather', 175, 'hwww.movie1.com');
INSERT INTO movies (name, duration, image) VALUES ('Meet the Fockers', 152, 'www.movie2.com');
INSERT INTO movies (name, duration, image) VALUES ('Harry Poter', 154, 'www.movie3.com');

INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (1,2);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (2,1);
INSERT INTO movie_genre (movie_id, genre_id) VALUES (3,3);


