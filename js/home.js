var submit = document.getElementById("bt-signup");
var user = document.getElementById("login");
var username = document.getElementById("username");
var country = document.getElementById("country");
var city = document.getElementById("city");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var cnfr = document.getElementById("confirm");
var btneye = document.getElementById("btn-eye");


console.log(user);
// username.addEventListener('input', clkUsername);  
// function clkUsername() {
//     console.log(username.textContent);
// }

// country.addEventListener('click', clkCountry);
// function clkCountry() {
//     console.log(country.textContent);
// }

// city.addEventListener('click', clkCity);
// function clkCity() {
//     console.log(city.textContent);
// }

var ok1 = 0;
email.addEventListener('focusout', clkEmail);

function clkEmail() {
    if (email.value.includes("@", ".")) {
        ok1 = 1;
    } else {
        alert("You have entered an invalid email address!")
        ok1 = 0;
    }
}

var ok2 = 0;
// pass.addEventListener('focusout', clkpass);
// function clkpass() {
//     if (pass.value.match(/[a-z]/g, /[A-Z]/g, /[0-9]/g), pass.value.length >= 8) {
//         ok2 = 1;
//         return (1);
//     }
//     else {
//         alert("Must include: \n • More than 8 character \n • Capital letter \n • Lowercase letter \n • Number")
//         ok2 = 0;
//         return (false);
//     }

// }
var ok3 = 0;
cnfr.addEventListener('focusout', clkconfirm);

function clkconfirm() {
    if ( (pass.value.match(/[a-z]/g, /[A-Z]/g, /[0-9]/g)) && (pass.value.length >= 8)) {
        ok2 = 1;
        if (cnfr.value === pass.value) {
            ok3 = 1;
        } else {
            alert("Enter the password again");
            ok3 = 0;
        }
    } else {
        alert("Password must include: \n • More than 8 characters \n • Capital letter \n • Lowercase letter \n • Number");
        ok2 = 0;
    }

btneye.addEventListener('click', clkbtneye)
var owo = 0

function clkbtneye() {
    owo = owo + 1;
    if (owo % 2 == 0) {
        pass.type = "text";
        cnfr.type = "text";
        btneye.className = "fas fa-eye-slash";
    }
    if (owo % 2 == 1) {
        pass.type = "password";
        cnfr.type = "password";
        btneye.className = "fas fa-eye";
    }
}

submit.addEventListener('click', clksub)
async function clksub() {
    if (ok1 === 1 && ok2 === 1 && ok3 === 1) {
        console.log("Username:", username.value);
        console.log("Country:", country.value, ", City:", city.value);
        console.log("Email:", email.value)
        console.log("Password:", pass.value);

        let uservalid = true
        // firebase get data
        await db.collection('user').get().then((snapshot) => {
            // console.log(snapshot);
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
                console.log(doc.data().username);
                console.log(doc.data().email);
                console.log(doc.id);
                if (doc.data().username === username.value || doc.data().email === email.value) {
                    uservalid = false
                }
            });
        })

        if (uservalid == false) {
            alert('username or email has been used brooooo')
        } else if (uservalid == true) {
            // firebase add data
            var new_data = {
                'username': username.value,
                'email': email.value,
                'password': pass.value,
                'country': country.value,
                'city': city.value,
            };
            db.collection('user').add(new_data);
            console.log('registed');


            alert("Sign up successfully!!!!:))))))))");
        }
    } else {
        alert("Sign up not successfully ((:");
    }
} }