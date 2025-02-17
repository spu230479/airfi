function dwnSubmit(method) {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Origin", "GET, POST, DELETE, OPTIONS");

console.log(method);
//const raw = JSON.stringify({
//"Email": "demouser1",
//"password": "password",
//});

const requestOptions = {
method: "POST",
headers: myHeaders,
mode: 'no-cors'
//body: raw
};

email = document.querySelector('input[id="username"]').value;
password = document.querySelector('input[id="password"]').value;
localStorage.setItem("username", email);
//email = "test@test.com";
//password = "password";
urlStr = "method=account_login_success&Email=" + email + "&Password=" + password;

//const response = await fetch("https://airfi.tech/casino/service?" + urlStr, requestOptions);    
//console.log(response);


const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       console.log(xhttp.responseText);
       window.location.replace('https://airfi.tech/finances-master/home.html');
    }
};
xhttp.open("POST", "https://airfi.tech/finances-master/submit?" + urlStr, false);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.send();

}
