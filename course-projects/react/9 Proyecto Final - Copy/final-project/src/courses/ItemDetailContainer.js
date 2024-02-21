import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {db} from "../firebase"
import { getDoc, doc, collection} from  "firebase/firestore"
import { toast } from "react-toastify"

const ItemDetailContainer =() => {

  const [item, setItem] = useState([])
  const {id} = useParams()
  const [loading, setLoading] = useState(true)

    useEffect(() =>{

        const coursesCollection = collection(db,"courses")
        const resultDoc = doc(coursesCollection, id)
        const query = getDoc(resultDoc)
        
        query  
          .then((result) => {
            const data = result.data()
            data.id=result.id;
            setItem(data)
            setLoading(false)
          })
          .catch((error) => {
            toast.error(error.message)
          })
    })

    if(loading){
      return (
        <p>Loading...</p>
      )
    } else{
      return(
     
        <ItemDetail item={item}/>
      )
    }

}

export default ItemDetailContainer