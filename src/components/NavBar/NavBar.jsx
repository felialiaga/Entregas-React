import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    
    <header>
        <Link to="/">
          <h1 className="link">Tecnologie Shop</h1>
        </Link>

        <nav>
            <ul>
              <li>
                <NavLink className='link' to= "categoria/2"> Celulares </NavLink>
              </li>

              <li>
                <NavLink className='link' to= "categoria/3"> Relojes </NavLink>
              </li>

              <li>
                <NavLink className='link' to= "categoria/4"> Auriculares </NavLink>
              </li>

              <li>
                <NavLink className='link' to= "categoria/5"> Tv </NavLink>
              </li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>

  )
}

export default NavBar