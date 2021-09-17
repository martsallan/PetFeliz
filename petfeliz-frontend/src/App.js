import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import ProductListPage from "./Pages/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./Pages/LoginPage";
import { logout } from "./actions/userActions";
import RegisterPage from "./Pages/RegisterPage";
import ShippingAddressPage from "./Pages/ShippingAddressPage";
import PlaceOrderPage from "./Pages/PlaceOrderPage";

function App() {


  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row j-space-between">
          <div className="">
            <Link className="brand" to="/">
              PetFeliz
            </Link>
          </div>
          <div className="">
            <Link to="/cart">
              Carrinho
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> </Link>
                  <ul className="dropdown-content">
                    <Link to="#logout" onClick={logoutHandler}>Sair</Link>
                  </ul>
                </div>
              ):
              (<Link to="/login" >Logar</Link>)
            }
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/" component={ProductListPage} exact></Route>
          <Route path="/produto/:id" component={ProductPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/registrar" component={RegisterPage}></Route>
          <Route path="/dados-entrega" component={ShippingAddressPage}></Route>
          <Route path="/finalizar-pedido" component={PlaceOrderPage}></Route>
        </main>
        <footer className="row center">
          {" "}
          Todos os direitos reservedos &copy;PetFeliz 2021-2021
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
