import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"

import CartProvider from './store/CartContext';
import Header from './Header';
import Main from './Main';




const App = () => {
    return (
        <BrowserRouter>
          <CartProvider>
            <Header/>
            <Main/>
          </CartProvider>
          <ToastContainer/>
        </BrowserRouter>
            
    
     )
   
   
}

export default App;