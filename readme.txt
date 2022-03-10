Using express, express-graphql to query/update in memory objects.

Query:
Authors::
    { 
        authors {
            id, name
            books {
            id, name }
        }
    }

Books::
    {
        books {
            name, author {
                name
            }
        }
    }

Book::
    {
        book(id:2) {
            name, author {
                name
            }
        }
    }
