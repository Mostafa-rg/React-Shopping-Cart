import React from 'react';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// Redux
import { checkout, clear } from '../redux/cart/cartAction';

// Styles
import styles from './ShopCart.module.css'

const ShopCart = () => {

    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map( item => <Cart key={item.id} data={item}/>)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch(checkout())}>Check Out</button>
                        <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                    </div>
                </div>
                
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Seccessfuly</h3>
                    <Link to="/store">Buy More</Link>
                </div>
            }
            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/store">Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;