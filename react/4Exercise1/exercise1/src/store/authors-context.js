import React from 'react';

const AuthorsContext = React.createContext({
    authors: [],
    addAuthor: (author) => {}
});

export default AuthorsContext;
