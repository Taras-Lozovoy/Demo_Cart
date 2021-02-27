import React, { useEffect, useState } from 'react';
import styles from './InCartItem.module.css';

const InCartItem = ({cart, onRemove, onAddToCart}) => {
	let [kg, setKg] = useState(cart.kg);

	useEffect(() => {
		onAddToCart(cart.id, kg);
	}, [kg])

	const decrement = () => {
		setKg(prevKg => prevKg - 1);
	};
	const increment = () => {
		setKg(prevKg => prevKg + 1);
	}
	
	return (
		<div className={styles.inCartItem_wrapper}>
			<div className={styles.inCartItem}>
				<figure>
					<img src={cart.src} />
				</figure>
				<span>
					{cart.name}
				</span>
					{cart.discount
						? <span>(Discount 3kg+)</span>
						: ''
					}    
				<div>
					{ kg>1 ? <button className={styles.btnKg} onClick={() => {decrement()}}>&lt;</button> : '' }
					<span className={styles.kg}>
						{kg} kg
					</span>
					<button className={styles.btnKg} onClick={() => {increment()}}>&gt;</button>
				</div>
				<div>
					Price = {cart.countedPrice} $ 
				</div>
			</div>
			<div>
				<button onClick={() => {onRemove(cart.id)}}>&#10008;</button>
			</div>
		</div>
	);
};

export default InCartItem;