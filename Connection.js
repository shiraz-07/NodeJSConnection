// .env which is for loading the environment variables
require("dotenv").config();

const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URL;

if(!connectionString){
    console.log("Mongo URL is not defined in .env");

    //Program yahi par stop krdo
    process.exit(1);
}

async function connectToDatabase() {
    try{
        await mongoose.connect(connectionString)

        console.log("Connected to MongoDb Successfully!");

    }catch(error){
        console.log("Connection Failed");

        console.log(error.message);
    }
}
