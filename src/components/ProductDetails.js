import React, {useContext} from 'react';

import { Link } from 'react-router-dom';
//  Context
import { productsContext } from '../context/ProductsContextProvider';

// Styles
import styles from './ProductDetails.module.css'

const ProductDetails = (props) => {
    const data = useContext(productsContext)
    const id = props.match.params.id
    const products = data[id -1]
    const {image, title, category, price, description} = products
    return (
        <div className={styles.container}>
            <img src={image} alt= "products" className={styles.image} />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                </div>
                <Link to = '/store'>Back to Shop</Link>
            </div>
        </div>
    );
};

export default ProductDetails;