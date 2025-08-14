// require("./first") // import "./first";

console.log("Second");


// (function (){                    // implementaton of require
//     console.log("first");

//     function sum(a,b){
//         comsole.log(a+b);
//     }

//     sum(6,5);
// })();

// sum(4+5);

console.log("second.one");

// const sum1= require("./first");

// sum1(5,5); 

console.log("second.three");

const {sum2,sub}=require("./first");

sum2(4,8);
sub(7,3);
