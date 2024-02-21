import { useContext } from 'react';
import AvailableBooks from './AvailableBooks';
import BooksForm from './BooksForm';
import BooksContext from '../../store/books-context';

// const DUMMY_BOOKS = [
//     {
//         id: 'b1',
//         name: 'Cuentos infantiles',
//         author: 'Jose Perez',
//         gender: 'Fantasy'
//     },
//     {
//         id: 'b2',
//         name: 'Cuentos de terror',
//         author: 'Maria Lopez',
//         gender: 'Triller'
//     }
// ];

const Books = (props) => {

  const bookCtx = useContext(BooksContext);

    const submitBookHandler = (data) => {
      bookCtx.addBook(data);
      
  };


    return (
      <>
        <div>
            
            <AvailableBooks/>
            <BooksForm onAddBook={submitBookHandler}/>
        </div>
      </>
      
    );
  }
  
  export default Books;