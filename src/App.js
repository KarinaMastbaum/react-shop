import React from 'react';
import data from "./data.json";
import Products from "./components/Products";
import logo from './img/logo.jpg';
import bag from './img/bag.png';
import Carousels from './components/Carousel';
// feature-1;


class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">
          <img className="logo" src={logo} alt="imageLogo"></img>
          </a>
          <div className="menu">
              <a className="inicio">Home</a>
              <a className="nosotros">Nosotros</a>
              <a className="contacto">Contacto</a>
          </div>
          <div className="sidebar">
              <img className="shoppingCart" src={bag} alt="bag"></img>
            </div>
        </header>
        <main className="fondo">
          <div>
          <Carousels />
          </div>
          <div className="envios">
            <h2 className="parrafoEnvios">ENVÍOS GRATIS A TODA LA REPÚBLICA ARGENTINA CON TU COMPRA DE $3.500</h2>
          </div>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
          </div>
        </main>
        <footer>
          Todos los derechos reservados.
        </footer>
      </div>
    );
 
  }
}

export default App;
