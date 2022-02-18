const { status } = require("express/lib/response");

function onlogin() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const localStorage = window.localStorage;

    fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    // .then((response) => {
    //     console.log(response.status);
    // })
        .then((response) => response.json())        
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('isMod', data.isMod);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('isLoggedin', true);
            window.location.href = 'http://localhost:8080/views/profile.html';
        });
    return false;
}
