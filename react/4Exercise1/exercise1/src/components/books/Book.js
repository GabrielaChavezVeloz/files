const Book = (props) => {
    return (
      <>
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>
                    <p>Author: {props.author}</p>
                    <p>Genre: {props.genre}</p>
                </div>
            </div>
        </li>
      </>
      
    );
  }
  
  export default Book;