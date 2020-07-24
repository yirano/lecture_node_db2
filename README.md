# Database Schema Design

Guided project for **Node DB II** module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org/) or a similar app installed.
- a REST client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

---
## Lecture Notes

TYpe of database we've been working with: relational

DBMS (Database Management System): SQLite

### Three questions to ask ourselves to keep our schema clean:
- What fields, or columns, does a table need?
- What type of data do we expect for each column?
- Are there any restrictions or constraints needed for each column?
  
Primary Key - the unique identifier for a row

### Data Definition Language (DDL)
```sql
CREATE TABLE <table name> (
  <column name <data type> <constraints>,
  <column name <data type> <constraints>,
)

ALTER TABLE <table name> <stuff to change>;

DROP TABLE <table name>
```

### Database Migrations
```
migrations/migration1.js
```
- Creates the fruits table 
```
migrations/migration2.js
```
- Adds a column to the fruits table
- Removes a default value from an existing column
```
migrations/migrations3.js
```
- Create a new vegetables table
