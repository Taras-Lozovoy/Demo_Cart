import React from 'react';
import InCartItem from './InCartItem/InCartItem';
import styles from './Cart.module.css'

const Cart = ({inCart, onRemove, onAddToCart, total}) => {

	return (
		<div className={styles.cartWrapper}>
			<div className={styles.inCart}>
				{inCart.length > 0
					?   inCart.map(cart => {
						return <InCartItem cart={cart} onAddToCart={onAddToCart} onRemove={onRemove} key={cart.id}  />
						})
					: 'Cart is empty'
				}
			</div>
			<div>
				Total Price = {total} $
			</div>
		</div>
	);
};

export default Cart;