//const { singleFetchBook } = require("../Controllers/bookController")
const { deleteBook, addBook, deleteBook,editBook } = require(".")

const router=require ("express").Router()

router.route("/").get(fetchBooks).post(addBook)
router.route("/:id").delete (deleteBook).patch(editBook).get(singleFetchBook)






module.exports ={router}