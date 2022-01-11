import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navber from './components/shared/Navber';
import ShopCart from './components/ShopCart';
import {Provider} from 'react-redux'
// Redux
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Navber/>
          <Switch>
            <Route path = "/details/:id" component={ProductDetails}/>
            <Route path = "/store" component={Store}/>
            <Route path= "/cart" component={ShopCart}/>
            <Redirect to = "/store"/>
          </Switch>
      </Provider>
    </div>
  );
}

export default App;
