/* 

////////////////////////////////////////////////////////////////////////
                            DATABASES
////////////////////////////////////////////////////////////////////////

RELATIONAL DATABASES:

- A database that uses relations among tables.
- Tables are related to each other through a set of relationships called foreign keys.
- The primary key is the unique identifier for rows in a table, and it's used as an index into the data structure.

    Row-directional:
    - The direction in which the rows flow is from one table (parent) to another (child).
    - Parents have many children, but children only belong to 1 parent at any given time.
    - This type of relationship can be represented by an arrow pointing downwards or upwards between two tables.
    Column-Directional:
    - In this case there's no direct connection between the columns and they're not directly connected with each other; instead we use primary key values as references
    - Each child record has exactly one value(s) in a column that points back to its corresponding parent record(s) in another table.
    - We also call it "one-to-many" because there will always be more than on row with the same value in column B as compared
    - We also call it as "one-to-many" and "many-to-one".

////////////////////////////////////////////////////////////////////////

KEY-VALUE DATABASES:

- Stores data using key/value pairs where both the key & value are strings.
- No fixed schema; values may vary greatly depending on their associated keys.
- Keys must always be unique within a single collection.
- Values do not need to be stored in order.
- Key-Value databases are ideal for storing dynamic content such as user profiles, settings etc...

////////////////////////////////////////////////////////////////////////

DOCUMENT-ORIENTED DATABASE:

- Data is modeled around documents rather than tables or columns.
- Useful when you want more flexibility with your data structure.
- Documents can contain anything from simple data types like integers, strings, arrays to complex nested structures.
- Good choice if we deal with semi structured data like JSON type data.
- Document store databases use a different approach entirely. They don’t try to model everything into a relational database. Instead they rely on document stores

////////////////////////////////////////////////////////////////////////

TIME-SERIES DATABASE:

- Used for recording events over time.
- It's used to store metrics about how something changes overtime.
- Metrics can include CPU usage, memory consumption, network traffic etc..
- Time series databases usually use columnar storage so they're optimized for fast reads and writes.

////////////////////////////////////////////////////////////////////////

GRAPH DATABASE:

- These databases are designed to work efficiently with complex interdependencies.
- They allow data to be stored as nodes and edges.
- Nodes represent entities while Edges connect them together.
- Graph databases are useful in scenarios dealing with social networks, web pages links, computer networks routing protocols etc...

////////////////////////////////////////////////////////////////////////

SEARCH ENGINE DATABASE:

- A database that allows us to search through large amounts of unstructured textual information quickly.
- Search engine databases typically contain full texts of documents, which are searched when answering queries.

////////////////////////////////////////////////////////////////////////

OBJECT-ORIENTED DATABASE:

- Object oriented databases (OODBs) model data by objects instead of rows and columns.
- Each object has its own type and identity.
- Objects have attributes which hold data related to it.
- Attributes also contain metadata describing what kind of data each attribute contains.
- OODBs provide methods for creating new instances of an object class, retrieving existing ones, updating them, deleting them from the database,

////////////////////////////////////////////////////////////////////////

RDF DATABASE:

- RDF stands for Resource Description Framework.
- An OODB that stores data in the form of triples.
- Each triple consists of a subject, predicate and an object.

////////////////////////////////////////////////////////////////////////

WIDE COLUMN STORES:

- Handles very large amount of data across many different applications.
- Use case is when you need to handle big data from multiple sources.
- Wide Column Stores are good at storing sparse datasets like logs or clickstream data where most values are empty/null.
- Wide Column Stores like HBase or Cassandra uses key value pairs where keys are grouped into buckets based on their hash values.

////////////////////////////////////////////////////////////////////////

GEO/GIS DATABASE:

- Stores data needed for geographic analysis and mapping applications.

////////////////////////////////////////////////////////////////////////

EVENT BASE DATABASE:

- Database used to store event streams or logs.

////////////////////////////////////////////////////////////////////////

CONTENT DATABASE:

- Used to index content such as web pages, books etc..

////////////////////////////////////////////////////////////////////////

NAVIGATIONAL DATABASE:

- A database designed specifically for storing navigation information like GPS coordinates, street addresses, phone numbers etc...
- Contains information about paths taken by users within an application.
- More similar to Graph than to GEO-GIS

////////////////////////////////////////////////////////////////////////

VECTOR DATABASE:

- A vector database (VDB) uses two dimensional coordinates to represent locations on earth's surface.
- VDBs are often used with GPS devices which can be tracked using satellites.



                    ************************************************************************
                    ************************************************************************
                    ************************************************************************
                    ************************************************************************



////////////////////////////////////////////////////////////////////////
                                SQL
////////////////////////////////////////////////////////////////////////

SQL:
- Structured Query Language - a language designed specifically for managing data held in relational databases.

SQL Table:
A table in SQL refers to a 2D grid of data where each row represents a record and each column represents a field.

SQL RELATIONS:

    ONE TO ONE:
    One record in one table is linked to a single other record of another table via the primary key column(s). 
    This relationship has only one value per record pair; it cannot have multiple values between records because each row must
    contain exactly one foreign key reference that points back into its own table.

    ONE TO MANY:
    One record from one table links to multiple records in another table. The secondary table’s primary key forms part of the 
    foreign key constraint in the first table and contains references to all rows in the second table where this value occurs.

    MANY TO MANY:
    Many records in one table relate to many records in another table and vice versa. Both tables have foreign keys pointing at each others’ primary key columns

*/