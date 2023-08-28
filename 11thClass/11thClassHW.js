class AsyncOperationManager {
    simulateAsyncOperation(delay) {
        setTimeout(() => {
            console.log(`Async operation completed after ${delay} ms`);
        }, delay);
    }

    scheduleImmediate() {
        setImmediate(() => {
            console.log("Immediate task executed");
        });
    }

    // Implement process.nextTick scheduling and event loop interactions
}

const manager = new AsyncOperationManager();
manager.simulateAsyncOperation(200);
process.nextTick(() => {
    console.log("Microtask executed immediately");
});
manager.scheduleImmediate();
