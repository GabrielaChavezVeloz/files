import { memo } from "react";
import { useState, useEffect } from "react";
import {db} from "../firebase";
import { collection, getDocs, query, where} from "firebase/firestore";
import { toast } from "react-toastify";
import StarRateIcon from '@mui/icons-material/StarRate';


const ReviewItem = ({review}) => {

    const [user, setUser] = useState();

    useEffect(() =>{
        if(review.anonymous) {
            setUser('Anonymous');
        } else {
    
            const coursesCollection = collection(db,"users");
            const filter = query(coursesCollection, where("email","==",review.email));
            const search = getDocs(filter);
            let users;
    
            search
                .then((result)=>{
                    users = result.docs.map(doc=>{
                        const tempUser = doc.data();
                        tempUser.id = doc.id;
                        return tempUser;
                    });
                    
                    
                if(users.length === 1){
                    setUser(users[0].displayName);
                    
                } else {
                    toast.error('User invalid!');
                }
    
                })
                .catch((error)=>{
                    toast.error(error.message);
                });
            
        }

    }, [review]);


    

  return (
    <div className="cartList">
        <div>
            <h2>{user}</h2>
            <div>
                {review.rate} <StarRateIcon/> 
            
            </div>
							
            <p>{review.review}</p>
            
            
           
            
        </div>
    </div>
  );
};

export default memo(ReviewItem);