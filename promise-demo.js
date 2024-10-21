const condition = true;

const dataWindow = document.querySelector("#data-window");

let myValue = "old value";
// starting State: Pending
// Promise arg: "executor"
// resolve and reject: pre-built methods
const myPromise = new Promise((resolve, reject) => {
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

myPromise.then(function(result) {
    dataWindow.textContent = result;
    console.log(myValue);
});

const helloButton = document.querySelector("#hello-button");

helloButton.addEventListener("click", () => {
    alert("HELLOOOO");
});

console.log(myPromise);