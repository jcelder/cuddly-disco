DROP DATABASE songs;

CREATE DATABASE songs;

USE songs;

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  artistName TEXT,
  songName TEXT
);

INSERT INTO songs (artistName, songName) VALUES
  ("Test Artist", "Test Song, Please Ignore"),
  ("The Artist Formerly Known as $", "$(\".money\")");
