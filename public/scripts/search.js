//Search by country, conflict, or social issue

//access the data being sent by the backend
//receive the search term from the form on submit
//match the search term to the data from the backend
//populate the page using the data from the backend after it is sorted by the search term
//if there aren't any search results, tell the client that and go back to the search page or offer other suggestions.

// prevent default form submission

const searchResults = fetch().then((res) => {
    res.json()
    .then((result) => {
        let stories = document.getElementsByClassName("searchResults")[0];

        for (const element in result) {
            if (Object.hasOwnProperty.call(result, element)) {
                const story = result[element];
                
                let myDiv = document.createElement("div");
                myDiv.style.padding = "20px";
                myDiv.innerHTML = story.body;

                // title
                // img
                // tags
                // 

                stories.appendChild(myDiv);
            }
        }
    });
});