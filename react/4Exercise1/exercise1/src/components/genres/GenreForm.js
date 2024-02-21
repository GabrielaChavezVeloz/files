import { useRef, useState } from 'react';
import classes from '../Layout/Forms.module.css';

const isEmpty = (value) => value.trim() === '';

const GenreForm = (props) => {
    
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true
      });

    const nameInputRef = useRef();
    
    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);

        setFormInputsValidity({
            name: enteredNameIsValid
        });

        const formIsValid = enteredNameIsValid;

        if (!formIsValid) {
            return;
        }
        
        props.onAddGenre({
            id: Math.floor(Math.random() * 1000),
            name: enteredName
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
           
            <div className={classes.actions}>
                <button className={classes.submit}>+ Add</button>
            </div>
            
        </form>
    )
};

export default GenreForm;