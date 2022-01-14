const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = 'mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/userDB?authSource=admin&replicaSet=atlas-opq1t6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true';
// const url = 'mongodb://localhost:27017';

//mongodb module instance
const client = new MongoClient(url);

// const dbName = 'userDB';
// const db = client.db(dbName);
// const collection = db.collection('movieuserdatabase');

const app = express();

//connecting to cluster, access database,  and closing it
async function main(){
    try {
        //connect to cluster
        await client.connect();

        //make db calls
        await listDatabases(client);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}