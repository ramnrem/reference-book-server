import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import mongoose from 'mongoose'

import { typeDefs } from "./typeDefs"
import { resolvers } from './resolvers'



const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true, useUnifiedTopology: true })

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer()




//
// app.use((req, res) => {
//     res.status(200);
//     res.send('Hello!');
//     res.end();
// });

