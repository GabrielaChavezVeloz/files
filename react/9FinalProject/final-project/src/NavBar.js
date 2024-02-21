import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from './store/AuthContext';
import CartWidget from "./cart/CartWidget";
import UserWidget from './user/UserWidget';

const NavBar = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    ctx.setLogout();
    navigate('/auth?mode=login');
  };

  return (
        
      <nav className="nav">
        

        {ctx.isLoggedIn ? 
        <>
          <NavLink to="/courses"><h1>All Courses</h1></NavLink>
          <NavLink to="/addCourse" className="nav__link">Add Course</NavLink>
          <NavLink to="/domain/testing" className="nav__link">Testing</NavLink>
          <NavLink to="/domain/development" className="nav__link">Development</NavLink>
          <UserWidget/>
          <button onClick={logoutHandler}>Logout</button>
          {/* <NavLink to="/logout" className="nav__link">Logout</NavLink> */}
          <CartWidget/>
        </>
        :
        <NavLink to="/auth?mode=login" className="nav__link">Authentication</NavLink>
        }
        
        
      </nav>
        
   
  )
}

export default NavBar
