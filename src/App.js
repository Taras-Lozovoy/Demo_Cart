import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import './App.css';
import Cart from './componets/cart/Cart';
import Goods from './componets/Goods/Goods';
import Nav from './componets/Nav/Nav';



const App = () => {

  // Initial state (Items on Goods Page)
  const [goods, setGoods] = useState([
    {id: 1, name: 'Banana', kg: 1, countedPrice: '', itemIn: false,
     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/627px-Banana.png', price: 10, discount: false},
    {id: 2, name: 'Apple', kg: 1, countedPrice: '', itemIn: false,
     src: 'https://pngimg.com/uploads/apple/apple_PNG12439.png', price: 8, discount: false},
    {id: 3, name: 'Papaya', kg: 1, countedPrice: '', itemIn: false,
     src: 'https://freepngimg.com/thumb/categories/1039.png', price: 10, discount: true},
  ]);

  // State for items in cart 
  const [inCart, setInCart] = useState([]);
  let [newItem, setNewItem] = useState('');
  let [total, setTotal] = useState(0);

  // Function for adding and setting items in cart
  const onAddToCart = (id, kg) => {
    setNewItem(newItem = goods[id-1]);
    setNewItem(newItem.kg = kg);
    if(kg>3 && newItem.discount) setNewItem(newItem.countedPrice = (newItem.price * newItem.kg) - (Math.floor(newItem.kg / 3) * 5)) 
    else setNewItem(newItem.countedPrice = newItem.kg * newItem.price);
    
    let check = inCart.some(function(e) { 
      return e.name == newItem.name;
    });
    if(!check) {setInCart(inCart.concat(newItem))};
  };

  // Total price counting
  inCart.forEach(element => {
    total += element.countedPrice;
  });

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
          <Route path='/cart'> <Cart inCart={inCart} onAddToCart={onAddToCart} onRemove={onRemove} total={total} /> </Route>
      </BrowserRouter>   
    </div>
  );
}
 


export default withRouter (App);
