import { useContext, useRef, useState } from 'react';
import classes from '../Layout/Forms.module.css';
import AuthorsContext from '../../store/authors-context';
import GenresContext from '../../store/genres-context';

const isEmpty = (value) => value.trim() === '';

const BooksForm = (props) => {

    const autCtx = useContext(AuthorsContext);
    const genCtx = useContext(GenresContext);

    // for(let i= 0; i<autCtx.authors.length; i++){
    //     console.log(autCtx.authors[i]);
    // }

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        author: true,
        genre: true
    });

    const nameInputRef = useRef();
    const authorInputRef = useRef();
    const genreInputRef = useRef();

    
    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;

    const authorControlClasses = `${classes.control} ${
        formInputsValidity.author ? '' : classes.invalid
    }`;

    const genreControlClasses = `${classes.control} ${
        formInputsValidity.genre ? '' : classes.invalid
    }`;

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;
        const enteredGenre = genreInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAuthorIsValid = !isEmpty(enteredAuthor);
        const enteredGenreIsValid = !isEmpty(enteredGenre);


        setFormInputsValidity({
            name: enteredNameIsValid,
            author: enteredAuthor,
            genre: enteredGenre
        });

        const formIsValid = enteredNameIsValid && enteredAuthorIsValid && enteredGenreIsValid;

        if (!formIsValid) {
            return;
        }

        props.onAddBook({
            id: Math.floor(Math.random() * 10),
            name: enteredName,
            author: enteredAuthor,
            genre: enteredGenre
        });

        nameInputRef.current.value = '';
        
    
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={authorControlClasses}>
                {/* 
                <input type='select' id='author' ref={authorInputRef} />
                 */}
                <label htmlFor='author'>Author</label>
                <select id='author' ref={authorInputRef}>
                    {autCtx.authors.map((author) => (
                        <option key={author.id} value={author.name}>{author.name}</option>
                    ))}
                </select>
                {!formInputsValidity.author && <p>Please enter a valid author!</p>}
            </div>
            <div className={genreControlClasses}>
                <label htmlFor='genre'>Genre</label>
                {/* <input type='text' id='genre' ref={genreInputRef}/> */}
                <select id='genre' ref={genreInputRef}>
                    {genCtx.genres.map((genre) => (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    ))}
                </select>
                {!formInputsValidity.genre && <p>Please enter a valid genre!</p>}
            </div>
           
            <div className={classes.actions}>
                <button className={classes.submit}>+ Add</button>
            </div>
            
        </form>
    )
};

export default BooksForm;