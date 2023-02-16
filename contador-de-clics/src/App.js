import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoCounter from './imagenes/logo-counter.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarBoton = () =>{
    setNumClics(numClics + 1);
  };

  const resetCounter = () =>{
    setNumClics(0);
  };


  return (
    <div className="App">
    <div className='logo-contenedor'>
      <img className='logo' src={logoCounter} alt='logo'/>
    </div>
    <div className='contenedor-principal'>
      <Contador 
      numClics={numClics}/>
      <Boton 
      texto='Click'
      esBotonDeClic={true}
      manejarBoton={manejarBoton} />
      <Boton 
      texto='Reset'
      esBotonDeClic={false}
      manejarBoton={resetCounter} />
    </div>
    </div>
  );
}

export default App;
