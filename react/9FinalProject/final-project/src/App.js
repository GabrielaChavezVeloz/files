import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartProvider from './store/CartContext';
import { AuthContextProvider } from './store/AuthContext';
import Main from './Main';
import ItemListContainer from './courses/ItemListContainer';
import ItemDetailContainer from './courses/ItemDetailContainer';
import CourseForm from './courses/CourseForm';
import Cart from './cart/Cart';
import AuthenticationPage, { action as authAction } from './auth/Authentication';
import User from './user/User';
import { checkAuthLoader } from './util/auth';
import Home from './Home';
import UserUpdate, { action as userAction } from './user/UserUpdate';
import Rate from './rating/Review';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      { index: true, element: <Home/> },
      {
        path: '/courses',
        element: <ItemListContainer/>
      },
      {
        path: '/domain/:id',
        element: <ItemListContainer/>
      },
      {
        path: '/sort/:id',
        element: <ItemListContainer/>
      },
      {
        path: '/course/:id',
        element: <ItemDetailContainer/>,
        loader: checkAuthLoader
      },
      {
        path: '/addCourse',
        element: <CourseForm/>,
        loader: checkAuthLoader
      },
      {
        path: '/cart',
        element: <Cart/>,
        loader: checkAuthLoader
      },
      {
        path: '/review/:id',
        element: <Rate/>,
        loader: checkAuthLoader
      },
      {
        path: '/auth',
        element: <AuthenticationPage/>,
        action: authAction
      },
      {
        path: '/user',
        element: <User/>,
        action: userAction,
        loader: checkAuthLoader
      },
      {
        path: '/userUpdate',
        element: <UserUpdate/>,
        action: userAction,
        loader: checkAuthLoader
      }
    ]
  }
]);


const App = () => {
    return (
        <>
          <AuthContextProvider>
            <CartProvider>
              <RouterProvider router={router}/>
    
            </CartProvider>
          </AuthContextProvider>
          
          <ToastContainer/>
        </>
    
     )
   
   
}

export default App;