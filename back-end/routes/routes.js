const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const url =
  "mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/userDB?authSource=admin&replicaSet=atlas-opq1t6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";
// const url = 'mongodb://localhost:27017';

//mongodb module instance
const client = new MongoClient(url);

const dbName = "moviedatabase";
const db2 = client.db(dbName);
const collection = db2.collection("users");

const app = express();

app.get('/users', async (req,res) => {
    try{
        await client.connect();
        const fetchedUsers = await collection.find({}).toArray();
        res.json(fetchedUsers);
    
    } catch(error){
        res.json(error);
    } finally{
        await client.close();
    }
})


app.post('/login', urlencoded, async(req,res) => {

    try{
        
        let {email, password} = req.body;
            email = email.trim();
            password = password.trim();

            console.log(email);
            if(email == "" || password == ""){
                res.json({
                    status: "FAILED",
                    message: "Empty credentials supplied"
                })
            } else {
                await client.connect();
                const user = await collection.findOne({email: req.body.email});
                await client.close();
                console.log(user);
                res.json({
                    status: "Success",
                    message: "Credentials supplied"
                })
            }
    
    } catch(error){
        res.json(error);
    } finally{
        //await client.close();
    }
})



//salting and hashing passsword using this method
const hashPassword = (passwordStr) => {
  return bcrypt.hashSync(passwordStr);
};

app.get("/", function(req, res){
    res.send('GET request');
    res.end();
});



app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});

module.exports = router;
