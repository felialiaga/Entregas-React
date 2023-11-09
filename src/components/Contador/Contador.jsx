import { useState } from "react";
import "./Contador.css";

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

   

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > inicial) {
            setContador( contador - 1);
        }
    }

  return (
    <>
        <div className="contador">
            
            <div className="cantidades">
                <button onClick={restar} className="btn restar"> - </button>
                <strong className="cantidad"> {contador} </strong>
                <button onClick={sumar} className="btn sumar"> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className="agregar btn"> Agregar al carrito </button>

        </div>
    </>
  )
}

export default Contador