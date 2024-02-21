import { useNavigate } from 'react-router-dom';
import {db} from "../firebase";
import {collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

import UserForm from "./UserForm";

let navigate;

function UserUpdate() {
    navigate = useNavigate();
    return <UserForm/>;
};

export default UserUpdate;

export async function action({ request }) {
  
    const data = await request.formData();
    const userData = {
      id: 0,
      email: data.get('email'),
      password: data.get('password'),
      displayName: data.get('displayName'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      about: data.get('about'),
      domain: data.get('domain')
    };
  
    const usersCollection = collection(db,"users");
  
    const filter = query(usersCollection, where("email", "==", userData.email));
    const search = getDocs(filter);
    let user;

    search
      .then((result)=>{

         user = result.docs.map(doc=>{
            const tempUser = doc.data();
            tempUser.id = doc.id;
            return tempUser;
          });
         
         console.log('user');
         console.log(user);
      if(user.length === 1){
         
       
        updateDoc(doc(db, "users",  user[0].id), {
            email: userData.email,
            password: userData.password,
            displayName: userData.displayName,
            firstName: userData.firstName,
            lastName: userData.lastName,
            about: userData.about,
            domain: userData.domain
        })
        .then((result) => {
            console.log('User Updated');
            toast.success('User Updated');
            navigate('/courses');
        })
        .catch((error) => {
            toast.error(error.mesage);
        });;


      } else {
         toast.error('User invalid!');
      }

      })
      .catch((error)=>{
         toast.error(error.message);
      });
  
    return null;
  }
  