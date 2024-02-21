import React from 'react';

const GenresContext = React.createContext({
    genres: [],
    addGenres: (genres) => {},
    addGenre: (genre) => {}
});

export default GenresContext;
