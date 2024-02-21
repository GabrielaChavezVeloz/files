import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore"
import { toast } from "react-toastify"

const ItemListContainer = () => {

  const [loading,setLoading] = useState(true)
  const [courses, setCourses] = useState([])
  const {id} = useParams()


    useEffect(() =>{

      const coursesCollection = collection(db,"courses")
      let consulta

      if(id===undefined){
        
        consulta = getDocs(coursesCollection)
        
      }else{

        const filter = query(coursesCollection, where("domain","==",id))
        consulta = getDocs(filter)

      }

      consulta
          .then((result)=>{
        
            const courses = result.docs.map(doc=>{
              const courseWithId = doc.data()
              courseWithId.id = doc.id
              return courseWithId
            })
        
          setCourses(courses)
          setLoading(false)
          })
          .catch((error)=>{
            toast.error(error.message)
          })

      
    }, [id])

    if(loading){
      return (
        <div><p>Loading..</p></div>
      )
    }else{
      return (
        <>
    
            
            <ItemList courseList={courses}/>
    
        </>
        
      )
    }

}

export default ItemListContainer