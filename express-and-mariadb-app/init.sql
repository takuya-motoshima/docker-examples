CREATE DATABASE IF NOT EXISTS food;
USE food;

CREATE TABLE food.desserts (
  name VARCHAR(100)
);

INSERT INTO food.desserts VALUES
  ('churros'),
  ('gelato'),
  ('halo-halo'),
  ('mochi');