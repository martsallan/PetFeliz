import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import { useSelector } from 'react-redux';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;


  return (
    <BrowserRouter>
      <div className="grid-container">
            <header className="row j-space-between">
                <div className="">
                    <Link className="brand" to="/">PetFeliz</Link>
                </div>
                <div className="">
                    <Link to="/cart">Carrinho 
                    {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )}
                    </Link>
                    <Link to="/signin">Logar</Link>
                </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/produto/:id' component={ProductPage}></Route>
        </main>
        <footer className="row center"> Todos os direitos reservedos &copy;PetFeliz 2021-2021</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
