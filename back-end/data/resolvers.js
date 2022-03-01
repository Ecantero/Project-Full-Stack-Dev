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

const resolvers = {
  Query: {
    getReview: async (root, { id }) => {
      await client.connect();
      const getOneReview = await reviewCollection.findOne({
        _id: ObjectId(id),
      });
      client.close();
      return getOneReview;
    },

    getUsers: async () => {
      await client.connect();
      const getAllUsers = await collection.find().toArray();
      client.connect();

      return getAllUsers;
    },

    getAllReviews: async () => {
      await client.connect();
      const getAllReviews = await reviewCollection.find().toArray();
      client.connect();
      console.log(getAllReviews);

      return getAllReviews;
    },
  },

  Mutation: {
    deleteReview: async (root, { id }) => {
      await client.connect();
      const deleteReview = await reviewCollection.findOneAndDelete({
        _id: ObjectId(id),
      });
      client.close();

      return "Review has been deleted";
    },

    deleteUser: async (root, { id }) => {
      await client.close();
      const deleteUser = await reviewCollection.findOneAndDelete({
        _id: ObjectId(id),
      });
      client.close();

      return "User has been deleted";
    },

    addReview: async (root, { input }) => {
      await client.connect();
      let review = {
        username: input.username,
        title: input.title,
        rating: input.rating,
        review: input.review,
      };

      const addReview = await reviewCollection.insertOne(review);
      client.close();

      return "Your review has been posted!";
    },
  },
};

module.exports = resolvers;
