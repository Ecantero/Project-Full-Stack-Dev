const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const url = 'mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/moviedatabase?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'userDB';
const db = client.db(dbName);
const collection = db.collection('movieuserdatabase');

const app = express();
