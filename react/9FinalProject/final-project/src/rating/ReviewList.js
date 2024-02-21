import { memo } from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews}) => {
    return (
        <ul>
            {reviews.map(review=>{
                return <ReviewItem key ={review.id} review={review}/>
            })}
        </ul>
      
    )
  
}

export default memo(ReviewList);