import { useRef, useState } from 'react';
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import classes from './Forms.module.css';

const isEmpty = (value) => value.trim() === '';

const CourseForm = (props) => { 
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        domain: true,
        description: true,
        author: true,
        url: true,
        price: true,
        duration: true
      });

    const nameInputRef = useRef();
    const domainInputRef = useRef();
    const descriptionInputRef = useRef();
    const authorInputRef = useRef();
    const urlInputRef = useRef();
    const priceInputRef = useRef();
    const durationInputRef = useRef();

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
    }`;
    const domainControlClasses = `${classes.control} ${
        formInputsValidity.domain ? '' : classes.invalid
    }`;
    const descriptionControlClasses = `${classes.control} ${
        formInputsValidity.description ? '' : classes.invalid
    }`;
    const authorControlClasses = `${classes.control} ${
        formInputsValidity.author ? '' : classes.invalid
    }`;
    const urlControlClasses = `${classes.control} ${
        formInputsValidity.url ? '' : classes.invalid
    }`;
    const priceControlClasses = `${classes.control} ${
        formInputsValidity.price ? '' : classes.invalid
    }`;
    const durationControlClasses = `${classes.control} ${
        formInputsValidity.duration ? '' : classes.invalid
    }`;

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };
    

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDomain = domainInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredAuthor = authorInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredDuration = durationInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredDomainIsValid = !isEmpty(enteredDomain);
        const enteredDescriptionIsValid = !isEmpty(enteredDescription);
        const enteredAuthorIsValid = !isEmpty(enteredAuthor);
        const enteredUrlIsValid = !isEmpty(enteredUrl);
        const enteredPriceIsValid = !isEmpty(enteredPrice);
        const enteredDurationIsValid = !isEmpty(enteredDuration);

        setFormInputsValidity({
            name: enteredNameIsValid,
            domain: enteredDomainIsValid,
            description: enteredDescriptionIsValid,
            author: enteredAuthorIsValid,
            url: enteredUrlIsValid,
            price: enteredPriceIsValid,
            duration: enteredDurationIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredDomainIsValid && enteredDescriptionIsValid && 
                            enteredAuthorIsValid && enteredUrlIsValid && enteredPriceIsValid && 
                            enteredDurationIsValid;

        if (!formIsValid) {
            return;
        }


        const courseColletion = collection(db, "courses");

        const course = {
            name: enteredName,
            domain: enteredDomain,
            description: enteredDescription,
            author: enteredAuthor,
            price: enteredPrice,
            duration: enteredDuration,
            imgUrl: enteredUrl
        };

        const query = addDoc(courseColletion, course);

        query
            .then((result) => {
                clearForm();
                console.log('added');
                handleHome();
            })
            .catch((error) => {
                toast.error(error.message)
            });

        
    };

    const clearForm = () => {
        nameInputRef.current.value = '';
        domainInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        authorInputRef.current.value = '';
        urlInputRef.current.value = '';
        priceInputRef.current.value = '';
        durationInputRef.current.value = '';
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={domainControlClasses}>
                <label htmlFor='domain'>Domain</label>
                <input type='text' id='domain' ref={domainInputRef}/>
                {!formInputsValidity.domain && <p>Please enter a valid domain!</p>}
            </div>
            <div className={descriptionControlClasses}>
                <label htmlFor='description'>Description</label>
                <input type='text' id='description' ref={descriptionInputRef}/>
                {!formInputsValidity.description && <p>Please enter a valid description!</p>}
            </div>
            <div className={authorControlClasses}>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author' ref={authorInputRef}/>
                {!formInputsValidity.author && <p>Please enter a valid author!</p>}
            </div><div className={urlControlClasses}>
                <label htmlFor='url'>Image URL</label>
                <input type='text' id='url' ref={urlInputRef}/>
                {!formInputsValidity.url && <p>Please enter a valid URL!</p>}
            </div>
            <div className={priceControlClasses}>
                <label htmlFor='price'>Price</label>
                <input type='number' id='price' ref={priceInputRef}/>
                {!formInputsValidity.price && <p>Please enter a valid price!</p>}
            </div>
            <div className={durationControlClasses}>
                <label htmlFor='duration'>Duration</label>
                <input type='number' id='duration' ref={durationInputRef}/>
                {!formInputsValidity.duration && <p>Please enter a valid duration!</p>}
            </div>
           
            <div className={classes.actions}>
                <button className={classes.submit}>+ Add</button>
            </div>
            
        </form>
    )
};

export default CourseForm;