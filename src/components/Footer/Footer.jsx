import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            
            <NavLink to= '/' className= 'footerName' >
                <div className="footerLogo">
                    <img src="../../public/apple.png" alt="Apple" className='footerImg' />
                    <h2 className='footerName' >Apple</h2>
                </div>
            </NavLink>

            <div className='footerContacto' >

                <h4> Contactanos </h4>

                <div className="red">
                    <i class="fa-solid fa-envelope"></i>
                    <p> felialiagaa@gmail.com </p>
                </div>

                <div className="red">
                    <i class="fa-solid fa-phone"></i>
                    <p> 261 460 0533 </p>
                </div>

                <p className='horarios' > Horario de Atencion de 8hs a 20hs </p>

            </div>

            <div className="footerNosotros">

                <div className="nosotros">
                    <h4> Sobre Nosotros </h4>

                    <p>
                        Somos un equipo que se dedica a la venta de productos Apple, originales y importados de sus tiendas Oficiales
                    </p>
                </div>

                <div className="ubicaciones">
                    <h4> Podes encontrarnos en: </h4>

                    <div className="ubi">
                        <i class="fa-solid fa-map-pin"></i>
                        <p> Mendoza Plaza Shoping </p>
                    </div>

                    <div className="ubi">
                        <i class="fa-solid fa-map-pin"></i>
                        <p> Chacras Park Mendoza </p>
                    </div>
                 
                </div>

            </div>

            <div className="footerRedes">

                <h4>Siguenos en nuestras Redes</h4>

                <div className="red">
                    <i class="fa-brands fa-instagram"></i>
                    <p> feli.aliaga </p>
                </div>
                <div className="red">
                    <i class="fa-brands fa-twitter"></i>
                    <p> felialiagaa </p>
                </div>
            </div>

            <div className="footerCopyright">
                <b> Apple  <i class="fa-regular fa-copyright"></i>  Todos los derechos reservados.</b>
            </div>

        </footer>
    )
}

export default Footer