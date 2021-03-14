import React from 'react';
import { ShopServiceConsumer } from '../components/service-context';

export const withShopStoreService = Component => {
    return class extends React.Component {
        render() {
            return (
                <ShopServiceConsumer>
                    {
                        (shopStoreService) => {
                            return (
                                <Component 
                                    shopStoreService={shopStoreService}
                                    {...this.props}
                                />
                            )
                        }
                    }
                </ShopServiceConsumer>
            )
        }
    }
}
