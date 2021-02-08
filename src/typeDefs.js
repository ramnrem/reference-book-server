import {gql} from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        hello: String!
        cats: [Cat!]
    }
    type Cat {
        "Идентификатор"
        id: ID!
        "Имя"
        name: String!
    }
    type Mutation {
        createCat(name: String!): String!
    }   
`