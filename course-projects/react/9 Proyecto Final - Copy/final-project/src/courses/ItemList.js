import Item from "./Item"

const ItemList = ({courseList}) => {

  return (

    <div className="card-container">
      {courseList.map((course,indice)=>{
        return <Item key={course.id} course={course}/>
      })}
    </div>
    
  )
}

export default ItemList