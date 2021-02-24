import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import './App.css';
import Cart from './componets/cart/Cart';
import Goods from './componets/Goods/Goods';
import Nav from './componets/Nav/Nav';



const App = () => {

  // Initial state (Items on Goods Page)
  const [goods, setGoods] = useState([
    {id: 1, name: 'Banana', kg: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/627px-Banana.png', price: 10, discount: false},
    {id: 2, name: 'Apple', kg: 1, src: 'https://pngimg.com/uploads/apple/apple_PNG12439.png', price: 8, discount: false},
    {id: 3, name: 'Papaya', kg: 1, src: 'https://freepngimg.com/thumb/categories/1039.png', price: 10, discount: true},
  ]);

  // State for items in cart 
  const [inCart, setInCart] = useState([]);

  // Function for adding items in cart
  const onAddToCart = (id) => {
    let newItem = goods[id-1];
    let check = inCart.some(function(e) { 
      return e.name == newItem.name;
    });

    if(check) {alert('Item in your cart')}
    else {setInCart(inCart.concat(newItem))}
  };

  // Function for removing items from cart
  const onRemove = (id) => {
    setInCart(inCart.filter(cart => cart.id != id));
  };


  return (
    <div className='App'>
      <BrowserRouter>
          <Redirect to='/goods'/>
          <Nav />
          <Route path='/goods'> <Goods goods={goods} onAddToCart={onAddToCart} /> </Route>
          <Route path='/cart'> <Cart inCart={inCart} setInCart={setInCart} onRemove={onRemove} /> </Route>
      </BrowserRouter>   
    </div>
  );
}
 


export default withRouter (App);
