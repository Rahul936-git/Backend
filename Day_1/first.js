console.log("First");

// function sum(a,b){
//     console.log(a+b);
// }

// sum(5,6);

console.log("first.one");


// function sum1(a,b){
//     console.log(a+b);
// }

// module.exports = sum1;    // export default sum1;

console.log("first.three");

function sum2(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

console.log(module.exports);  // {}

module.exports = {sum2,sub};    // export default {sum1,sub};

// 

console.log(module.exports);  // { sum2: [Function: sum2], sub: [Function: sub] }

module.exports.sum2 = sum2;
module.exports.sub = sub;


// CJS: common JS module 
// i need first.js code in second.js