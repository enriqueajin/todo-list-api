-- CREATE TABLE USERS
CREATE TABLE users(
    user_id VARCHAR(50) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(150),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- INSERT DUMMY VALUES
INSERT INTO users (user_id, first_name, last_name, email, phone_number, address)
VALUES('VYo8ikKSZYZv5gD40amGbvCzcLE2' ,'Kebyn', 'Ajin', 'enriquesaon@gmail.com', '50211223344', 'Avenida Miler zona 6');
INSERT INTO users (user_id, first_name, last_name, email, phone_number, address)
VALUES('5LP22AfbfYWkgCC739Zsmgm9yti2', 'Victor', 'Matzar', 'elmatzar123@gmail.com', '5029870234', 'Avenida Florencia zona 10');

-- UPDATE A USER
UPDATE users
SET
    first_name = 'Kebyn',
    last_name = 'Ajin',
    email = 'enriquesaon@gmail.com'
WHERE user_id = 1;

-- CRAETE TABLE STATUS
CREATE TABLE status(
    status_id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- INSERT DUMMY VALUES
INSERT INTO status (name)
VALUES('Pendiente');
INSERT INTO status (name)
VALUES('En proceso');
INSERT INTO status (name)
VALUES('Finalizado');

-- CRAETE TABLE TASKS
CREATE TABLE tasks(
    task_id SERIAL PRIMARY KEY,
    user_id VARCHAR(50),
    status_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    due_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_Tasks_Users
        FOREIGN KEY(user_id)
        REFERENCES users(user_id),
    CONSTRAINT FK_Tasks_Status
        FOREIGN KEY(status_id)
        REFERENCES status(status_id)
);

-- INSERT DUMMY VALUES
INSERT INTO tasks (user_id, status_id, title, description, due_date)
VALUES('VYo8ikKSZYZv5gD40amGbvCzcLE2', 1, 'Mapa mental', 'Hacer un mapa mental sobre: Inteligencia Artificial.', '2023-10-15 15:04:51');
INSERT INTO tasks (user_id, status_id, title, description, due_date)
VALUES('5LP22AfbfYWkgCC739Zsmgm9yti2', 1, 'Modelo IA', 'Crear un modelo de IA para predecir enfermedades.', '2023-10-25 15:09:59');
INSERT INTO tasks (user_id, status_id, title, description, due_date)
VALUES('5LP22AfbfYWkgCC739Zsmgm9yti2', 1, 'Exposición Kanban', 'Exponer sobre la metodología Kanban.', '2023-09-18 08:27:13');

-- GET TASKS BY USER ID
SELECT * FROM tasks WHERE user_id = '5LP22AfbfYWkgCC739Zsmgm9yti2';

-- GET USER BY ID
SELECT * FROM users WHERE user_id = '5LP22AfbfYWkgCC739Zsmgm9yti2'

-- ADD USER
INSERT INTO users (user_id, first_name, last_name, email, phone_number, address)
VALUES ()

-- DELETE USER
DELETE FROM users WHERE user_id = 'R9QLFtXmLmbEWpzXgldJGiaR2513';

-- UPDATE USER
UPDATE users
SET
    first_name = 'Alfredo',
    last_name = 'Say',
    email = 'elmatzar123@gmail.com',
    phone_number = '5028970234',
    address = 'La Flora zona 19'
WHERE user_id = '5LP22AfbfYWkgCC739Zsmgm9yti2';