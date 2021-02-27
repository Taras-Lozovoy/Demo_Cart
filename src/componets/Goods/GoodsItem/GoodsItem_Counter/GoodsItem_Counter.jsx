import React, { useState } from 'react';
import styles from './GoodsItem_Counter.module.css';

const GoodsItemCounter = ({goods, onAddToCart, hideCounter}) => {
    let [kg, setKg] = useState(1);

    return  <div className={styles.counter}>
                {kg > 1
                    ?   <button onClick={() => {setKg(prevKg => prevKg - 1)}}>-</button>
                    :   <button onClick={() => {hideCounter()}}>-</button>
                } 
                <span>{kg} kg</span>
                <button onClick={() => {setKg(prevKg => prevKg + 1)}}>+</button>
                <button className={styles.addBtn} onClick={() => {onAddToCart(goods.id, kg); hideCounter()}}>Add to Cart</button>
            </div>
            
};

export default GoodsItemCounter;