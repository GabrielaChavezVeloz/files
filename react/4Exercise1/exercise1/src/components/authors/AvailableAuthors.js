import { useContext } from "react";

import Author from "./Author";
import AuthorsContext from "../../store/authors-context";

const AvailableAuthors = (props) => {

  const autCtx = useContext(AuthorsContext);

    const authorsList = autCtx.authors.map(author => (
      
        <Author 
            key={author.id}
            name={author.name}
            nacionality={author.nacionality}
        />
    ));
    return (
      <>
        <div>
            <h3>Authors List!</h3>
        </div>
        <ul>
          {authorsList}
        </ul>
      </>
      
    );
  }
  
  export default AvailableAuthors;