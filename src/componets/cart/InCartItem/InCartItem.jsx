import React, { useState } from 'react';
import styles from './InCartItem.module.css';

const InCartItem = ({cart, onRemove}) => {
	let [kg, setKg] = useState(1);

	let discountPrice = (cart.price * kg) - (Math.floor(kg / 3) * 5);
	let price = cart.price * kg;
	
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
					{ kg>1 ? <button className={styles.btnKg} onClick={() => {setKg(prevKg => prevKg - 1)}}>&lt;</button> : '' }
					<span className={styles.kg}>
						{kg} kg
					</span>
					<button className={styles.btnKg} onClick={() => {setKg(prevKg => prevKg + 1)}}>&gt;</button>
				</div>
				<div >
					Price = { kg >= 3 && cart.discount 
								? discountPrice
								: price
							}$ 
				</div>
			</div>
			<div>
				<button onClick={() => {onRemove(cart.id)}}>&#10008;</button>
			</div>
		</div>
	);
};

export default InCartItem;