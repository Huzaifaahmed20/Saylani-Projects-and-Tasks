// var whereweat = window.location.href;
// console.log(whereweat);

// var hostName = window.location.hostname;
// console.log(hostName);

// var pathName = window.location.pathname;
// console.log(pathName);


// var monkeyWindow = window.open("monk.html","newWin", "width=420,height=380");

function checkForPopBlocker() {
 var testPop = window.open("", "","width=100,height=100");
 if (testPop === null || typeof(testPop === "undefined") )
    {
        alert("Please disable your popup blocker.");
    }
 testPop.close();
 }

