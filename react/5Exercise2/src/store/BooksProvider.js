import { useState, useEffect } from "react";

import BooksContext from "./books-context";

const BooksProvider = (props) => {

    const[books, setBooks] = useState([]);
    const[updated, setUpdated] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
          const response = await fetch(
            'https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/ books.json'
          );
    
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const responseData = await response.json();
    
          const loadedBooks = [];
    
          for (const key in responseData) {
            loadedBooks.push({
              id: key,
              name: responseData[key].name,
              author: responseData[key].author,
              genre: responseData[key].genre
            });
          }
    
          setBooks(loadedBooks);
        };
    
        fetchBooks().catch((error) => {
        });

        setUpdated(false);
      }, [updated]);

    const addBookHandle = async (book) => {
        await fetch('https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/ books.json', {
          method: 'POST',
          body: JSON.stringify({
              id: book.id,
              name: book.name,
              author: book.author,
              genre: book.genre
          }),
      });

      setUpdated(true);
    };

    const bookContext = {
      books,
      addBook: addBookHandle
    };

    return(
      <BooksContext.Provider value={bookContext}>
        {props.children}
      </BooksContext.Provider>
    );


};

export default BooksProvider;