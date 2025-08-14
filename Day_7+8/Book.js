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
  { id: 9,title: "The Tales of Beedle the Bard", author: "J.K. Rowling"  },
  { id:10, title: "Moby-Dick", author: "Herman Melville" }
];



app.get("/book",(req,res)=>{
    console.log(req.query);     // query parameter:     k?author=J.K. Rowling
    const book=books.filter(info=>info.author===req.query.author);
    res.send(book);
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

//////////////////////////////////////////////////////////// patch

// app.patch("/book",(req,res)=>{
//     console.log(req.body);
//     res.send("patch updated");
// })

// app.patch("/book",(req,res)=>{
//     console.log(req.body);

//     const Book= books.find(info=>info.id === req.body.id);
//     Book.title=req.body.title;
//     Book.author=req.body.author;
//     res.send("patch updated");
// })

app.patch("/book",(req,res)=>{
    console.log(req.body);

    const Book= books.find(info=>info.id === req.body.id);

    if(req.body.title)  // check if it exists or not
    Book.title=req.body.title;

    if(req.body.author)  // check if it exists or not
    Book.author=req.body.author;

    res.send("patch updated");
})

//////////////////////////////////////////////////////////////// put


// app.put("/book",(req,res)=>{
//     console.log(req.body);

//     const Book=books.find(info=>info.id===req.body.id);

//     if(req.body.title)
//         Book.title=req.body.title;

//     if(req.body.author)
//         Book.author=req.body.author;

//     res.send("changes updated succesfully");
// })


app.put("/book", (req, res) => {
    console.log(req.body); // logs the array of updates

    const updateBook = req.body;  // update all 

    updateBook.forEach(update => {
        const book = books.find(info => info.id === update.id);

        if (book !== undefined) {
            if (update.title) book.title = update.title;
            if (update.author) book.author = update.author;
        }
    });

    res.send("All changes updated successfully");
});

// ///////////////////////////////////////////////////////// delete

app.delete("/book/:id",(req,res)=>{

    const id=parseInt(req.params.id);  // string to interger

    const index=books.findIndex(info => info.id===id);

    books.splice(index,1);
    res.send("Deleted succesfully");
})

// query parameter:     k?author=J.K. Rowling



app.listen(9000,()=>{
    console.log("listening at 9000 port number");
})


