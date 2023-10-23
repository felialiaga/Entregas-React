import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    
    <header>
        <Link to="/">
          <h1>Tecnologie Shop</h1>
        </Link>

        <nav>
            <ul>
              <li>
                <NavLink to= "categoria/2"> Celulares </NavLink>
              </li>

              <li>
                <NavLink to= "categoria/3"> Relojes </NavLink>
              </li>

              <li>
                <NavLink to= "categoria/4"> Auriculares </NavLink>
              </li>

              <li>
                <NavLink to= "categoria/5"> Tv </NavLink>
              </li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>

  )
}

export default NavBar