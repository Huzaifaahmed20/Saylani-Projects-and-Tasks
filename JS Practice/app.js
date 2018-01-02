// var heading = document.getElementById('heading'); //Variable me store krao pehle
// var userInput = +prompt("Tell a No"); //user input

// userInput = Math.round(userInput);    //round off
//userInput = Math.ceil(userInput);     //high no lata hai
// userInput = Math.floor(userInput);    //low number lata hai
// userInput = Math.sqrt(userInput);     //square root 

// var randomNum = Math.random();          //random num
// randomNum = randomNum * 100 + 1;        //from 1 to 100
// randomNum = Math.floor(randomNum);      // points ke bd wali values hatane ke liye


// heading.innerHTML = randomNum //innerhtml me userinput dikhana hai ya kch bi dikhana h

// Huzaifa Ahmed
// 466
// 4.2
// 11-1
//-------------------------------------------------------------------------//

//Task 1
// var num = document.getElementById("num");
// var userInput = +prompt("Tell A number");
// userInput = Math.round(userInput);
// userInput = Math.ceil(userInput);
// userInput = Math.floor(userInput);
// num.innerHTML = userInput;

//Task 2 
//Absolute Value
//  var num = document.getElementById("num");
//  var userInput = +prompt("Tell A number");
// userInput = Math.abs(userInput);
// num.innerHTML = userInput;

//Task 3
//Dice
// var num = document.getElementById("num");
// var randomNum = Math.random();
// randomNum = randomNum * 6+1;
// randomNum = Math.floor(randomNum);
// num.innerHTML = randomNum;

//Task 4
//Head and Tail
   var coin;
 var userPick = document.getElementById("userchoice");
 var coinElement = document.getElementById("coin");
 var num = document.getElementById("num");
 var result = document.getElementById("tossresult");
 var userinput = prompt("Enter Head or Tail");
  var randomNum = Math.random();
  randomNum = randomNum * 2+1;
  randomNum = Math.floor(randomNum);

  if (randomNum === 1) {
     coin = 'heads';
 }
 else {
     coin = 'tails';
 }
 userPick.innerHTML = userinput;
 
 coinElement.innerHTML = coin;
 
 
 if (coin === userinput) {
     result.innerHTML = 'You won the toss!';
 }
 else {
     result.innerHTML = 'You lost the toss!';
}
 
 //var userchoice = document.getElementById("userchoice");
//  var results = document.getElementById("result");
//  var ran1 = document.getElementById("randoms1");
//   var ran2 = document.getElementById("randoms2");
//    var ran3 = document.getElementById("randoms3");
//  var userinput1 = +prompt("Enter first Number ");
//  var userinput2 = +prompt("Enter second Number ");
//  var userinput3 = +prompt("Enter third Number ");

//  var random1 = Math.random();
//  random1 = random1 * 10 +1;
//  random1 = Math.floor(random1);
//  ran1.innerHTML=random1;

//  var random2 = Math.random();
//  random2 = random2 * 10 +1;
//  random2 = Math.floor(random2);
//  ran2.innerHTML=random2;

//  var random3 = Math.random();
//  random3 = random3 * 10 +1;
//  random3 = Math.floor(random3);
//  ran3.innerHTML=random3;

//  if(userinput1 === random1 || userinput2 === random2 || userinput3 === random3)
//  {
//     results.innerHTML = "Congratulations you are luckyr";
//  }
//  else{
//      results.innerHTML = "You are Unlucky";
//  }



