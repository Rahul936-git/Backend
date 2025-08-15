// Your MongoDB connection URL
const url = "mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/";

const { MongoClient } = require("mongodb");

// // Create a MongoClient instance
const client = new MongoClient(url);

async function run() {
  try {
    // // Connect to MongoDB
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // // Select the database and collection
    const database = client.db("BackendCoding");
    const MyCollection = database.collection("user");

    // // Fetch all documents from the collection

    // const findResult = await MyCollection.find({}).toArray();

    const findResult = MyCollection.find({});  // Cursor  --> point all document one by one
    const ans= await findResult.toArray();    // .toArray() make network call

    // // Print the results
    console.log("All findResult:", ans);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    // // Close the connection
    await client.close();
  }
}

// Run the script
run().catch(console.dir);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Your MongoDB connection URL
// const url = "mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/";

// const { MongoClient } = require("mongodb");

// // // Create a MongoClient instance
// const client = new MongoClient(url);

// async function run() {
//   try {
//     // // Connect to MongoDB
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // // Select the database and collection
//     const database = client.db("BackendCoding");
//     const MyCollection = database.collection("user");

//     // // Fetch all documents from the collection
    
//     const findResult = MyCollection.find({});  // Cursor  --> point all document one by one

//     for await (const doc of findResult){  // print document as an object not array
//       console.log(doc);
//     }
//     // // Print the results
//     // console.log("All findResult:", findResult);  // print document as an array
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     // // Close the connection
//     await client.close();
//   }
// }

// // Run the script
// run().catch(console.dir);

// ///////////////////////////////////// insertion //////////////////////////////////////////

// // Your MongoDB connection URL
// const url = "mongodb+srv://rahulkumar789123:zxcvbnm789123@mycodingcluster.ccmttxr.mongodb.net/";

// const { MongoClient } = require("mongodb");

// // // Create a MongoClient instance
// const client = new MongoClient(url);

// async function run() {
//   try {
//     // // Connect to MongoDB
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // // Select the database and collection
//     const database = client.db("BackendCoding");
//     const MyCollection = database.collection("user");

//     // const insertResult = await MyCollection.insertOne({name:"hhhiohiohf",age:87});
//     // console.log("Inserted document: ",insertResult);

//     // const insertResults= await MyCollection.insertMany([{a:1},{b:2},{a:3}]);
//     // console.log("Inserted documents:" ,insertResults);

//     const filteredDocs = await MyCollection.find({"name":"Rahul","age":21,"city":"uygyguyg","ghutdddu":"yuggiuguipp"}).toArray();
//     console.log("founded ",filteredDocs);

//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     // // Close the connection
//     await client.close();
//   }
// }

// // Run the script
// run().catch(console.dir);