import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../store/CartContext";


const CartWidget = () => {

  const ctxCart = useContext(context);

  return (
        <>
             
            <Link to="/cart">
              <span className="material-icons">
                <ShoppingCartIcon/>
              </span>
              $ {ctxCart.totalPrice}
            </Link>
        </>

        
         
         
     

  )
}

export default CartWidget