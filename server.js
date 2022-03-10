const express = require('express');
const { RootQueryType, RootMutationType } = require('./QueryTypes');

const expressGraphQL = require('express-graphql').graphqlHTTP
const { GraphQLSchema } = require('graphql');

const bookSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})
const app = express();
app.use('/graphql', expressGraphQL({
  schema: bookSchema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running...'));
