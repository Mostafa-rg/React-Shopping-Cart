import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import styles from './Navbar.module.css'

// Icons
import cartIcon from '../../assets/icons/shopping-cart.svg'

const Navber = () => {

    const state = useSelector(state => state.cartState)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to = "/store" className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart" className={styles.iconContainer}><img src={cartIcon} alt="cart"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navber;