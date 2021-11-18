import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navber from './components/shared/Navber';
import ShopCart from './components/ShopCart';

// Context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';
function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navber/>
          <Switch>
            <Route path = "/details/:id" component={ProductDetails}/>
            <Route path = "/store" component={Store}/>
            <Route path= "/cart" component={ShopCart}/>
            <Redirect to = "/store"/>
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
