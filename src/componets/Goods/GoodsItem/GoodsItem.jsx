import React, { useState } from 'react';
import styles from './GoodsItem.module.css'
import GoodsItemCounter from './GoodsItem_Counter/GoodsItem_Counter';

const GoodsItem = ({goods, onAddToCart}) => {
  
  // Local state for counter
  let [counter, setCounter] = useState(false);

  const showCounter = () => {
    setCounter(true);
  };

  const hideCounter = () => {
    setCounter(false);
  };

  return (
    <div className={styles.goodsItem}>
      <figure>
        <img src={goods.src}/>
      </figure>
      <span>
        {goods.name}
      </span>
      <div>
        {goods.price}$/kg
      </div>
				{goods.discount
					? <span>(Discount 3kg+)</span>
					: ''
				}
      {!counter 
        ? <div>
            <button onClick={() => {showCounter()}}>Get it</button>
          </div>
        : <div>
            <GoodsItemCounter hideCounter={hideCounter} goods={goods} onAddToCart={onAddToCart} />
          </div>
      }
    </div>
  );
};

export default GoodsItem;                                       