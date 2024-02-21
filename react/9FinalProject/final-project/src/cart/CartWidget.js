import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { context } from "../store/CartContext";
import { NavLink } from 'react-router-dom';


const CartWidget = () => {

  const ctxCart = useContext(context);

  return (
        <>
             
            <NavLink to="/cart">
              <span className="material-icons">
                <ShoppingCartIcon/>
              </span>
              $ {ctxCart.totalPrice}
            </NavLink>
        </>

        
         
         
     

  )
}

export default CartWidget