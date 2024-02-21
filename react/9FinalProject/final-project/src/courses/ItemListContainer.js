import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from "../firebase";
import {collection, getDocs, query, where, orderBy} from "firebase/firestore";
import { toast } from "react-toastify";
import Sort from "../sort/sort";

const ItemListContainer = () => {

  const [loading,setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const {id} = useParams();


    useEffect(() =>{

      const coursesCollection = collection(db,"courses");
      let search;

      if(id === undefined){
        
        search = getDocs(coursesCollection);
        
      } else if(id === "testing" || id === "development"){

        const filter = query(coursesCollection, where("domain","==",id));
        search = getDocs(filter);

      } else if(id === "name"){

        const filter = query(coursesCollection, orderBy('name', 'asc'));
        search = getDocs(filter);

      } else if(id === "price"){

        const filter = query(coursesCollection, orderBy('price', 'asc'));
        search = getDocs(filter);

      } else if(id === "rate"){

        const filter = query(coursesCollection, orderBy('avgRate', 'desc'));
        search = getDocs(filter);

      }

      search
          .then((result)=>{
        
            const courses = result.docs.map(doc=>{
              const courseWithId = doc.data();
              courseWithId.id = doc.id;
              return courseWithId;
            })
        
          setCourses(courses);
          setLoading(false);
          })
          .catch((error)=>{
            toast.error(error.message);
          });

      
    }, [id])

    if(loading){
      return (
        <div><p>Loading..</p></div>
      )
    }else{
      return (
        <>

            <Sort/>
            <ItemList courseList={courses}/>
    
        </>
        
      )
    }

}

export default ItemListContainer;