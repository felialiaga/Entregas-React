import { useState, useEffect } from "react";

// El efecto primario de React es renderizar componentes, manipulando el DOM

// Para poder manipular los efectos secundarios de los cambios de estado vamos a usar el Hook que se llama useEffect


const Contador = () => {

    const [contador, setContador] = useState(1);

    useEffect(() => {
        document.title = `Contador: ${contador}`;
    }, [contador]);

    // A useEffect le pasamos dos parametros, el primero una funcion caallback con el comportamiento que queramos y el segundo es un array de dependencias en donde colocamos el estado que queremos vigila. Cuando ese estado cambia ejecuta el callback

    const sumar = () => {
        setContador( contador + 1);
    }

    const restar = () => {
        setContador( contador - 1);
    }

  return (
    <div>
        <button onClick={restar}> - </button>
        <strong> {contador} </strong>
        <button onClick={sumar}> + </button>
    </div>
  )
}

export default Contador