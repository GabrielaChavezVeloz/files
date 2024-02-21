import { useState, useContext } from 'react';

import AvailableAuthors from "./AvailableAuthors";
import AuthorForm from "./AuthorForm";
import AuthorsContext from '../../store/authors-context';

// const DUMMY_AUTHORS = [
//     {
//         id: 'a1',
//         name: 'Jose Perez',
//         nacionality: 'mexican'
//     },
//     {
//         id: 'a2',
//         name: 'Maria Lopez',
//         nacionality: 'mexican'
//     }
// ];

const  Authors = () => {
    
    const autCtx = useContext(AuthorsContext);

    const [authors, setAuthors] = useState(autCtx.authors);

    const submitAuthorHandler = (data) => {
        
        // const index = authors.findIndex(x => x.name === data.name);
        // const existingAuthor = authors[index];
        // let updatedAuthors;

        // if(existingAuthor) {
        //     const updatedAuthor = {
        //         ...existingAuthor,
        //         id: data.id,
        //         name: data.name,
        //         nacionality: data.nacionality
        //     };
        //     updatedAuthors = [...authors];
        //     console.log('size:' +updatedAuthors.length);
        //     updatedAuthors[index] = updatedAuthor;
        //     setAuthors([
        //         ...updatedAuthors
        //     ]);
        
        // } else {
        //     setAuthors([
        //         ...authors, data
        //     ]);
        // }

        /*setAuthors([
            ...authors, data
        ]);
        console.log('added: ' +data);*/

        autCtx.addAuthor(data);
    };

    return (
      <>
        <div>
            <AvailableAuthors/>
            <AuthorForm onAddAuthor={submitAuthorHandler}/>
        </div>
      </>
      
    );
  }
  
  export default Authors;