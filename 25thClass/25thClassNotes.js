/* 

Relational Databases =

Normalization definition:
In database design, normalization is the process of decomposing tables to eliminate data redundancy and improve data integrity. 
Normalization has levels, the highest, the more normalized.

Levels of normalization:

    0 Unnormal Form (Zero Normal Form):
    - No tables or fields are repeated in any other table or field
    - Data shouldn't have indexes
    - Columns should be named
    - Shouldn't be ordered (only if we make a selection we can order it somehow)

    1 First Normal Form:
    - Each table should have a primary key (unique identifier for each record)
    - No repeating groups in columns
    - Eliminate duplicate data across tables by using foreign keys to link them together
    - In cells: atomic values (no complex data)
    - In column: data of one type
    - No arrays or lists

    2 Second Normal Form:
    - All non-key attributes are fully dependent on the primary key and not transitively dependent on another non-primary attribute
    - Table should have a key
    - Non-key columns should depend on a whole key

    3 Third Normal Form:
    - Non transit dependency: a non-transit dependency is when there's no relationship between two attributes that aren’t part of their own key

    4 Boyce-Codd Normal Form(BCNF):
    - key-columns of complex key must not depend on non-key columns

    5 Fourth Normal Form:
    - All nonkey attributes are fully functionally dependent on the primary key

    6 Fifth Normal Form:
    - A relation is in 5NF if it is in BCNF and there are no transitive dependencies.
    Transitive dependency occurs when X depends on Y which itself depends on Z.

    7 0k Normal Form:
    - The number of relations needed to express all information about the subject area without duplication or loss of information.

    8 Sixth Normal Form:
    - The only relationships between tables are through the primary key/foreign key relationship.

*/