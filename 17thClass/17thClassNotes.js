/* 

HTTP METHODS =

-OPTIONS:
Returns allowed methods on the endpoint
-GET:
Get data from an endpoint
-HEAD:
Same as GET but without body response (headers and metadata)
-POST:
Create a new resource or update existing one
-PUT:
Update/replace all fields of a given resource. If it doesn't exist, create it instead
-PATCH:
Update only some specific attributes in a given resource
-DELETE:
Delete a single item by id
-TRACE:
Used to test connectivity between client & server
-CONNECT:
Establish tunnels through proxies

-SAFE:
Used for read operations that don’t change any state on the server side
(GET, HEAD, OPTIONS)
-IDEMPOTENT:
Can be used multiple times with same result
(GET, HEAD, PUT, DELETE, OPTIONS, TRACE)
-NON-IDEMPOTENT:
Cannot be repeated if not intended
(POST, PATCH)

************************************************

REQUEST HEADERS:

1)Host:
The host name + port number where your API is hosted e.g http://localhost:8000

2)User-agent:
Name of application making request - can include version #
e.g Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36

3)Refer:
URL of page being linked to this site

4)Acept:
MIME type of content you want returned back

5)Cookie:
Stores info about user's session ("key:value") =>string

6)Authorization:
Basic auth credentials sent via header (like a token)

************************************************

RESPONSE:

1xx - Info
2xx - Success
3xx - Redirection
4xx - Client Error
5xx - Server error

RESPONSE HEADERS:

a)Server:
Identifies which webserver software and its version was used by 
the origin server to handle the request

b)Set-cookie:
Creates cookie in browser (ie: Set.Cookie:IS-PREMIUM=true)

c)www-Authenticate:
Used for HTTP authentication (e.g Basic Auth)


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


RegExp = 

RegExp is a class but also a literal

literal:
const re = /abc/; (slash to start and end regex)

constructor class:
const re1 = new RegExp("abc")

They both show the same pattern

METODS:

/abc/.test("abcde") => true
/abc/.test("abdef") => false

"abc".indexOf("abc") => ???

SYNTAX:

/[0123456789]/ => means any digit symbol

/[0-9]/ (same as above)

\d = meas any digit
\w = means alphabetical symbol like [a-z A-Z]
\s = means space symbol (also tabulation, enter, and so on)
\D = means NOT digit
\W = means NOT alphabetical
\S = means NOT space
.- = any symbol but

[\d.] = ???

/[^01]/ = any symbol BUT 0 and 1
/[^01]/.test("10110") => false (checks binary)
/[^01]/.test("10211") => true (checks binary)

COUNTERS:

+ (means symbol can be repeated from [1,infinity])
\d+ = accept one or more digits (not 0)

* (means from [0, infinity])
\d* = accept from 0 digits forward

? (means from [0,1])... it will only be 1 symbol, not 2 o 0

{4} (means exact numner [4,4])
accepts a range like {2,4}
{ ,5} => means from 0 to 5
{5, } => means from 5 to infinity

GROUP OF EXPRESSIONS:

/abc/g (means looking not only for first substring, but all substring)

/abc/gi (means it is not case sensitive)

/boo+(hoo+)+/i => means you have a group starting with 'h" and as many
"o" as needed, preceded by "boo" or "Boo"
ie: Boo hoo hoooo hooooo

*/