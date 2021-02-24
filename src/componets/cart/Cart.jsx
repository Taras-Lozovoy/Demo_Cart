import React from 'react';
import InCartItem from './InCartItem/InCartItem';
import styles from './Cart.module.css'

const Cart = ({inCart, onRemove}) => {
	
	return (
		<div className={styles.cartWrapper}>
			<div className={styles.inCart}>
				{inCart.length > 0
					?   inCart.map(cart => {
						return <InCartItem cart={cart} onRemove={onRemove} key={cart.id}  />
						})
					: 'Cart is empty'
				}
			</div>
		</div>
	);
};

export default Cart;