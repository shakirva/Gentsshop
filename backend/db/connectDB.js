const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/config.env" })
function connectDB(){
    mongoose.set("strictQuery", false); 
  
    mongoose   
        .connect(process.env.DB_URI) 
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB