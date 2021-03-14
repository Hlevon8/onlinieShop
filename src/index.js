import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import ShopStoreService from './services/shop-service';
import { ShopServiceProvider } from './components/service-context';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const AppWrapper = () => {
    const shopStoreService = new ShopStoreService();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ShopServiceProvider value={shopStoreService}>
                    <App />
                </ShopServiceProvider>
            </BrowserRouter>
        </Provider>

    )
}

ReactDOM.render(
    <AppWrapper />, document.getElementById('root')
)
