import React from 'react';
import CartPage from '../../pages/cartPage';
import HomePage from '../../pages/homePage';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shopHeader';
import './app.css';

const App = () => {
    return (
        <div>
            <ShopHeader />
           <Switch>
               <Route 
                    path="/"
                    component={HomePage}
                    exact
               />

               <Route 
                    path="/cart"
                    component={CartPage}
               />
            </Switch>
        </div>
    )
};

export default App;
