const Author = (props) => {
  
    return (
      <>
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.nacionality}</div>
            </div>
        </li>
      </>
      
    );
  }
  
  export default Author;