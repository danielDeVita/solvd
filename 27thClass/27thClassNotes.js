/* 

SQL QUERIES =

-DISTINCT:
The DISTINCT keyword is used in SQL queries to return only distinct (unique) values.
It eliminates all duplicate records from the result set.

SELECT DISTINCT column_name FROM table_name;

-UNION:
The UNION operator combines the result sets of two or more SELECT statements.
Each SELECT statement within the parentheses must have the same number of columns,
the column data types must be compatible, also same order of columns.

SELECT column1, column2...columnN FROM table1

-ALIASES:
Aliases are alternative names given to database objects such as tables and columns.
They make it easier for you to refer to these objects using shorter names.

SELECT col1, ...colN FROM table_name AS alias_name

-INDEXES:
Indexes are a type of database structure that improves query performance by allowing faster access to the required rows in a database table.

CREATE INDEX indexName ON
tablename (colName)

-ALTER:
Altering a table means modifying its structure without deleting any existing data.
You can add new columns, change the datatype of an existing column, rename a column, delete a column etc.

ALTER TABLE tablename ADD COLUMN newColumnName datatypename;

-MODIFY:
Modify changes the definition of a specified column in a table.
For example, changing the length of a VARCHAR type column.

MODIFY COLUMN column_name SET DEFAULT value;

-CONSTRAIN:
Constraints are rules that limit what data can go into your table.
There are several different kinds of constraints available including NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK.

    -CHECK:
    A CHECK constraint specifies a condition that must apply to every row in a table.

    -DROP:
    The DROP CONSTRAINT command removes constraints from a table.

-DROP:
The DROP statement deletes rows from a table based on certain conditions.

DROP TABLE table_name;

-TRUNCATE:
Truncate is used when we want to remove all records from a particular table but keep the structure intact.
This operation cannot be rolled back.

TRUNCATE TABLE table_name;

-TRANSACTIONS:
Transactions ensure that multiple SQL statements are processed together as one unit.
If there's an error with any part of this unit, none of the parts will be committed to the database.

    -STANDARDS:

    a)atomicity:
    Transactions should occur atomically, meaning they either completely succeed or fail.
    b)consistency:
    Before and after transaction execution, the data remains consistent.
    c)isolation:
    Multiple users accessing and updating different parts of the same data simultaneously do not interfere with each other.
    d)durability:
    Once a transaction has been completed, it should remain so until explicitly deleted.
    
    -BEGIN TRANSACTION:
    This starts a new transaction.
    -COMMIT:
    Commits the current transaction. All modifications made during this transaction become permanent.
    -ROLLBACK:
    Rollback discards changes made during the current transaction.
    -SAVEPOINT:
    Savepoints allow you to save the state of a transaction at various points during its lifecycle.

-PROCEDURE:
A stored procedure (or simply a procedure) is a reusable block of code written for performing a specific task.
Procedures encapsulate reusable logic that performs specific tasks within stored procedures.
They provide a way for developers to reuse code across different applications without having to rewrite the same functionality each time.

CREATE PROCEDURE procedureName(param1 datatype, param2 datatype)
AS
BEGIN
--SQL code here
END;
EXEC procedureName 'value', 'another value';

********************************************************
********************************************************
********************************************************

MONGODB =

NoSQL Database
Document Store (key-value pairs)
Schema-less
Scales horizontally
Performance is faster than traditional relational databases

1)Data Storage, BSON:
MongoDB uses BSON format for storing documents in collections. It supports dynamic schema.
2)Memory managment:
MongoDB stores all data on disk. Data is not kept in memory unless needed. 
MongoDB can store large amounts of data efficiently.
3)Indexes:
MongoDB does not use indexes like SQL database. Instead, MongoDB uses an index called as "index view".
4)Horizontal Scaling:
MongoDB scales horizontally by adding more servers to increase capacity. Sharding allows horizontal scaling of data across multiple machines.
5)Replication:
No complex connections allow MongoDB to copy documents easily
6)Query execution definition:
It doesn't have joins, so you can get information easily if it coms from one collection only

MONGO COMMANDS =

use mydb:
Creates or selects a database named mydb. If no name is specified, then the command creates and selects the admin database by default.

db.createCollection("users"):
Creates new collection named "users".

db.users.insertOne({
    name: "Anna",
    age:30
})

db.users.insertMany({
        {name:"John",age:32},
        {name:"Anna",age:23}
})

db.users.updateOne(
    {name:"John"},
    {$set:{age:32}}
)

db.users.updateMany(
    {age:{$gte:30}},
    {$inc:{age:1}}
)

.deleteOne
.deleteMany

.createIndex

.agregate

.count({age:{$gte:30}})

.distinc

.findAndModify

.findOneAndDelete

.replaceOne

//////////////////////////////////////////////////

Advantages =
1-flexible data modeling
2-scalability
3-performance
4-developer-friendly

Disadvantages=
1-limited transactionn support
2-bad analytics
3-no support joins
4-memory and storage requirement

//////////////////////////////////////////////////

mongoose creation of schema (=~ to table/model)

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('users',userSchema)

MIDDLEWARE FOR MONGOOSE SCHEMAS = 

user.create({})
find, init, validate, save, remove, update

[encripts password before saving]

userSchema.pre('save', function(next){
    this.password = crypt(this.password)
    next()
})

isDeleted

[returns deleted values]

userSchema.pre('find', function(next){
    this.where({isDeleted:false})
    next()
})

count, find, findOne, findOneAndDelete, findOneAndUpdate, update, deleteOne

********************************************************
********************************************************
********************************************************

Graph Databases definition:
A graph database is a type of NoSQL database that stores data in the form of nodes and edges. 
It uses graph theory for its modeling and query capabilities are based on traversal algorithms. 
Graph databases can be used as an alternative to relational databases when dealing with complex relationships between data entities.

Used for social networking, recommendation engines, fraud detection

// OTHER TYPES OF DB'S WHERE LECTURED IN PREVIOUS CLASSES //

*/