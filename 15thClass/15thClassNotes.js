/* 

Hash Table = 
-Storage where we have a key and its corresponding collection
-It's like a map, but instead of values we have a collection of values
-With a hash function you can calculate a value to its hash, but not the hash to its value
-Hash Table Collisions:
    When two keys are hashed into same index in array we need some way 
    to handle this collision (separate chaining), 
    If there is no space left for another node then resize!


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


Rest Architecture =
-REST stands for REpresentational State Transfer.
-The idea behind REST architecture is that it provides an interface between client application and server applications.
-The idea behind REST architecture is that it should be stateless so each request from client has all information needed to process itself without any other external data

Format of data presentation in REST: plain text, JSON, XML, Binary
Protocol: HTTP
Transport: example = JSON over HTTP
           example = XML MDQ (??)

HTTP:
-Hypertext transfer protocol
-It shows in the URL
-Has:   
    schema (usually HTTP or FTP sometimes)
    host (www.our.api)
    path to resource (/student/123)

HTTP verbs:
    GET - get information from server
    POST - send new info to server
    PUT - update existing info on server (as a whole)
    DELETE - delete an item from server
    PATCH - partial update of resources
    OPTIONS - show what methods are available at that endpoint
    HEAD - similar as GET only it doesn't return body with response
    TRACE - used for debugging
    etc...


REST = REpresentational State Transfer
(It is a style of architecture, with some rules)

*******************************************

Rules and principles:
1) Client/Server architecture
2) Stateless: 

    Advantages=
              1) no information from the request is stored
              2) it is scalable
              3) time saving (it doesn't store any data)
              4) easy to mantain
              5) Caching

    Disadvantages=
              1) makes client more complex (because server doesn't store data)
              2) network issues (we send more data, we process more data)
              3 Caching (??)

3) Caching:
Storing data locally so when you need it again instead
of sending another request to the server, you can just use local copy
and not have to wait for the next one. It's faster because there will be less requests sent out.

4) Hypermedia as Engine of application state: (HATEOAS)
The idea behind this is that your API should give you all the necessary links
to navigate through different states of your app. This way if you want to change something
in your app, you don’t have to make changes in multiple places but rather just change
the link which points to wherever needs changing!

5) Layered System:
This means that each layer has its own responsibility. For example,
your presentation logic shouldn’t know anything about how the database works internally;
you would keep them separate. The same goes for business logic and persistence layers.

6) Code on done:
Send part of the code if we need to.

*******************************************

Mistakes =
    a)REST principles are optional (wrong! they are mandatory)
    b)REST is a protocol of data transfer (wrong! its just architecture)
    c)REST is always HTTP (wrong! could be FTP also)
    d)REST is always JSON (wrong! could use XML)

*******************************************

We don't always follow those principles, that is why we have levels of REST.

level 3: HATEOAS (ie: Hypermedia as Engine of application state)
level 2: verb logic and code on done
level 1: we use different paths (ie: /:id changes )
level 0: we use some protocol and a format of data (ie: JSON and GET, no HARD logic)

*/