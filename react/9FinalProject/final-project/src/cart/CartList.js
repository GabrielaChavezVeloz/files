import { memo } from "react";
import CartItem from "./CartItem";

const CartList = ({cart, isCart}) => {
    return (
        <ul>
            {cart.map(item=>{
                return <CartItem key ={item.item.id} item={item} isCart={isCart}/>
            })}
        </ul>
      
    )
  
}

export default memo(CartList)