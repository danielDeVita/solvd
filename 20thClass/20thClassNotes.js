/* 

Event driven programing:
- The main thread is blocked until an event occurs.
- When the event happens, a callback function (or lambda) is called to handle it.
- This way of programming allows for more flexibility and control over your code.

Usually mixed with functional programming or object-oriented programming (only for
some microservices projects it's 100% event driven programming)


event:
- An instance of EventEmitter class
- Contains all information about what happened

system event:
- System level events like server start/stop etc...
- These are emitted by Node itself
- We don't have acces to them

custom event:
- Custom events we create ourselves (user Events)


Event Emmiter:
- A class that emits events when something interesting happens in our application 
- It can be used as a communication channel between different parts of our app

Event Handlers: (subscribers)
- Functions that listen on specific events

Event Listener:
- Function that listens on some kind of event
- In NodeJS it's similar to Event Handlers (not so much in other languages)


One event han have many handlers
One handler can be used several times

class MyEventEmitter{
    events = {
        close:[function1, function2... functionN],
        open:[function1, function2... functionN]
    }
}


Methods=

.on(eventName, listener)=>subscribe to an event
.once(eventName, listener) => subscribes to an event, but acts only one time
.removeListener(eventName, listener) => removes listener from the list
removeAllListeners(eventName) => ...
emit(eventName, ...args) => ...


******************************************
******************************************
******************************************


STREAMS

Streams=
- Streams allow us to read data and write data asynchronously
- They're useful for reading files or network connections
- Their main purpose is to make code more readable and easier to maintain
- There are two types of streams
- Readable Stream - allows you to get data out of stream
- Writable Stream - allows you to send data into stream

Readable Strem:
- Allows us to read data from source
- We use .pipe(Writable) method to pipe output from one stream to another
- Readable.pip(Transform).pipe(Writable)
- Has 3 states:
    a) flowing: data is passing through the stream. 
    it will be true when reading or writen .pipe(), .write()
    b) paused: data is not passing through stream, but is ready to do it. 
    will be true when we do .unpipe() => disconnect sender and reciever of data OR .pause()
    c) null: when stream is created, once it is finished it will be flowing or paused

Writable Stream:
- Allows us to write data to destination
- We use .write(), .end() methods to work with writable streams

Duplex Stream:
- Has ability to read AND write simultaneously
- Extends EventEmitter class that emits 'data' when new chunk comes available
- Also emits error if something goes wrong during writing process

Transform Stream: (subtype of Duplex)
- Is both type of stream
- Can transform data before sending them through
- It has 3 states: paused/flowing/paused
- Flowing state means we can receive data from input stream and put it into output stream
- Paused state means there isn't any incoming data yet
- TransformStream extends Duplex class which inherits from Readable & Writeable classes


-Buffering: (Buffering in Nodejs works like this)
1. When a user calls fs.readFile('file', callback), node starts executing its own internal function called readFileAsync(). This function takes care of
1. Data arrives at a buffer
2. If buffer gets full then node will start flushing its content onto disk using fs module
3. When all data is flushed on disk, then it starts filling up again until it's empty
4. This continues till no more data is coming
5. Once buffer becomes empty, it automatically refills itself by getting data from file system
6. After the last piece of data is written to buffer, it notifies user about end event
7. User writes some more data but since buffer is already filled, it doesn't accept anything else
8. So now user needs to wait untill first batch of data is completely processed
9. Then he can continue working with other parts of his application

new Stream({objectMode:true/false,
            highWaterMark:integer})

objectMode (is data a javaScript (true) object or a set of bytes (false)?)
highWaterMark (size of Buffer)


TASKS A STREAM SOLVES:
-save/read files
-save/read DBs
-zip/unzip
-encrypting
-transfer data by the Network

*/