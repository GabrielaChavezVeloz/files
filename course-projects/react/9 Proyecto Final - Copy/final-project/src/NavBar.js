import CartWidget from "./cart/CartWidget"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
        
      <nav className="nav">
        <Link to="/"><h1>Courses App</h1></Link>
        <Link to="/addCourse" className="nav__link">Add Course</Link>
        <Link to="/domain/testing" className="nav__link">Testing</Link>
        <Link to="/domain/development" className="nav__link">Development</Link>
        
        <CartWidget/>
      </nav>
        
   
  )
}

export default NavBar
