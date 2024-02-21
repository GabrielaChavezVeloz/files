import { useNavigate } from "react-router-dom";

import StarRateIcon from '@mui/icons-material/StarRate';

const Item = ({course}) => {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/course/${course.id}`);

  };

  // useEffect(() =>{
  //   const reviewCollection = collection(db,"reviews");
  //   const filter = query(reviewCollection, where("courseId","==",course.id));
  //   const search = getDocs(filter);

  //   search
  //       .then((result)=>{
      
  //         const reviews = result.docs.map(doc=>{
  //           const reviewWithId = doc.data();
  //           reviewWithId.id = doc.id;
  //           return reviewWithId;
  //         })
      
  //       setReviews(reviews);
  //       console.log(reviews);

  //       let sum = 0;
  //       let avg = 0;

  //       for(let i=0; i<reviews.length; i++){
  //         sum += reviews[i].rate;
  //         console.log(reviews[i].rate);
  //       }

  //       avg = sum/reviews.length;

  //       setAverage(avg);
  //       })
  //       .catch((error)=>{
  //         toast.error(error.message);
  //       });
    
  // }, [course.id]);


  

  return (
    
    <div className="card">
      <h2>{course.name}</h2>    
      <div>
        <p><img src={course.imgUrl} alt="" className="cartImg"/></p>  
          {/* {average ? average : 0}  <StarRateIcon/> */}
          {course.avgRate ? course.avgRate : 0}  <StarRateIcon/> 
      </div>
      <p>Domain: {course.domain}</p>
      <p>{course.description}</p>
      <p>Author: {course.author}</p>
      <p>Price: ${course.price}</p>
      <p>Duration: {course.duration} minutes</p>   
      <button onClick={handleDetail}>Details...</button>
    </div>  

  );
};

export default Item