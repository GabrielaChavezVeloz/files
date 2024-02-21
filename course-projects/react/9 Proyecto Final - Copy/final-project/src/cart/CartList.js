import { memo } from "react";
import CartItem from "./CartItem";

const CartList = ({cart}) => {
    return (
        <ul>
            {cart.map(item=>{
                return <CartItem key ={item.item.id} item={item}/>
            })}
        </ul>
      
    )
  
}

export default memo(CartList)