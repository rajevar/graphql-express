#### Using express, express-graphql to query/update in memory objects.

Query:
```
To list all Authors.
    { 
        authors {
            id, name
            books {
            id, name }
        }
    }

Display all Books.
    {
        books {
            name, author {
                name
            }
        }
    }

Find a Book.
    {
        book(id:2) {
            name, author {
                name
            }
        }
    }
 ```
