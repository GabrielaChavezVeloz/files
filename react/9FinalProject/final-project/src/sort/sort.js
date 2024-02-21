import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import Select from 'react-select';

import AuthContext from "../store/AuthContext";

const Sort = () => {
    const navigate = useNavigate();
    const ctxUser = useContext(AuthContext);

    const options = [
        { value: 'name', label: 'Name' },
        { value: 'price', label: 'Price' },
        { value: 'rate', label: 'Best Rated'}
      ];

    const handleSort = (selectedOption) => {
        console.log(selectedOption.value);
        navigate(`/sort/${selectedOption.value}`);
    };

    return(
        <>
             {
                ctxUser.isLoggedIn 
                ? <div className="sort">
                    <h3>Sort by: </h3>
                    <Select options={options}  defaultValue='Sort by' onChange={handleSort}/>
                </div>
                : null  
            }
        </>
       
    );

}

export default Sort;