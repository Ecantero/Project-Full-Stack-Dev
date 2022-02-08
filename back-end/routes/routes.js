const bcrypt = require("bcryptjs");
const { MongoClient, ObjectId } = require("mongodb");
const url =
  "mongodb+srv://movietest:fullstack1@cluster0.kljv5.mongodb.net/userDB?authSource=admin&replicaSet=atlas-opq1t6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";
// const url = 'mongodb://localhost:27017';

//mongodb module instance
const client = new MongoClient(url);

const dbName = "moviedatabase";
const db2 = client.db(dbName);
const collection = db2.collection("users");

const reviewCollection = db2.collection("Review/Rating");

exports.home = (req, res) => {
  console.log("The backend is called thru the frontend");
  res.send({ name: "Ernesto" });
};

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
        if (comparePassword(password, user.password) )  {
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

exports.review = async (req, res) => {
  console.log(`user: ${req.body.username} title: ${req.body.title} rating: ${req.body.rating} review: ${req.body.review}`);
  try {
    await client.connect();
    const insertResult = await reviewCollection.insertOne({
      username: req.body.username,
      title: req.body.title,
      rating: req.body.rating,
      review: req.body.review
    });
    console.log('Inserted documents =>', insertResult);
  } catch (error) {
    res.json(error);
  } finally {
    await client.close();
  }
}

exports.getReview = async (req, res) => {
  try {
    await client.connect();
    const fetchedReviews = await reviewCollection.find({}).toArray();
    res.json(fetchedReviews);
  } catch (error) {
    res.json(error);
  } finally {
    await client.close();
  }
}

const comparePassword = (passStr1, passStr2) => {
  return bcrypt.compareSync(passStr1, passStr2)
};
