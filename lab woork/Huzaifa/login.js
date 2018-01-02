//firebase
//database
//child
var database = firebase.database().ref("/");
var inEmail = document.getElementById("inputemail");
var inPass = document.getElementById("inputpass");

document.getElementById("stop").addEventListener("submit",

    function submit(event) {
        event.preventDefault();
        var user = {
            email: inEmail.value,
            password: inPass.value
        };

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (success) {

                // console.log(success.uid);

                database.child('user/' + success.uid).once("value", function (snapshot) {

                    // console.log(snapshot.val());
                    localStorage.setItem("user",JSON.stringify(snapshot.val()));

                    location = "dashboard.html";
                });

            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });


    });
