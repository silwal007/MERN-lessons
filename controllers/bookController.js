const { books } = require("../database/connection")

exports.fetchBooks = async function(req,res){
    //logic to fetch books
    const datas = await books.findAll()
     // select * FROM books sql command
    res.json({
        message: "books fetched successfully",
        datas     //key=value same can write one time
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
      // logic to add book to database goes here.. 
    // console.log(req.body)
    // const bookName = req.body.bookName
    // const bookPrice = req.body.bookPrice
 
    const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
  await books.create({
    bookName, 
    Price:bookPrice,
    bookAuthor,
    bookGenre
    //columName : value

  })

  res.json({
        message: "books addded successfully"
    })
}
exports.deleteBook = async function(req,res){
    // first ma hami, kun book delete garna aatekoho tesko id lim. 
    const id = req.params.id // const {id} = req.params
//    const id = req.body.id 
    // id payisakeypaxi, tyo id ko book chai books table bata udaidim 
    await books.destroy({
        where : {
            id
        }
    }) // delete from books where id = id
    res.json({
      message : "Book Deleted successfully"
    })
}

exports.editBook = async function(req,res){
    try {
      // logic to update book
     // kun id ko chai edit garne tyo id linu paryo . 
     const id = req.params.id 
     // k k update garne tw .. 
     const {bookName,bookPrice,bookAuthor,bookGenre} = req.body
 
     await books.update({bookName,Price:bookPrice, bookAuthor,bookGenre },{
         where : {
             id : id
         }
     })
     // books.findByIdAndUpdate(id,{})
 
     res.json({
       message : "Book updated successfully"
     })
    } catch (error) {
     res.json({
         message : "Something went wrong"
     })
    }
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