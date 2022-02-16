function signUp() {
    
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const localStorage = window.localStorage;

    fetch('http://localhost:8080/auth/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('isMod', data.isMod);
            window.location.href = 'http://localhost:8080/views/profile.html';
        });
    return false;
}
