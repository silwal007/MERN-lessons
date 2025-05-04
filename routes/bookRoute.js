//const { singleFetchBook } = require("../Controllers/bookController")
//const { addBook, deleteBook,editBook,fetchBooks,singleFetchBook } = require("./")

const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../Controllers/bookController")

const router=require ("express").Router()

router.route("/").get(fetchBooks).post(addBook)
router.route("/:id").delete (deleteBook).patch(editBook).get(singleFetchBook)






module.exports =router