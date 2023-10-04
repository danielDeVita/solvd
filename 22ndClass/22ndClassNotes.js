/* 

Express and Authorization = 

Error Handling (it's a middleware with 4 parameters):

function(error,req,res,next){
    if(error instanceOf ValidationError){
        ...doSomething
    }
    if(error instanceOf TypeError){
        ...doOtherThing
    }
}

////////////////////////////////


create Application(){
    const app = function(req,res,next){
        app.handle(req,res,next)
    }
    mixin(app,proto,false) 
    // the function mixing takes the prototype of the app and sets possible methods
    return app
}


app.get
methods
methods.forEach(method=>{
    app[method] = function(path){
     const route = this.router.routePath
     route[method].apply(route,
        Array.prototype.slice.call(arguments,1))   
    } return this
})



_router.route = function(path){
    const route = new Route(path)
    const layer = new Layer(path,options,route.dispatch.bind(route))
    layer.route = route
    this.stack.push(layer)
    return route;
}



app.handle = function(req,res,cbs){
    const router = this._router
    router.handle(req,res,cbs)
}


router.handle = function(req,res,cbs){
    let layer
    let match
    let route
}
while(watch!=true && idx < stack.length){
    layer = stack[idx]
    match = match(layer,path)
    if(match != true){
        continue
    }
}



******************************************************************
******************************************************************
******************************************************************



AUTHENTICATION =

OAuth 2.0, JWT Token, Basic

0auth =

auth token:
-when a client logs in into the app, we send client a token
-tokens have expiration date (hackers will only be able to use it for a certain time
    
acces_token (can be used many times, short life)
refresh_token (use to update access_token, can last for up a month, use only ONCE, it will get refreshed after used)

///////////////////


JWT =
-is a string with a header,payload.signature
-client logs in to server with password/mail/username, and gets a JWT returned

header = {
    algorithm: HS256,
    type: JWT
}
payload = {
    userId: 1
}

*/