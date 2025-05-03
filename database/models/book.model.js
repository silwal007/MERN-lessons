
// const { INTEGER } = require("sequelize")

// // bookname//bookprice//bookauthor//bookgenre

// const bookmodel = (sequelize, DataTypes) => {
//     const Book = sequelize.define("book", {
//         bookname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         bookPrice: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         bookAuthor: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         bookGenre: {
//             type: DataTypes.STRING,
//             allowNull: false
// //         }
//     });

//     return Book;
// };

// module.exports = bookmodel;


// books, bookName,bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
    const Book = sequelize.define("book",{
       bookName : {

        type : DataTypes.STRING, 
        allowNull : false
    }, 
    bookPrice : {
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