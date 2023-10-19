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

*/