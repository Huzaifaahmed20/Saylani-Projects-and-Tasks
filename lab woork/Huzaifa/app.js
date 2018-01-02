var database = firebase.database().ref("/");
// var auth = firebase.auth();
var username = document.getElementById("userName");
var emails = document.getElementById("email");
var passw = document.getElementById("pass");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var cell = document.getElementById("cell");
var age = document.getElementById("age");

function submit() {
    var user = {
        firstName : fname.value,
        lastName : lname.value,
        cellno: cell.value,
        ages:age.value,
        name: username.value,
        email: emails.value,
        pass: passw.value
    };
    username.value = "";
    emails.value = "";
    passw.value = "";

    // console.log(user);

    firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
        .then(function (res) {
            database.child('user/' + res.uid).set(user).then(function() {
                alert("Sign Up Succesful");
                location = "login.html";
            })
            // console.log(res);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}