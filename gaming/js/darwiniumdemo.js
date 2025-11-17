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
if (method === 'logon')
{
        email = document.querySelector('input[id="username"]').value;
        password = document.querySelector('input[id="password"]').value;
        localStorage.setItem("username", email);
        urlStr = "method=account_login_success&Email=" + email + "&Password=" + password;
}
if (method === 'otp')
    {
        otp = document.querySelector('input[id="otp"]').value;
        email = localStorage.getItem("username");
        urlStr = "method=auth_challenge_pass&otp=" + otp + "&Email=" + email;
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
if (method === 'recover')
{
        fname = document.querySelector('input[id="fname"]').value;
        lname = document.querySelector('input[id="lname"]').value;
        dob = document.querySelector('input[id="DOB"]').value;
        email = document.querySelector('input[id="email"]').value;
        mobileNumber = document.querySelector('input[id="mobileNumber"]').value;
        localStorage.setItem("username", email);
        urlStr = "method=account_forgot_user_id&Email=" + email + "&mobileNumber=" + mobileNumber + "&dob=" + dob+ "&lname=" + lname+ "&fname=" + fname;
}
if (method === 'account_details_change')
{
            fname = document.querySelector('input[id="fname"]').value;
            lname = document.querySelector('input[id="lname"]').value;
            dob = document.querySelector('input[id="DOB"]').value;
            email = document.querySelector('input[id="email"]').value;
            mobileNumber = document.querySelector('input[id="mobileNumber"]').value;
            localStorage.setItem("username", email);
            urlStr = "method=account_details_change&Email=" + email + "&mobileNumber=" + mobileNumber + "&dob=" + dob+ "&lname=" + lname+ "&fname=" + fname;
}
if (method === 'withdrawal')
{
            provider = document.querySelector('input[id="provider"]').value;
            paymentAccount = document.querySelector('input[id="provider-id"]').value;
            amount = document.querySelector('input[id="amount"]').value;
            email = localStorage.getItem("username");
            urlStr = "method=withdrawal&Email=" + email + "&paymentAccount=" + paymentAccount + "&amount=" + amount;
}
if (method === 'payment')
{
            provider = document.querySelector('input[id="provider"]').value;
            paymentAccount = document.querySelector('input[id="provider-id"]').value;
            amount = document.querySelector('input[id="amount"]').value;
            email = localStorage.getItem("username");
            urlStr = "method=payment&Email=" + email + "&paymentAccount=" + paymentAccount + "&amount=" + amount;
}


//const response = await fetch("https://airfi.tech/casino/service?" + urlStr, requestOptions);    
//console.log(response);


const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       console.log(xhttp.responseText);
       if (method === 'login' || method === 'otp' || method === 'withdrawal' || method === 'payment' )
       {
            window.location.replace('https://airfi.tech/gaming/home.html');
       }
       if (method === 'register' || method === 'recover' || method === 'account_details_change')
       {
            window.location.replace('https://airfi.tech/gaming/otp.html');
       }
       if (method === 'logon')
       {
             window.location.replace('https://airfi.tech/gaming/landing.html');
       }
    }
};
if (method === 'logon'){
    xhttp.open("POST", "https://airfi.tech/gaming/graphql?" + urlStr, false);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send();
}
else
{
    xhttp.open("POST", "https://airfi.tech/gaming/graphql?" + urlStr, false);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send();
}


}
