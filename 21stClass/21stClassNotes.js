/* 

EXPRESS =

Based on NodeJS and http library 
const http = require("http")
http.createServer().listen(3000)

npm i express
const express = require("express")
const app = express()
.
.
(configuration)
.
.
app.listen(3000)

PORT definition:
- PORT is a number that defines the port where your application will be running, it's an environment variable (process.env).
process.env.PORT || 8080

//////////////////////////////////

middlewares =

app.use((req,res,next)=>{
    //req.(query,param,header,cookies,etc...)
    res.send("ok")
    //res.send(Buffer.from("ok"))
    //res.sendFile("./index.html")
    //res.status(404).send("not found")
})

**********
app.use(express.static("directory"))
that line of code defines a folder where we will store assets that can be accessed publically
ie: localhost:5000/directory/img.png

app.use("static",express.static("d"))
ie: localhost:5000/static/d/img.png
**********

//////////////////////////////////

Routing in express = 

.use method can recieve an array of middlewares .use([...,...,...])
you can also place a route before .use(route,[...,...,...])


Redirection in express =

res.redirect("/home");
status will be 302 by default
also:
res.status(304).redirect("url.com")

//////////////////////////////////

Sendint data = 
Headers
Query
Body
Params

-Query: url.com?name=Alex&age=10
req.query = {name:"Alex",age:"19"}

-Body:
it won't be parsed, need to use app middleware to specify it:
app.use(bodyParser());
req.body = {}

-Params:
req.params: we set it in the url (most generic url to the bottom, most specific to the top)
ie: "/user/:id"
req.params.id = ":id"

//////////////////////////////////


Express Router =

const someRouter = express.Router()
someRouter.get("/",function(){}) //we define routes like this and then mount them on our main server with "app.use()"

*/