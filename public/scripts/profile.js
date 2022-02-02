const getData = async () => {
    const data = await apiFetch('http://localhost:7500/interwoven');
    displayAllData(data);
};

function displayAllData(data) {
    displayFirstName(data.firstName);
    displayLastName(data.lastName);
    displayEmail(data.userEmail);
}

//decide what profile page to display to a user

//check if a user has a level 1 or level 3 access.
//get the user level from the database
//if they have level 1, show them the standard profile page
//if they have a level 3, show them the admin page

//populate the information on each page with the information of the client