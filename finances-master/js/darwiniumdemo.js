function dwnSubmit() {
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Origin", "GET, POST, DELETE, OPTIONS");

//const raw = JSON.stringify({
//"Email": "demouser1",
//"password": "password",
//});

const requestOptions = {
method: "POST",
headers: myHeaders,
mode: 'no-cors',
body: raw
};

//email = document.querySelector('input[name="Email"]').value;
//password = document.querySelector('input[name="Password"]').value;
email = "test@test.com";
password = "password";
urlStr = "method=account_login_success&Email=" + email + "&Password=" + password;

//const response = await fetch("https://airfi.tech/casino/service?" + urlStr, requestOptions);    
//console.log(response);


const xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://airfi.tech/finances-master/submit?" + urlStr, false);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.send();
}
