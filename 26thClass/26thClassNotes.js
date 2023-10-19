/* 

SQL =
Structured Query Language (used to get data from DB)

- get access to data in DB
- describe data (or structured data)
- define data and handle it
- connect to other languages through libraries
- create and remove tables
- create stored procedures and functions
- grand or revoke access to tables

Processes:
QUERY DISPATCHER
OPTIMIZTION ENGINES
CLASIC QUERY ENGINE
SQL QUERY ENGINE

*********************************************

- DATA DEFINITION LANGUAGE:
CREATE
ALTER
DROP

- DATA MANIPULATION LANGUAGE:
SELECT
INSERT
UPDATE
DELETE

- DATA CONTROL LANGUAGE:
REVOKE
GRANT

- TRANSACTION CONTROL LANGUAGE:
COMMIT
CREATE TRANSACTION

*********************************************

Constrains = 

NOT NULL:
- column cannot be null

DEFAULT:
- if no value is given, default will be used

UNIQUE:
- only one unique value can exist per row/column

PRIMARY KEY:
- a set of columns that uniquely identify each record in the table.

FOREIGN KEY:
- references another table's primary key

CHECK:
- checks condition on data entered into a field

INDEX:
- speeds up searching for specific values within a database

i.e.:
ALTER TABLE
DROP CONSTRAIN

*********************************************

Data Integrity =

- Entity Integrity:
No duplicates

- Domain Integrity:
Valid range of values

- Referential Integrity:
All foreign keys refer to valid records in other tables

- User-Defined Integrity:
Custom rules defined by users

*********************************************

Data Types =

Integer:
- int (minus billon to billon)
- bigint  (from -9*10^21 to 9*10^21)
- tinyint (0 to 255)
- smallint (-32.768 to 32767)
- numeric (-10^38 to 10^38)
- decimal (-10^37 to 10^37)
- bit (0 to 1)
- smallmoney (+- 214.764)
- money (like bigint but more apromixation)

Float:
- float
- real

Date and Time:
- datetime (jan 1 1753 to dec 31 9999)
- smalldatetime (jan 1 1990 to jun 6 2079)
- date
- time

String:
- char /nchar (string <= 8000, length defined) [not unicode/ unicode]
- varchar /nvarchar (string <= 8000, length not defined) [not unicode/ unicode]
- text /ntext (<= 2*10^10) [not unicode/ unicode]

Binary:
- binary (<= 8000 bytes, fixed length)
- varbinary (<= 8000 bytes, relative length)
- image (<= 2*10^10 bytes)

Mixed:
- timestamp (integer that shows time, created_at and updated_at)
- uniqueidentifier (GUIDs)

*********************************************

Types of relations:

1) One-to-One
2) One-to-Many
3) Many-to-Many

*********************************************

Operators:

- Arithmetics
+
-
*
/
%

- Comparisson
=
!= (same as <>)
<
>
<=
>=
!<
!>

- Logical
ALL
AND
ANY
BETWEEN
EXISTS
IN
LIKE
NOT
OR
IS NULL
UNIQUE

- Mathematical
AVG
SUM
MIN
MAX
COUNT
ROUND
TRUNCATE
CEILING
FLOOR
POWER
SQRT
RAND

- String
CONCAT
LENGTH
TRIM
SUBSTRING
REPLACE
LOWER
UPPER

- Dates
CURRENT_TIMESTAMP
CURDDATE / CURRENT_DATE
CURTIME / CURRENT_TIME
DAYOFMONTH
DAYOFWEEK
DAYOFYEAR
MONTH
YEAR
LAST_DAY
HOUR
MINUTE
SECOND
DATE_ADD
DATE_SUB
DATEDIFF
TIME_TO_SEC

*********************************************

Definition of expression:
An expression is a combination of one or more values, constants, variables, 
operators, functions, etc., which are combined using logical operators

SELECT *
FROM table
WHERE [condition|expression]
        status = 'active'

SELECT (10+5) as add

SELECT COUNT(*) AS records FROM users

CREATE DATABASE IF NOT EXIST db;

SHOW DATABASES;

DROP DATABASE IF EXISTS db;

USE testDb;
... operations

USE stagingDb;

CREATE TABLE tableNme(
    name VARCHAR(50) NOT NULL
    age INT
    status VARCHAR(10)
    PRIMARY KEY (id)
)

DESC tableName;

DROP table tableName;

INSERT INTO tableName(
    col1, col2, col3,... coln,
    VALUES (val1, val2, ... valn);
)
INSERT INTO tableName[columnList]
SELECT (col1, col2, ...coln)
FROM anotherTable
[WHERE condition]

SELECT col1, col2, ...coln (*)
FROM tableName
WHERE condition

UPDATE tableName
SET col1=value1, col2=value2, ...coln=valuen
[WHERE condition]

DELETE FROM tableName
[WHERE condition]

*********************************************

LIKE:
%searchTerm% - Matches any string that contains searchTerm.
REGEX:
/pattern/i - Matches the pattern with case insensitivity.

*********************************************

(in postgress)
TOP and LIMIT:
SELECT TOP 3 * from users

SELECT * FROM users
LIMIT 15, 15

*********************************************

ORDERBY GROUPBY
SELECT col1, col2...
FROM tableName
[WHERE condition]
ORDERBY col1, col2 [ASC | DESC]

GROUP BY col1, col2

*********************************************

JOINS (unite tables):

- INNER JOIN - only returns records where there is a match in both tables

SELECT columns
FROM tableA
INNER JOIN tableB
ON A.key = B.key


- LEFT OUTER JOIN - return all records from the left table, and the matched records from the right table

SELECT columns
FROM tableA
LEFT JOIN tableB
ON A.key = B.key

(optional to left behing colums of B)
WHERE B.key IS NULL 


- RIGHT OUTER JOIN - return all records from the right table, and the matched records from the left table

SELECT colums
FROM tableA
RIGHT JOIN tableB
ON A.key = B.key

(optional to left behing colums of A)
WHERE A.key IS NULL 


- FULL OUTER JOIN - return all records when there is a match in either of the two tables

SELECT columns
FROM tableA
FULL OUTER JOIN tableB
ON A.key = B.key

(optional to left behing colums of A or B)
WHERE A.key IS NULL OR B.key IS NULL


- CROSS JOIN - create new rows for each combination of values found between the two tables

SELECT colums
FROM tableA
CROSS JOIN tableB

*/