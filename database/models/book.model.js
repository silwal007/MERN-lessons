
//const { INTEGER } = require("sequelize")

// // bookname//bookprice//bookauthor//bookgenre
// books, bookName,bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
       bookName : {

        type : DataTypes.STRING, 
        allowNull : false
    }, 
    Price : {
        type : DataTypes.INTEGER,
        allowNull : false
    }, 
    bookAuthor : {
     type : DataTypes.STRING,  }, 
    bookGenre : {
        type : DataTypes.STRING
    }
 })

 return Book;      
}


module.exports = bookModel // export default bookModel ecma script