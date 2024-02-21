import Header from "./components/Layout/Header";
import Authors from "./components/authors/Authors";
import Books from "./components/books/Books";
import Genres from "./components/genres/Genres";
import AuthorsProvider from "./store/AuthorsProvider";
import BooksProvider from "./store/BooksProvider";
import GenresProvider from "./store/GenresProvider";

function App() {
  return (
    <>
      <h1>Book application!</h1>
      <GenresProvider>
        <AuthorsProvider>
          <Header/>
          <Genres/>
          <Authors/>
          <BooksProvider>
            <Books/>
          </BooksProvider>
        </AuthorsProvider>
       
      </GenresProvider>
      
    </>
    
  );
}

export default App;
