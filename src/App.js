import Header from "./components/layouts/Header";
import AvailableProducts from "./components/products/AvailableProduct";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const App = () => {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (

    <CartProvider>
      

      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailableProducts />
      </main>
    </CartProvider>
  );
};

export default App;
