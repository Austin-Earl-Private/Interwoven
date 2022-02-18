//Search by country, conflict, or social issue

//access the data being sent by the backend
//receive the search term from the form on submit
//match the search term to the data from the backend
//populate the page using the data from the backend after it is sorted by the search term
//if there aren't any search results, tell the client that and go back to the search page or offer other suggestions.

// prevent default form submission
import searchResults from '../constants.js'

function search() {

    let country = document.getElementById("country").value;
    let searchURL = `http://localhost:8080/search?country=${country}`;
    fetch(searchURL)
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            console.log(body);
            searchResults = body;
        });

    window.location.href = '../views/results.html';
    // Now we just do a fetch call with query parameters or change it to post or... yeah
}


