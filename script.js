// use a RESTful API to get data remotely
// REST - REprestational State Transfer
// primary services for sending data
// HTTP request to service for data
// service responds with JSON (JavaScript Object Notation)

// Older service: SOAP (Simple Object Access Protocol) 

// script for getting remote data over a RESTful API
// Fetch API (Application Programmer Interface)
// we use Fetch as a means of gathering data from a RESTful API (usually)

// get all of the names and populations of countries in REST countries and list them in a UL in our page

// make request to the API
const allCountriesEndpoint = "https://restcountries.com/v3.1/all";

async function makeRequest(resourcePath) {
    // we should always have error handling around external requests
    try {
        // fetch sends an HTTP GET request to a given URL and returns the response
        // works asynchronously
        const response = await fetch(resourcePath);

        // HTTP response in 200-299 code range are "ok"
        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }

        // if response is good, we use the JSON method to parse the response body
        return response.json();
    } catch(error) {
        // this path will run if an error is encountered in the "try" block
        console.error(`Failed to fetch: ${error.message}`)
    }
}

async function listCountries() {
    // get ul
    const dataListNode = document.querySelector("#data-list");

    // request at the endpoint and wait for returned json
    const countries = await makeRequest(allCountriesEndpoint);

    // console.log(countries);
    // object destructuring
    countries.forEach(country => {
        // assigns the value of country.population to a new variable of the same name as that key
        // same as accessing country["population"]
        // nested destructuring allows access to objects within objects
        let {
            name: {official},
            population
        } = country;

        // access via bracket notation
        // let officialName = country["name"]["official"];
        const newLiNode = document.createElement("li");
        newLiNode.textContent = `${official}, population: ${population}`;

        dataListNode.appendChild(newLiNode);
    });
}

listCountries();