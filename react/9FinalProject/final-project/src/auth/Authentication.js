import { json, useNavigate } from 'react-router-dom';
import {db} from "../firebase";
import {collection, getDocs, query, where, addDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useContext } from 'react';

import AuthForm from './AuthForm';
import AuthContext from '../store/AuthContext';



let navigate;
let ctx;

function AuthenticationPage() {
   navigate = useNavigate();
   ctx = useContext(AuthContext);
  return <AuthForm />;
}


export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  
  

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  };

  const usersCollection = collection(db,"users");
  let search;

  if(mode ==='signup') {
   const filter = query(usersCollection, where("email","==",authData.email));
   search = getDocs(filter);
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
         toast.error('The user already exists');
      } else {
         const query = addDoc(usersCollection, authData);

         query
            .then((result) => {
               console.log('New user added');
               toast.success('New user added');
               navigate('/auth?mode=login');
            })
            .catch((error) => {
               toast.error(error.message)
            });
      }

      })
      .catch((error)=>{
         toast.error(error.message);
      });

   
  } else if (mode === 'login') {

   const filter = query(usersCollection, where("email","==",authData.email));
   search = getDocs(filter);
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
         
         if(user[0].email === authData.email && user[0].password === authData.password) {
            //context user
            ctx.setLogin(authData.email, user[0].id);
            console.log('user: ' + ctx.email);
            navigate('/');
         } else{
            toast.error('User and/or password invalid!');
         }
      } else {
         toast.error('User and/or password invalid!');
      }

      })
      .catch((error)=>{
         toast.error(error.message);
      });


  }

  return null;
}
