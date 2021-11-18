import React,{createContext,useState, useEffect} from 'react';

//API
import { getProducts } from '../services/api'

// Context
export const productsContext = createContext()


const ProductsContextProvider = ({children}) => {

    const [products, setProducts] = useState([])
    useEffect(() =>{
        const fetchAPI = async () =>{
        setProducts(await getProducts())
        }
        fetchAPI()
    }, [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;