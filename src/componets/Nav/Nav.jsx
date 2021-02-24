import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Nav.module.css";

const Nav = () => {
  return  <nav className={styles.nav}>
            <div>
              <NavLink to="/goods" className={styles.item} activeClassName={styles.active}>Goods</NavLink>
            </div>
            <div>
              <NavLink to="/cart" className={styles.item} activeClassName={styles.active}>Cart</NavLink>
            </div>
          </nav>
}

export default Nav;