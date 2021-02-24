import React from 'react';
import styles from './GoodsItem.module.css'

const GoodsItem = ({goods, onAddToCart}) => {

  return (
    <div className={styles.goodsItem}>
      <figure>
        <img src={goods.src}/>
      </figure>
      <span>
        {goods.name}
      </span>
      <div>
        Price - {goods.price}$/kg
      </div>
				{goods.discount
					? <span>(Discount 3kg+)</span>
					: ''
				}
      <div>
        <button onClick={() => {onAddToCart(goods.id)}}>Add to Cart</button>
      </div>
    </div>
  );
};

export default GoodsItem;