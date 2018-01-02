var user = localStorage.getItem("user");
var convertToParse = JSON.parse(user);
var database = firebase.database().ref("/");

var fullName = convertToParse.firstName + " " + convertToParse.lastName;
console.log(convertToParse);

var head = document.getElementById("heading");
head.innerHTML = convertToParse.firstName + " "+convertToParse.lastName;

var FirstName = document.getElementById("fname");
FirstName.innerHTML = convertToParse.firstName;

var LastName = document.getElementById("lname");
LastName.innerHTML = convertToParse.lastName;

var emails = document.getElementById("email");
emails.innerHTML = convertToParse.email;

var post = document.getElementById("postInput");
var showPost = document.getElementById("showPosts");
var postName = document.getElementById("posterName");

function submitPost(){
// console.log(convertToParse.firstName);
var userPost = {
    userName: fullName,
    postEntered: post.value
};
database.child("userPost").push(userPost);
}

database.child("userPost").on("child_added", function(snapshot){
    var obj = snapshot.val();
    obj.id = snapshot.key;
    renderPost(obj);
})



function renderPost(userPost){
    postName.innerHTML = fullName;
    showPost.innerHTML = post.value;
    post.value = "";
}
