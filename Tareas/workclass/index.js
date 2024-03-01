import express from "express";

const app = express();
const port = 3000;
const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
  ];

  const authors = [
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
  ];

app.use(express.json());



app.get("/books/:title", (req, res)=>{
    const {title} = req.params;
    if (!title)
    {
        res.status(200).send(books);
    }else{
        const book = books.find((object)=> title === object.title);
        res.status(200).send(book);  
    }
});

app.get("/authors/:name", (req, res)=>{
    const {name} = req.params;
    const author = authors.find((object)=>name === object.name);
    console.log(author);
    res.status(200).send(author);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });