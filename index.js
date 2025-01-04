const express = require("express");
const usersRouter = require("./routes/users.js");
const booksRouter = require("./routes/books.js");
const app =express();
const PORT =3000;
app.use(express.json());
 
http://localhost:3000/
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "server is up and running :-)",
        data:"hey",
    });
});

app.use("/users",usersRouter);
app.use("/books",booksRouter);


app.get("*",(req,res)=>{
    res.status(404).json({
        message:"this route does not exists",
    });
});



app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})


