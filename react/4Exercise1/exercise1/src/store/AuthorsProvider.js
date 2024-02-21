import { useState, useEffect } from "react";
import AuthorsContext from "./authors-context";

const AuthorsProvider = (props) => {
    const[authors, setAuthors] = useState([]);
    const[updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchAuthors = async () => {
          const response = await fetch(
            'https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/authors.json'
          );
    
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const responseData = await response.json();
    
          const loadedAuthors = [];
    
          for (const key in responseData) {
            loadedAuthors.push({
              id: key,
              name: responseData[key].name,
              nacionality: responseData[key].nacionality
            });
          }
    
          setAuthors(loadedAuthors);
        };
    
        fetchAuthors().catch((error) => {
        });

        setUpdated(false);
      }, [updated]);


    const addAuthorHandle = async (author) => {
        await fetch('https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/authors.json', {
            method: 'POST',
            body: JSON.stringify({
                id: author.id,
                name: author.name,
                nacionality: author.nacionality
            }),
        });

        setUpdated(true);
    };

    const authorContext = {
        authors,
        addAuthor: addAuthorHandle
    };

    return(
        <AuthorsContext.Provider value={authorContext}>
            {props.children}
        </AuthorsContext.Provider>
    );

};

export default AuthorsProvider;