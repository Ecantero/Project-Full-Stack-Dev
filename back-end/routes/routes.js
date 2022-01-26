const bcrypt = require("bcrypt-nodejs");
const { MongoClient, ObjectId } = require("mongodb");
const url =
  "mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/userDB?authSource=admin&replicaSet=atlas-opq1t6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";
// const url = 'mongodb://localhost:27017';

//mongodb module instance
const client = new MongoClient(url);

const dbName = "moviedatabase";
const db2 = client.db(dbName);
const collection = db2.collection("users");

exports.home = (req, res) => {
  console.log("The backend is called thru the frontend");
  res.send({"name":"Ernesto"});
}

exports.users = async (req, res) => {
  try {
    await client.connect();
    const fetchedUsers = await collection.find({}).toArray();
    res.json(fetchedUsers);
    // console.log(fetchedUsers);
  } catch (error) {
    res.json(error);
  } finally {
    await client.close();
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    console.log(email);
    if (email == "" || password == "") {
      res.json({
        status: "FAILED",
        message: "Empty credentials supplied",
      });
    } else {
      await client.connect();
      const user = await collection.findOne({ email: email });
      await client.close();
      console.log(user);
      if (user != null) {
        if (user.password === password) {
          res.json({
            status: "Success",
            message: "Credentials supplied",
          });
        } else {
          res.json({
            status: "FAILED",
            message: "Email/Password Incorrect",
          });
        }
      } else {
        res.json({
          status: "FAILED",
          message: "Incorrect credentials supplied",
        });
      }
    }
  } catch (error) {
    res.json(error);
  } finally {
    //await client.close();
  }
};

const hashPassword = (passwordStr) => {
  return bcrypt.hashSync(passwordStr);
};
