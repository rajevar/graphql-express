
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const { AuthorType } = require('./Author');
const { authors } = require('./data');

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      authorId: { type: new GraphQLNonNull(GraphQLInt) },
      author: {
        type: AuthorType,
        resolve: (book) => {
          return authors.find(author => author.id === book.authorId)
        }
      }
    })
  })

module.exports = { BookType };