import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import { toast } from "react-toastify";

import { context } from "../store/CartContext";
import CartList from "./CartList";
import classes from './Forms.module.css';



const Cart = () => {

  const ctxCart = useContext(context);

  const [buyId, setBuyId] = useState("");

  const isEmpty = (value) => value.trim() === '';
  
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };


  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    creditCard: true
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const creditCardInputRef = useRef();

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? '' : classes.invalid
  }`;

  const creditCardControlClasses = `${classes.control} ${
    formInputsValidity.creditCard ? '' : classes.invalid
  }`;

  const confirmHandler = (event) => {

    // const usuarioNombre = nombre === "" ? "Default Nombre" : nombre;
    // const usuarioDireccion = direccion === "" ? "Default Direccion" : direccion;
    // const usuarioTelefono = telefono === "" ? "123456" : telefono;
    // const usuarioEmail = email === "" ? "test@test.com" : email;

    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCreditCard = creditCardInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredCreditCardIsValid = !isEmpty(enteredCreditCard);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      creditCard: enteredCreditCardIsValid
    });

    const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredCreditCardIsValid;

    if (!formIsValid) {
        return;
    }



    const ordersCollection = collection(db,"orders");

    const order = {
      buyer : {
        name : enteredName,
        email : enteredEmail,
        creditCard : enteredCreditCard
      },
      items : ctxCart.cart,
      date : Date.now(),
      total : ctxCart.totalPrice
    };

   const query = addDoc(ordersCollection, order);

    query
      .then((resultado)=>{
        setBuyId(resultado.id);
        ctxCart.clearCart();
        clearForm();
        console.log('added');
      })
      .catch((error)=>{
        toast.error(error.message)
      });


  }

  const clearForm = () => {
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    creditCardInputRef.current.value = '';
  };

return(
  ctxCart.totalAmount>0 
  ?<div>
    <div><h1>Added Courses</h1></div>
    <CartList cart={ctxCart.cart} />
    <h1>Total Price: ${ctxCart.totalPrice}</h1>
  
    {/* <div>
      <h3>Payment Information</h3>
      <p>Nombre: <input type="text" onChange={handleNombre}/></p>
      <p>Dirección: <input type="text" onChange={handleDireccion}/></p>
      <p>Teléfono: <input type="text" onChange={handleTelefono}/></p>
      <p>email: <input type="text" onChange={handleEmail}/></p>
    </div>
    <button onClick={guardarCompra}>Checkout</button> */}
    
    <hr/>
    <div>
      <h3>Payment Information</h3>

      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={emailControlClasses}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef}/>
            {!formInputsValidity.email && <p>Please enter a valid email!</p>}
        </div>
        <div className={creditCardControlClasses}>
            <label htmlFor='creditCard'>Credit Card</label>
            <input type='text' id='creditCard' ref={creditCardInputRef}/>
            {!formInputsValidity.creditCard && <p>Please enter a valid Credit Card number!</p>}
        </div>
        
        <div className={classes.actions}>
            <button className={classes.submit}>Checkout</button>
        </div>
        
      </form>
    </div>
    {buyId && <h3>Buy ID: {buyId}</h3>}
                                                                                                                                                   
  </div>  
  :
  buyId===""
  ?<div>
    <div><h1>Empty Cart!</h1></div>
    <button onClick={handleHome}>Start Buying!</button>
  </div>
  :<div>
    <div><h3>Buy ID: {buyId}</h3></div>
    <button onClick={handleHome}>Buy!</button>
  </div>
    

)


 
}

export default Cart;