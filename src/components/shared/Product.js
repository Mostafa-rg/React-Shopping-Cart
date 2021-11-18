import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import { shorten, isInCart, quantityCounter } from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import trashIcon from '../../assets/icons/trash.svg'

// Styles
import styles from './Product.module.css'

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to = {`/details/${productData.id}`} >Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCounter(state ,productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'DECREASE', payload: productData})}>-</button>}
                    {quantityCounter(state ,productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type: 'REMOVE_ITEM', payload: productData})}><img src={trashIcon} alt="trash"/></button>}
                    {quantityCounter(state ,productData.id) > 0 && <span className={styles.counter}>{quantityCounter(state ,productData.id)}</span>}
                    {isInCart(state ,productData.id) ? 
                    <button className={styles.smallButton} onClick={() => dispatch({type: 'INCREASE', payload: productData})}>+</button>:
                    <button onClick={() => dispatch({type: 'ADD_ITEM', payload: productData})}>Add to Cart</button>}
                </div>

            </div>
        </div>
    );
};

export default Product;