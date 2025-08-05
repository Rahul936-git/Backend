const express= require('express');
const app= express();

app.use(express.json());

const books = [
  { id:1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id:2, title: "1984", author: "George Orwell" },
  { id:3, title: "Pride and Prejudice", author: "Jane Austen" },
  { id:4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id:5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id:6, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { id:7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
  { id:8, title: "The Alchemist", author: "Paulo Coelho" },
  { id:9, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id:10, title: "Moby-Dick", author: "Herman Melville" }
];


app.get("/book",(req,res)=>{
    res.send(books); 
})

//  access any particular book

app.get("/book/:id",(req,res)=>{              // (app.get ==> complete match) while (app.use ==> partialy match)

    const id = parseInt(req.params.id);
    const collection= books.find(info=>info.id===id);
    res.send(collection);
})

app.post("/book",(req,res)=>{

    console.log(req.body); // {
                           //     "id": 11,
                           //     "title": "The Kite Runner",
                           //     "author": "Khaled Hosseini"
                           // } 
    books.push(req.body);
    res.send("Book data saved succesfully");
})


app.listen(9000,()=>{
    console.log("listening at 9000 port number");
})



