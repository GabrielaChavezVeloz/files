import PersonIcon from '@mui/icons-material/Person';
import { useContext } from "react";
import { NavLink } from 'react-router-dom';

import AuthContext from '../store/AuthContext';


const UserWidget = () => {

  const ctxUser = useContext(AuthContext);

  return (
        <>
             
            <NavLink to="/user">
              <span className="material-icons">
                <PersonIcon/>
              </span>
              { ctxUser.email }
            </NavLink>
        </>

        
         
         
     

  )
}

export default UserWidget;