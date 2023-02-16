import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({texto, esBotonDeClic, manejarBoton}){
    return(
      <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
      onClick={manejarBoton}>
        {texto}
      </button>
    )
}

export default Boton;