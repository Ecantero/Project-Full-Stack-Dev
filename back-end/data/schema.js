// const { makeExecutableSchema } = require("@graphql-tools/schema");
// const resolvers = require("./resolvers");

const typeDefs = `
    type Query{
        getReview(title:String): [Review]
        getUsers:[User]
        getAllReviews:[Review]
    }

    type Review{
        _id:ID
        username: String
        title: String
        rating: Int
        review: String
    }

    type User{
        _id: ID
        fname: String
        lname: String
        street: String
        city: String
        state: String
        zip_code: Int
        email: String
        password: String
        phone: String
    }

    input ReviewInput{
        id:ID
        username: String
        title: String
        rating: Int
        review: String
    }



    type Mutation{
        addReview(input:ReviewInput): String
        deleteReview(id: ID!): String
        deleteUser(id: ID!):String
    }


`;

// const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = typeDefs;
