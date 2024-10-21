function simulatedAsync() {
    return new Promise(resolve => {
        // promise callback function immediately starts to run when the promise is initialized
        console.log("Started Promise");

        setTimeout(() => {
            // promise is resolved when the "resolve" function is invoked
            // "resolve" argument can be assigned to awaited value
            resolve("data fetched");
        }, 3000);
    });
}

async function demoAsyncCall() {
    console.log("Starting async operation");

    // assign the new promise, which will immediately invoke its own callback
    const newPromise = simulatedAsync();
    
    // pauses the function until the "awaited" promise if resolved
    // assigns resolved value to "result"
    const result = await newPromise;
    console.log(result);
}

// function call will pause when it hits an "await"
demoAsyncCall();

// paused function does not pause top-level execution; this will print before the demoAsynCall() finishes running
console.log("top-level log");