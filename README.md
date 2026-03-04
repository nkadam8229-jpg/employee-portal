# Employee Portal

Simple 3-Tier Employee Management Application.

Backend: Node.js + Express  
Database: MySQL  
Frontend: HTML + CSS

---

# DATABASE SQL

Run in MySQL

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
department VARCHAR(100)
);

---

# WINDOWS SETUP

Install Node.js
https://nodejs.org

Install MySQL
https://dev.mysql.com/downloads/mysql/

Check installations

node -v
npm -v
mysql --version

Clone project

git clone https://github.com/YOUR_REPO/employee-portal.git

cd employee-portal

Install dependencies

npm install

Create environment file

copy .env.example .env

Edit .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_db
PORT=3000

Run server

npm start

Open browser

http://localhost:3000

Health check

http://localhost:3000/health

---

# TEST ENDPOINTS

Add employee

POST

http://localhost:3000/api/employees

Body JSON

{
"name":"John",
"email":"john@email.com",
"department":"IT"
}

List employees

GET

http://localhost:3000/api/employees

Delete employee

DELETE

http://localhost:3000/api/employees/1

---

# TEST WITH MYSQL CLIENT

mysql -u root -p

USE employee_db;

SELECT * FROM employees;

---

# AMAZON LINUX SETUP

Connect to EC2

ssh ec2-user@your-ip

Install packages

sudo yum update -y

Install Node

curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -

sudo yum install nodejs -y

Install Git

sudo yum install git -y

Install MySQL client

sudo yum install mysql -y

Clone project

git clone https://github.com/YOUR_REPO/employee-portal.git

cd employee-portal

Install dependencies

npm install

Create env

nano .env

Run server

node server.js

---

# OPTIONAL PM2

Install

npm install -g pm2

Run

pm2 start server.js

Auto start

pm2 startup
pm2 save

---

# SECURITY GROUP

Allow

Port 22 SSH  
Port 3000 HTTP

---

# TROUBLESHOOTING

Database connection error

Check

DB_HOST
DB_USER
DB_PASSWORD

Port already in use

Change PORT in .env

Security group issue

Open port 3000 in EC2 security group

Cannot connect to MySQL

Ensure RDS or MySQL server allows incoming connections