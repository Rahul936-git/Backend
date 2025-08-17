const bcrypt = require("bcrypt");

const password="qwerty@4567#";

// async function Hashing(){
//     // hascode+salt
//     const hashpass=await bcrypt.hash(password,10);
//     console.log(hashpass);
// }

// Hashing();   // $2b$10$6AZfCDvmxPQ8sZN2ZeevmusbcTqT7/h9F8AajDgt99lVvjhs6Izhi

// //

// async function Hashing(){
//     // hascode+salt
//     console.time("hash");
//     const hashpass=await bcrypt.hash(password,10);    // 2^10
//     console.timeEnd("hash");
//     console.log(hashpass);
// }

// Hashing();   // $2b$10$6AZfCDvmxPQ8sZN2ZeevmusbcTqT7/h9F8AajDgt99lVvjhs6Izhi

// //

// async function Hashing(){
//     // hashcode+salt

//     const salt=await bcrypt.genSalt(10);
//     const hashpass=await bcrypt.hash(password,salt);

//     console.log(salt);  // $2b$10$6eVQdUYMGp0.ML4S7dPiee
//     console.log(hashpass); // $2b$10$6eVQdUYMGp0.ML4S7dPieeb8NHOabjQDbwhQMS0R4jSXKLKNq/dya
// }

// Hashing();   

// //

async function Hashing(){
    // hashcode+salt

    const salt=await bcrypt.genSalt(10);
    const hashpass=await bcrypt.hash(password,salt);

    // const ans =await bcrypt.compare(password,hashpass);
    // console.log(ans);  // true;

    const ans =await bcrypt.compare("Rahul@531",hashpass);
    console.log(ans);  // false;
}

Hashing();   