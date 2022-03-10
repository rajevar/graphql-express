
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const { books } = require('./data');

const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "Author details",
    fields: () => {
        let BookType = require('./Book').BookType; // https://stackoverflow.com/questions/42531322/graphql-circular-dependency
        return {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            name: { type: new GraphQLNonNull(GraphQLString) },
            books: {
                type: new GraphQLList(BookType),
                resolve: (author) => books.filter(book => book.authorId == author.id)
            }
        }
    }
})

exports.AuthorType = AuthorType;