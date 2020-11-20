import React from 'react';
import Carrousel from './components/Carrousel';
import carrousel from './components/Carrousel';

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">Kari Shop</a>
      </header>
      <main className="fondo">
        {/* <Carrousel/> */}
        Productos
      </main>
      <footer>
        Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
