import { memo } from "react";
import { useContext } from "react";

import { context } from "../store/CartContext";

const CartItem = ({item}) => {

    const ctxCart = useContext(context);

    const handlerDelete = () => {
        ctxCart.removeItem(item.item.id);
    }

  return (
    <div className="cartList">
        <div className="cartItem"><img className="cartImg" src={item.item.imgUrl} alt=""/></div>
        <div>
            <h3>{item.item.name}</h3>
            <p>{item.item.description}</p>
            <p>Precio: ${item.item.price}</p>
            <button onClick={handlerDelete}>Remove</button>
        </div>
    </div>
  );
};

export default memo(CartItem);