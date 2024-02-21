import { useRef, useState } from 'react';
import classes from '../Layout/Forms.module.css';

const isEmpty = (value) => value.trim() === '';

const AuthorForm = (props) => {
    
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        nacionality: true
      });

    const nameInputRef = useRef();
    const nacionalityInputRef = useRef();
    
    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;

    const nacionalityControlClasses = `${classes.control} ${
        formInputsValidity.nacionality ? '' : classes.invalid
    }`;

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredNacionality = nacionalityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredNacionalityIsValid = !isEmpty(enteredNacionality);

        setFormInputsValidity({
            name: enteredNameIsValid,
            nacionality: enteredNacionality
        });

        const formIsValid = enteredNameIsValid && enteredNacionalityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onAddAuthor({
            id: Math.floor(Math.random() * 10),
            name: enteredName,
            nacionality: enteredNacionality
        });

        nameInputRef.current.value = '';
        nacionalityInputRef.current.value = '';
    };
    

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={nacionalityControlClasses}>
                <label htmlFor='nacionality'>Nacionality</label>
                <input type='text' id='nacionality' ref={nacionalityInputRef}/>
                {!formInputsValidity.nacionality && <p>Please enter a valid nacionality!</p>}
            </div>
           
            <div className={classes.actions}>
                <button className={classes.submit}>+ Add</button>
            </div>
            
        </form>
    )
};

export default AuthorForm;