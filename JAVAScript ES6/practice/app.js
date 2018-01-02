// var oldArray = [1,2,3];
// var newArray = [];

// var concatMe = [4,5,6];

// newArray = oldArray.concat(concatMe);
// console.log(newArray)



// var array = [1,2,3,4,5,6,7];
// var newArray = [];

// newArray = array.reverse();
// console.log(newArray);


// var array = [1, 12, 21, 2];

// array.sort((a,b)=>{
//   return b-a;
// });

// console.log(array)


// let oldArray = [1,2,3,4,5,6,7,8,9,10];

// let newArray = oldArray.filter((val)=>{
//   return val < 6;  
// });
// console.log(newArray)


// let oldArray = [1,2,3,4,5];
// let newVar = 0;
// newVar = oldArray.reduce((num1,num2)=>{ 
//   return num1+num2    

// });

// console.log(newVar);

// var oldArray = [1,2,3,4,5];

// var newArray = oldArray.map((val)=>
// {
//   return val+2;    
// });

// console.log(newArray)
let ind = 100;
let foo = {
    [' Question' + ind]: 'Question No:' + ind,

    [' Question' + ind](x) {
        return ind === x;
    }
};