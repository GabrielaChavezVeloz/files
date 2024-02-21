import { useState, useEffect, useContext } from "react";

import Book from "./Book";
import BooksContext from "../../store/books-context";

const AvailableBooks = (props) => {

    // const[books, setBooks] = useState([]);
    // const[updated, setUpdated] = useState(false);

    // useEffect(() => {
    //     const fetchBooks = async () => {
    //       const response = await fetch(
    //         'https://react-exercise1-1b7f5-default-rtdb.firebaseio.com/books.json'
    //       );
    
    //       if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //       }
    
    //       const responseData = await response.json();
    
    //       const loadedBooks = [];
    
    //       for (const key in responseData) {
    //         loadedBooks.push({
    //           id: key,
    //           name: responseData[key].name,
    //           author: responseData[key].author,
    //           genre: responseData[key].genre
    //         });
    //       }
    
    //       setBooks(loadedBooks);
    //     };
    
    //     fetchBooks().catch((error) => {
    //     });

    //     setUpdated(false);
    //   }, [updated]);

    const booksCtx = useContext(BooksContext);

    const booksList = booksCtx.books.map(book => (
        <Book
            key={book.id}
            name={book.name}
            author={book.author}
            genre={book.genre}
        />
    ));
    return (
        <>
            <div>
                <h3>Books List!</h3>
                
            </div>
            <ul>
                {booksList}
            </ul>
        </>
    );
};

export default AvailableBooks;