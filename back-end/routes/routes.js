const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const url = 'mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/userDB?authSource=admin&replicaSet=atlas-opq1t6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true';
// const url = 'mongodb://localhost:27017';

//mongodb module instance
const client = new MongoClient(url);

 const dbName = 'moviedatabase';
 const db2 = client.db(dbName);
 const collection = db2.collection('users');

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

//connecting to cluster, access database,  and closing it
// async function main(){
//     try {
//         //connect to cluster
//         await client.connect();

//         //make db calls
//         await listDatabases(client);
//         const findResult = await collection.find({}).toArray();
//         console.log('Found documents =>', findResult);


//     }catch(e){
//         console.error(e);
//     }finally{
//         await client.close();
//     }
// }

//main().catch(console.error);



// app.post('/users', function(req,res){
//     client.connect();
//     const findUsers = collection.find({}).toArray();
//     const body = JSON.stringify(findUsers);
//     res.json(body);
//     client.close();
// });

// app.post('/login', (req, res) =>{
//     //res.json({status: 'ok', data:'coming soon'});
//     let {email, password} = req.body;
//     email = email.trim();
//     password = password.trim();

//     if(email == "" || password == ""){
//         res.json({
//             status: "FAILED",
//             message: "Empty credentials suppilied"
//         })
//     } else {
        
//     }
// });




async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}


app.get("/", function(req, res){
    res.send('GET request');
    res.end();
});



app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

module.exports = router;