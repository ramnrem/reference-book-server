import { Cat } from "./models/Cat"

export const resolvers = {
    Query: {
        hello: () => 'hello',
        cats: async () => {
            const result = await Cat.find()
            console.log(result)
            return result
        }
    },
    Mutation: {
        createCat: async (_, { name }) => await Cat.create({ name })
    }
}
