DROP TABLE IF EXISTS stars;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
id SERIAL PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255),
password_digest VARCHAR(255),
created_at Date,
updated_at Date,
star_id INTERGER
);

CREATE TABLE stars (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  best_viewed VARCHAR(255),
  description VARCHAR(255),
  created_at DATE,
  updated_at DATE
          );

CREATE TABLE horoscope (
id SERIAL PRIMARY KEY,
name VARCHAR(255),
user_id INTERGER,
star_id INTERGER
);

