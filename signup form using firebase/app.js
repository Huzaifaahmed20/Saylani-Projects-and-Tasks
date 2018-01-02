var database = firebase.database().ref("/");
var auth = firebase.auth();
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var pass = document.getElementById("pass");

function submit(){
    var user = {
        name: userName.value,
        email: email.value,
        passw: pass.value
    };
    userName.value = "";
    email.value = "";
    pass.value = "";
        
    auth.createUserWithEmailAndPassword(user.email, user.passw)
    .then(function(res){

        // console.log(res);
        database.child("user/"+res).push(user);

    })

    .catch(function(error) {
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