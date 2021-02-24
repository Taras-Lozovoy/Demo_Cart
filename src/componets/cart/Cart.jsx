import React from 'react';
import InCartItem from './InCartItem/InCartItem';
import styles from './Cart.module.css'

const Cart = ({inCart, onRemove, setInCart}) => {
	let plusKg = (name) => {
		console.log(name)
	}
	return (
		<div className={styles.cartWrapper}>
			<div className={styles.inCart}>
				{inCart.length > 0
					?   inCart.map(cart => {
						return <InCartItem cart={cart} plusKg={plusKg} onRemove={onRemove} key={cart.id}  />
						})
					: 'Cart is empty'
				}
			</div>
		</div>
	);
};

export default Cart;