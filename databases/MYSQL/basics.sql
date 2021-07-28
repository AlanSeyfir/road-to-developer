CREATE DATABASE record_company;
USE record_company;

CREATE TABLE bands(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE albums(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(band_id) REFERENCES bands(id)
);

INSERT INTO bands(name)
VALUES ('PXNDX'), ('Stray kids'), ('Miss A'), ('Alter bridge');

SELECT * FROM bands;
SELECT * FROM bands LIMIT 3; -- Only shows 3 rows
SELECT name FROM bands; -- Shows only the specified column and table
SELECT id AS 'ID', name AS 'Band Name' 
FROM bands; -- Make Aliases and change the names, we can also referenced but it's more complex
SELECT * FROM bands ORDER BY name; -- By default is ASC, we can add DESC after name

INSERT INTO albums(name, release_year, band_id)
VALUES ('Amantes Sunt Amentes', 2005, 17),
	   ('I AM YOU', 2018, 18),
       ('COLORS', 2001, 18), -- Test the same name of the album but have it's DIFFERENT band
       ('COLORS', 2010, 19),
       ('BlackBird', 2007, 20),
       ('One Should Remain', NULL, 20);
       
SELECT * FROM albums;
-- With DISTINCT ignores the duplicates and give only one, imagine if we have 100 albums with the same name
SELECT DISTINCT name FROM albums;

UPDATE albums
SET release_year = 2006
WHERE id = 1; -- Change the release year with th id of 1

SELECT * FROM albums
WHERE release_year < 2015;

SELECT * FROM albums
WHERE name LIKE '%am%' OR band_id = 17;

SELECT * FROM albums
WHERE release_year = 2018 AND band_id = 18;

SELECT * FROM albums
WHERE release_year BETWEEN 2000 AND 2005;

SELECT * FROM albums
WHERE release_year IS NULL;

-- DELETE FROM albums WHERE release_year IS NULL; I don't know why this doesn't execute
DELETE FROM albums WHERE id = 6 OR id = 12 OR id = 18; -- Delete multiple values

INSERT INTO bands(name)
VALUES ('Anchor');

SELECT * FROM bands
JOIN albums ON bands.id = albums.band_id; -- INNER and JOIN they're the same
-- Useful when you only want to get records back when there is both a value in the table on the left which are selecting from the table on the right which you're joining two
-- Left joins are useful when you just want to get absolutely everything from the left side table which you're selecting from then just get the things from the right if they just exist and if they don't still return something (NULL)
SELECT * FROM albums
RIGHT JOIN bands ON bands.id = albums.band_id;

-- Aggregate functions
SELECT AVG(release_year) from albums; 
SELECT SUM(release_year) from albums;
SELECT band_id, COUNT(band_id) FROM albums
GROUP BY band_id; -- Shows a table to know how many bands with the band_id are in the DB

SELECT b.name AS band_name, COUNT(a.id) AS num_albums
FROM bands AS b
LEFT JOIN albums AS a ON b.id = a.band_id
-- WHERE b.name = 'Miss A' -- find only Miss A
GROUP BY b.id
HAVING num_albums = 1; -- find only a band that has only 1 album

