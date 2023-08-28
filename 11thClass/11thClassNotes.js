/* 

Event Loop:
- Event loop is a single thread that runs all the code.
- It waits for events to occur and executes callback functions associated with those events when they happen,
- The event loop can be thought of as an infinite while loop where it checks if there are any pending callbacks or not every 10ms
- The event loop will continue running until there are no more callbacks left in the queue or you tell it otherwise (e.g., by calling process
    and then goes back into waiting mode until another event occurs again or there are no more callbacks left in queue.
    - The event loop can be thought of as an interpreter or virtual machine running in Node.js.
    - There are two types of callbacks:
    - Asynchronous Callbacks (Callbacks which will not block other operations)
    - Synchronous Callbacks(Callbacks which blocks other operation)


Non-Blocking IO:
- Non blocking I/O means that we do not wait on any particular resource like file system, network etc., before moving forward.
- Non blocking I/O means that we do not wait on any particular call to complete before moving onto another task.
- Non blocking I/O means that we do not wait until data has been read from disk before processing it. Instead,
- Non blocking I/O means that if there's no data ready to read from disk,
the call returns immediately without waiting on it.
- This allows us to handle multiple requests at once instead of having one request wait until another has finished processing before being able to process its own response.


Sync Event demultiplexer:
- This function takes care of reading input from stdin and writing output to stdout.
- When we run node program.js, this function gets called first before any other code.
- We use process object to access these methods.

Demultiplexer:
- A function that reads inputs from multiple sources and writes outputs to multiple destinations.


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


The event Loop takes an event from the event queue, sends it to the application and the application sends it
to the event demultiplexer????????????????????


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


    source code
      node API
nodeJS binding - addOns
V8 - libun - DNS - helpers
    operating system

(event loop is in libun)


//////////////////////////////////////////


loop alive? =
            no (end)
            yes:
                timers (setTimeOut, setInterval)
                pending cb (system operations)
                iddle, prepare (we don't have acces to them)
                poll (IO operation, handlers of IO)
                check (cb from timers?????)
                close (cb, event close, or socket close)


this two things run everytime before timers, pendingCB, idle, poll, check, etc...
-next tick queue
-other microtasks

only if it finish every task in timers it will move to pending CB and so on...



EXAMPLE= (https://imgbb.com/gD472nN)


CONSOLE             timer (B) (L) (G)
(START)             pend CB
(promise)           iddle, prepare
(async/await)       poll (F)
(end)               check (C) (H)
(promise next tick) close cb
(next tick)         next tick (E) (K) (I)
(set Timeout)       micro tasks
(set Timeout)
(set inmediate)
(read file)
(read file next tick)

*/