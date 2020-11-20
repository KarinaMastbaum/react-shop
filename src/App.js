import React from 'react';
import data from "./data.json";
import Products from "./components/Products";
import logo from './img/logo.jpg';
import carrito from './img/carrito.png';

// import Carrousel from './components/Carrousel';
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
          <div className="sidebar">
              <img className="shoppingCart" src={carrito} alt="carrito"></img>
            </div>
        </header>
        <main className="fondo">
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
