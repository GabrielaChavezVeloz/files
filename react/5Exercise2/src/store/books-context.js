import React from 'react';

const BooksContext = React.createContext({
    books: [],
    addBook: (book) => {}
});

export default BooksContext;