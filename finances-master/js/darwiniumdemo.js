function dwnSubmit(method) {
console.log(method);

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Origin", "GET, POST, DELETE, OPTIONS");




const requestOptions = {
method: "POST",
headers: myHeaders,
mode: 'no-cors'
};

if (method === 'login')
{
    email = document.querySelector('input[id="username"]').value;
    password = document.querySelector('input[id="password"]').value;
    localStorage.setItem("username", email);
    urlStr = "method=account_login_success&Email=" + email + "&Password=" + password;
}
if (method === 'register')
{
    fname = document.querySelector('input[id="fname"]').value;
    lname = document.querySelector('input[id="lname"]').value;
    dob = document.querySelector('input[id="DOB"]').value;
    email = document.querySelector('input[id="email"]').value;
    mobileNumber = document.querySelector('input[id="mobileNumber"]').value;
    localStorage.setItem("username", email);
    urlStr = "method=account_creation&Email=" + email + "&mobileNumber=" + mobileNumber + "&dob=" + dob+ "&lname=" + lname+ "&fname=" + fname;
}

//const response = await fetch("https://airfi.tech/casino/service?" + urlStr, requestOptions);    
//console.log(response);


const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       console.log(xhttp.responseText);
       if (method === 'login')
       {
            window.location.replace('https://airfi.tech/finances-master/home.html');
       }
       if (method === 'register')
       {
            window.location.replace('https://airfi.tech/finances-master/otp.html');
       }
    }
};
xhttp.open("POST", "https://airfi.tech/finances-master/submit?" + urlStr, false);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.send();

}
