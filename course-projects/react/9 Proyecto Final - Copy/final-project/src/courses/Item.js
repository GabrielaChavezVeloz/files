import { useNavigate } from "react-router-dom";

const Item = ({course}) => {

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/course/${course.id}`)

  };

  

  return (
    
    <div className="card">
      <h2>{course.name}</h2>
      <p><img src={course.imgUrl} alt="" className="cartImg"/></p>  
      <p>Domain: {course.domain}</p>
      <p>{course.description}</p>
      <p>{course.author}</p>
      <p>{course.price}</p>
      <p>{course.duration}</p>   
      <button onClick={handleDetail}>Details...</button>
    </div>  

  );
};

export default Item