function onlogin() {
    // e.preventDefault();
    // const form = document.querySelector('#login');
    // const inputs = form.elements;
    // const email = inputs['email'];
    // const password = inputs['password'];
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
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('isMod', data.isMod);
            localStorage.setItem('userId', data.userId);
            window.location.href = 'http://localhost:8080/views/profile.html';
        });
    return false;
}
