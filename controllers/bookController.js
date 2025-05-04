exports.fetchBooks = async function(req,res){
    //logic to fetch books
    const datas = await books.findAll()
     // select * FROM books sql command
    res.json({
        message: "books fetched successfully",
        datas : datas    //key=value same can write one time
    })
}
   //logic
    //alternative normal way
    //(req.body) its object
    //const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice
    // console.log(bookName)
    //destructer way
exports.addBook = async function(req,res){
 
    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
  await books.create({
    bookName, bookPrice,
    bookAuthor,
    bookGenre

  })

  res.json({
        message: "books addded successfully"
    })
}
exports.deleteBook = function(req,res){
    //logic

    res.json({
        message: "books deleted successfully"
    })
}

exports.editBook = function(req,res){
    //logic

    res.json({
        message: "books updated successfully"
    })
}
exports.singleFetchBook = async function(req, res){
    const id = req.params.id
   const datas = await books.findByPk(id) //always returns obj

   res.json({
    message: "books fetched success",
    datas
   })
}

//module.exports = {fetchBooks,addBook,deleteBook,editBook,singleFetchBook} //yesari ni hunchha