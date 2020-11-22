import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Carousels from './components/Carousel';
import Cart from "./components/Cart";
import logo from './img/logo.jpg';
import bag from './img/bag.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: []
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
  };
  
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  sortProducts = (event) => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.event) >= 0
        ),
      });
    } 
  };
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
          <div>
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
            <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div  className="sidebar">
              <Cart 
              cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}
              />
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
