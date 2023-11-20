import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  const admin = false;


  {
    if (admin === false) {
      return (
        <header>
          <Link to="/">
            <img src="../../../public/apple.png" alt="Logo de Apple" className="logo-apple" />
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

              <li>
                <NavLink className='link' to= "categoria/6"> Accesorios </NavLink>
              </li>

              <li>
                <NavLink className='link' to= "categoria/7"> Sonido </NavLink>
              </li>
            </ul>
          </nav>

          {/* <button className="soy-admin" type="submit" > Soy Admin </button> */}

          <CartWidget/>

        </header>
      )
         
  } else {
    return (

     <header>

        <Link to="/">
          <img src="../../../public/apple.png" alt="Logo de Apple" className="logo-apple" />
        </Link>

        <NavLink className= 'link' to= '/crear-producto' > Crear Producto </NavLink>

     </header>

    )   
  }
 }
}
export default NavBar