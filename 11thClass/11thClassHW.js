class AsyncOperationManager {
    simulateAsyncOperation(delay) {
        // fake async operation using setTimeout
        setTimeout(() => {

            // after the delay this message will log
            console.log(`Async operation completed after ${delay} ms`); // 4th thing to get logged

            // microtask will run right after the current iteration of the simulated event loop, but before the next iteration
            process.nextTick(() => {

                // after the fake/simulated async operation, this will log (after the setTimeout)
                console.log("this message shows after the setTimeout"); // 5th thing to get logged
            });
        }, delay);
    }

    scheduleImmediate() {

        setImmediate(() => {
            // this message shows right after the taks has been executed
            console.log("Immediate task executed"); // 2nd thing to get logged

            // microtask will run right after the current iteration of the simulated event loop
            process.nextTick(() => {

                // after the inmediate task, this will log 
                console.log("this message shows after the setImmediate"); // 3rd thing to get logged
            });
        });
    }
}

const manager = new AsyncOperationManager();
manager.simulateAsyncOperation(200);
process.nextTick(() => {
    // nextTick always happens first in every loop event (before timers, pending CB, etc...)
    console.log("Microtask executed immediately"); // 1st thing to get logged
});
manager.scheduleImmediate();

/* 

EXPLANATION=

Line 37 happens first because nextTick and other microtasks are executed at the begining of the loop.

setImmediate happens before setTimeout finishes execution, so
line 23 gets logged in 2nd place, and inmediatly after that (because of process.nextTick) we log line 29

setTimeout finishes its execution, loggin firstly line 7 and immediatly after it logs line 13

ps: if we pass 2000ms instead of 200ms it is easier to see/check

*/