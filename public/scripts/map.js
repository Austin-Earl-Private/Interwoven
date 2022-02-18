

import ids from "../countries.js";

document.addEventListener('click', doThing);
let searchResults = {}

function doThing(event) {

    let id;
    if (event.srcElement.id == "" && event.srcElement.parentElement !== null) {
        //if no id, go to parent element and get that id
        id = event.srcElement.parentElement.id;
    }
    else {
        id = event.srcElement.id
    }

    ids.find((currentId) => {
        if (currentId.countryId == id && id !== null) {
            let searchURL = `http://localhost:8080/search?country=${id}`;
            fetch(searchURL)
                .then((res) => {
                    return res.json();
                })
                .then((body) => {
                    console.log(body)
                    searchResults = body

                }).then(() => { window.location.href = '../views/results.html'; });
            // Now we just do a fetch call with query parameters or change it to post or... yeah
        }
    });
}
if (document.getElementById('searchButton')) {
    document.getElementById('searchButton').addEventListener('click', search);
}


function search() {
    let country = document.getElementById("country").value;
    let searchURL = `http://localhost:8080/search?country=${country}`;
    fetch(searchURL)
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            searchResults = body
        }).then(() => { window.location.href = '../views/results.html'; });
    console.log(searchResults)
    // Now we just do a fetch call with query parameters or change it to post or... yeah
}

