import { useContext, useState, useEffect } from 'react';
import {db} from "../firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import { toast } from "react-toastify";

import AuthContext from '../store/AuthContext';
import CartList from "../cart/CartList";
import UserUpdate from "./UserUpdate";

const User = () => {
    const ctxUser = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        const coursesCollection = collection(db,"courseByUser");
        const filter = query(coursesCollection, where("userId","==",ctxUser.userId));
        const search = getDocs(filter);

        search
            .then((result)=>{
            
                const courses = result.docs.map(doc=>{
                const courseWithId = doc.data();
                courseWithId.id = doc.id;
                return courseWithId;
                })
            
            setCourses(courses);
            })
            .catch((error)=>{
                toast.error(error.message);
            });
    }, [ctxUser.userId]);
    

    return(
        <>
            <UserUpdate/>
            <div>
                <div><h1>Enrolled Courses</h1></div>
                <CartList cart={courses} isCart={false}/>
            </div>
        </>
       

    );
};

export default User;