const express = require('express')//express framework lai require garera express const lai rakheko
const cors=require("cors")
require("dotenv").config()

const bookRoute = require("./routes/bookRoute")
const { fetchBooks, addBook, deleteBook, editBook} = require('./Controllers/bookController')
const app = express() // express lai trigger gareko
//require('./database/connection')
require ("./database/connection")
app.use(express.json())//communication-parse data, yesley jason data from postman bujchha
// let app = require("express")()
app.use(cors({
    origin: "http://localhost:5173"
}))

    
    app.use("/api/books",bookRoute)

app.listen(process.env.PORT ,function() {
    console.log ("server/backend/node has started at port 3000")
})


