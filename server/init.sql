CREATE TABLE IF NOT EXISTS my_poll (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS option_poll (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  votes INT NOT NULL,
  poll_id INT REFERENCES my_poll(id)
);
