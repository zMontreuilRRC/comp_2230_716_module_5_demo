const condition = true;

const dataWindow = document.querySelector("#data-window");

let myValue = "old value";
// starting State: Pending
// Promise arg: "executor"
// resolve and reject: pre-built methods
const myPromise = new Promise((resolve, reject) => {
    // promise callback method immediately runs
    console.log("started");

    setTimeout(() => {
        if(condition) {
            // Promise completes (no longer pending) when resolve or reject are invoked
            resolve("Promise is done");
        } else {
            reject("Promise failed");
        }
    }, 6000)
});

// .then method invokes when Promise invokes resolve()
myPromise.then(
    // resolve function
    function(result) {
    // argument of resolve is assigned 
        dataWindow.textContent = result;
        console.log(myValue);
    },
        // reject function
    function(rejection) {
        // only runs if the promise's "reject" method is invoked
    }
);

const helloButton = document.querySelector("#hello-button");

helloButton.addEventListener("click", () => {
    alert("HELLOOOO");
});

console.log(myPromise);