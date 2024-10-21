function simulatedAsync() {
    return new Promise(resolve => {
        console.log("Started Promise");

        setTimeout(() => {
            resolve("data fetched");
        }, 3000);
    });
}

async function demoAsyncCall() {
    console.log("Starting async operation");
    const newPromise = simulatedAsync();
    
    // pauses the function until the "awaited" promise if resolved
    // assigns resolved value to "result"
    const result = await newPromise;
    console.log(result);
}

demoAsyncCall();
console.log("top-level log");