CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL
);



INSERT INTO users (id, username, email, age)
VALUES
    (1, 'JohnDoe', 'john.doe@example.com', 30),
    (2, 'JaneSmith', 'jane.smith@example.com', 25),
    (3, 'MikeJohnson', 'mike.johnson@example.com', 40);
