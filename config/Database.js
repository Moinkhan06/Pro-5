const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://precticehtml:qd99VzxlToj6EVYe@cluster0.pram98a.mongodb.net/");
    console.log("Data base is connected");
}

module.exports = db;

//mongodb+srv://precticehtml:qd99VzxlToj6EVYe@cluster0.pram98a.mongodb.net/
