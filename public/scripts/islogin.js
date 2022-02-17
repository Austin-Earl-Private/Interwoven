function islogin(){
    console.log("in the islogin function");
    const isLog = window.localStorage.getItem("isLoggedin");
    console.log(window.localStorage.getItem("isLoggedin") + "= isLoggedin");
    if(!isLog){
        console.log("not logged in");
        return;
    }
    if(isLog){
        console.log("is true");
        
        //change login to sign out
        const login = document.querySelector("#logIn");
        login.textContent = "Sign Out";
        login.href="http://localhost:8080/views/home.html";        
        login.onclick = clear;

        //change sign up to profile
        const signup = document.querySelector("#signUp");
        signup.textContent = "Profile";
        signup.href="http://localhost:8080/views/profile.html";        
        // login.onclick = clear;
        
    }
}

function clear(){
    console.log("in the clear function");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isMod");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("isLoggedin");
    window.localStorage.clear;
    // window.localStorage.setItem("isLoggedin", null);
    console.log(window.localStorage.getItem("isLoggedin") + "= isLoggedin");
    window.location.href = "http://localhost:8080/views/home.html";
}

islogin();