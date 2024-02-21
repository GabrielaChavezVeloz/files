import GenresContext from './genres-context';
import { useState, useEffect } from "react";

const GenresProvider = (props) => {

    const [genres, setGenres] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchGenres = async () => {
          const response = await fetch(
            'https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/genres.json'
          );
    
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const responseData = await response.json();
    
          const loadedGenres = [];
    
          for (const key in responseData) {
            loadedGenres.push({
              id: key,
              name: responseData[key].name
            });
          }
    
          setGenres(loadedGenres);
        };
    
        fetchGenres().catch((error) => {
        });

        setUpdated(false);
      }, [updated]);

    const addGenresHandler = (list) => {
        setGenres(list);

    }

    const addGenreHandler = async (genre) => {
        await fetch('https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/genres.json', {
            method: 'POST',
            body: JSON.stringify({
                id: genre.id,
                name: genre.name
            }),
        });

        setUpdated(true);
    };

    const genreContext = {
        genres,
        addGenres: addGenresHandler,
        addGenre: addGenreHandler
    };

    return(
        <GenresContext.Provider value={genreContext}>
            {props.children}
        </GenresContext.Provider>
    );
};

export default GenresProvider;