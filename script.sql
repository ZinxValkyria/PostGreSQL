-- Drop the existing "users" table if it already exists (optional, use it if you want to start fresh)
DROP TABLE IF EXISTS users;

-- Create the "users" table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL
);

-- Insert data for characters from "The Matrix" movie
INSERT INTO users (username, email, age)
VALUES
    ('Neo', 'neo@thematrix.com', 30),
    ('Trinity', 'trinity@thematrix.com', 28),
    ('Morpheus', 'morpheus@thematrix.com', 45);
    ('Agent Smith', 'smith@thematrix.com', 35),
    ('Cypher', 'cypher@thematrix.com', 38),
    ('Niobe', 'niobe@thematrix.com', 32),
    ('Seraph', 'seraph@thematrix.com', 40);
