import { createContext, useState} from "react";
import { toast } from "react-toastify";

export const context = createContext();
const { Provider } = context;

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item) =>{
        if(!isInCart(item.id)){
            setCart([...cart, {item}]);
            setTotalPrice(totalPrice + +item.price);
            setTotalAmount(totalAmount + 1);
        }else{
            toast.info("The product is in the cart!");
        }
    }

    const removeItem = (itemId) => {
        let item = getItem (itemId);

        setTotalPrice(totalPrice - item.item.price);
        setTotalAmount(totalAmount - 1);

        setCart(cart.filter(item=>item.item.id!==itemId));

    }

    const clearCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotalPrice(0);
    }

    const isInCart = (id) => {
        let result = cart.find((item) => item.item.id === id);
        if(result !== undefined){
            return true;
        }else{
            return false;
        }
    }

    const getItem = (id) => {
        return cart.find((item) => item.item.id === id);
    }

    const cartContext = {
        totalAmount,
        totalPrice,
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart
    }

    return (
        <Provider value={cartContext}>
            {children}
        </Provider>
      )
}

export default CartProvider;