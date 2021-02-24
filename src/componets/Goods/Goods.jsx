import React from 'react';
import GoodsItem from './GoodsItem/GoodsItem';
import styles from './Goods.module.css';

const Goods = ({goods, onAddToCart}) => {
	return (
		<div className={styles.goodsWrap}>
			<div className={styles.goodsList}>
				{goods.map(goodsList => {
					return <GoodsItem goods={goodsList} onAddToCart={onAddToCart} key={goodsList.id}  />
				})}
			</div>
		</div>
	);
};

export default Goods;