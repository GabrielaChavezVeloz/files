import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db} from "../firebase";
import {deleteDoc, doc, collection, getDocs, query, where} from "firebase/firestore";
import { toast } from "react-toastify";
import StarRateIcon from '@mui/icons-material/StarRate';

import { context } from '../store/CartContext';
import ReviewList from "../rating/ReviewList";


const ItemDetail =({item}) => {

    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    
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


    const handleReview = () => {
      navigate(`/review/${item.id}`);

    };

    useEffect(() =>{
      const coursesCollection = collection(db,"reviews");
      const filter = query(coursesCollection, where("courseId","==",item.id));
      const search = getDocs(filter);

      search
          .then((result)=>{
        
            const reviews = result.docs.map(doc=>{
              const reviewWithId = doc.data();
              reviewWithId.id = doc.id;
              return reviewWithId;
            })
        
          setReviews(reviews);
        })
          .catch((error)=>{
            toast.error(error.message);
          });
      
    }, [item.id]);

    // useEffect(() =>{
    //   const coursesCollection = collection(db,"reviews");
    //   const filter = query(coursesCollection, where("courseId","==",item.id));
    //   const search = getDocs(filter);

    //   search
    //       .then((result)=>{
        
    //         const reviews = result.docs.map(doc=>{
    //           const reviewWithId = doc.data();
    //           reviewWithId.id = doc.id;
    //           return reviewWithId;
    //         })
        
    //       setReviews(reviews);

    //       let sum = 0;
    //       let avg = 0;

    //       for(let i=0; i<reviews.length; i++){
    //         sum += reviews[i].rate;
    //         console.log(reviews[i].rate);
    //       }

    //       avg = sum/reviews.length;

    //       setAverage(avg);

    //     })
    //       .catch((error)=>{
    //         toast.error(error.message);
    //       });
      
    // }, [item.id]);


  return(
    <>
        <div className="detail">
        <div>
          <p><img src={item.imgUrl} alt="" className="itemImg"/></p>
          {/* {average ? average : 0}  <StarRateIcon/>  */}
          {item.avgRate ? item.avgRate : 0}  <StarRateIcon/> 
        </div>
        
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Domain: {item.domain}</p>
        <p>Author: {item.author}</p>
        <p>Precio: ${item.price}</p>
        <p>Duration: {item.duration} hours</p>

        </div>
        <div>
            <button onClick={handleDelete}>Delete Course</button>
        </div>
        <div>
            <button onClick={handleAddCourse}>Add to Cart</button>
        </div>
        <div>
        <button onClick={handleReview}>Add Review</button>
        </div>

        <hr/>
        <h2>Reviews</h2>
        <ReviewList reviews={reviews}/>
    </>
    
  );

  
};

export default ItemDetail;