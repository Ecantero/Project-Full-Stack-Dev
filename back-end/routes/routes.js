const bcrypt = require("bcryptjs");
const { ObjectID } = require("bson");
const { MongoClient, ObjectId, mongodb } = require("mongodb");
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

exports.logout = async (req, res) => {
  try {
    await client.close();
  } catch (error) {
    res.json(error);
  }
};

exports.delete = async (req, res) => {
  let Email = req.params.id;
  console.log(Email);
  // ObjectId("6202951ea2feb06ced2488d2")
  try {
    await client.connect();
    const deleteTest = await collection.findOneAndDelete({
      email: Email,
    });
    client.close();
    console.log("review delete");
  } catch (error) {
    res.json(error);
  } finally {
    // client.close();
  }
};

exports.users = async (req, res) => {
  try {
    await client.connect();
    const fetchedUsers = await collection.find().toArray();
    res.json(fetchedUsers);
    // console.log(fetchedUsers);
  } catch (error) {
    res.json(error);
  } finally {
    // await client.close();
  }
};

exports.getUser = async (req, res) => {
  let userEmail = req.params.id;
  // console.log(`body: ${req.body.id}`);
  // console.log(`param: ${req.params.id}`);
  // console.log(userEmail);
  try {
    await client.connect();
    const getUser = await collection.findOne({ email: userEmail });
    // await client.close();
    res.json(getUser);
    // console.log(getUser);
    // console.log("user has been recieved");
  } catch (error) {
    res.json(error);
  } finally {
    // await client.close();
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await client.connect();
    const user = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    client.close();
    console.log("user deleted");
  } catch (error) {
    res.json(error);
  } finally {
    // await client.close();
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
        if (comparePassword(password, user.password)) {
          res.json({
            status: "Success",
            message: "Credentials supplied",
            username: `${user.fname} ${user.lname}`,
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

exports.signUp = async (req, res) => {
  // user schema
  // fname: "Hans";
  // lname: "Clemons";
  // street: "168 Wilder St";
  // city: "Dyer Pond";
  // state: "CT";
  // zip_code: 33276;
  // email: "hans.clemons@tbeatty.com";
  // password: "$2a$10$ADCUVsHeU8QpVvacVyRODOk7FKzUSSyTzb2ZOex2Y4AMPt4ZJwG22";
  // phone: "(400) 81-9738";
  console.log(`user information: ${req.body.fname}`);
  const pass = bcrypt.hashSync(req.body.password);
  try {
    await client.connect();
    const createUser = await collection.insertOne({
      fname: req.body.fname,
      lname: req.body.lname,
      street: req.body.street,
      city: req.body.city,
      zip_code: req.body.zip_code,
      email: req.body.email,
      password: pass,
      phone: req.body.phone,
    });
    console.log(`Inserted User: ${createUser}`);
  } catch (error) {
    res.json(error);
  }
};

exports.review = async (req, res) => {
  console.log(
    `user: ${req.body.username} title: ${req.body.title} rating: ${req.body.rating} review: ${req.body.review}`
  );
  try {
    await client.connect();
    const insertResult = await reviewCollection.insertOne({
      username: req.body.username,
      title: req.body.title,
      rating: req.body.rating,
      review: req.body.review,
    });
    console.log("Inserted documents =>", insertResult);
  } catch (error) {
    res.json(error);
  } finally {
    // await client.close();
  }
};

exports.getReview = async (req, res) => {
  try {
    await client.connect();
    const fetchedReviews = await reviewCollection.find().toArray();
    res.json(fetchedReviews);
  } catch (error) {
    res.json(error);
  } finally {
    // await client.close();
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await client.connect();
    const deleteTest = await reviewCollection.deleteOne({
      _id: ObjectID(req.params.id),
    });
    client.close();
    console.log("review deleted");
  } catch (error) {
    res.json(error);
  } finally {
    // client.close();
  }
};

const comparePassword = (passStr1, passStr2) => {
  return bcrypt.compareSync(passStr1, passStr2);
};
