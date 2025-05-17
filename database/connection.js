//yaha db connection ko code
const {Sequelize, DataTypes} = require ("sequelize")// (destructure in js)
//const bookModel1 = require("./models/book.model")
//const sequelize=require("sequelize")//xvada ma store gareko vaye ni huthyo
// to connect to db we require sequelize installed in node modules and store in a variable
//this is destructring, as we only need Sequelize class and Datatypes, however sequelize framwork has many items. use { } curly brace
//Alternative way
// const xvada = require ("sequelize")
// const Sequelize = xvada.Sequelize // accessing thru object sequelize
// const DataTypes = xvada.DataTypes
const sequelize = new Sequelize(process.env.CONNECTION_STRING)//cI instantiation naksa to ghar, class to obj con sequelize could be any name

sequelize.authenticate()
.then(()=>{
console.log ("authenticated and connected to database thru orm string")

})
.catch ((err)=>{
    console.log("conection to db unsuccessful" +err)
})
//const info = {} empty object
// info.name="sanjesh" example to create empty object in js
// info.age =43
//or
//const info = {
// info.name: "sanjesh"
// info.telno: 98510
//}
//
const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books=require("./models/book.model")(sequelize,DataTypes) //imported here

//migrate code
sequelize.sync({alter:false}).then(()=>{
    console.log ("migration accomplished")

})
module.exports = db
// module.exports = db