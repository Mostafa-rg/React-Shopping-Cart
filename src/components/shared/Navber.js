import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css'

//Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import cartIcon from '../../assets/icons/shopping-cart.svg'

const Navber = () => {

    const {state} = useContext(CartContext)    
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