import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../firebase";
import {deleteDoc, doc} from "firebase/firestore";
import { toast } from "react-toastify";

import { context } from '../store/CartContext';


const ItemDetail =({item}) => {

    const navigate = useNavigate();

    const ctxCart = useContext(context);

    const handleHome = () => {
        navigate('/');
      };
    
    const handleDelete = async () => {

        await deleteDoc(doc(db, "courses", item.id))
                .then((result) => {
                handleHome();
                console.log('deleted');
                })
                .catch((error) => {
                toast.error(error.mesage);
                });
    
    };

    const handleAddCourse = () => {
        ctxCart.addItem(item);
    };

  return(
    <>
        <div className="detail">
        <p><img src={item.imgUrl} alt=""/></p>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>Domain: {item.domain}</p>
        <p>Author: {item.author}</p>
        <p>Precio: {item.price}</p>
        <p>Duration: {item.duration}</p>

        </div>
        <div>
            <button onClick={handleDelete}>Delete Course</button>
        </div>
        <div>
            <button onClick={handleAddCourse}>Add to Cart</button>
        </div>
    </>
    
  );

  
};

export default ItemDetail;