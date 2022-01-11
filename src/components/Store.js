import React, {useEffect} from 'react';

//  Components
import Product from './shared/Product';
import Loader from './shared/Loader';

//  Redux
import fetchProducts from '../redux/products/productsAction';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import styles from './Store.module.css'


const Store = () => {

    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className={styles.container}>
            {
                productsState.loading ? <Loader/> :
                productsState.error ? <p>Something went wrong!</p> :
                productsState.products.map(product => <Product 
                    key={product.id} 
                    productData={product} />)
            }
        </div>
    );
};

export default Store;