import React, { useEffect } from 'react';
import { withShopStoreService } from '../../hoc';
import { connect } from 'react-redux';
import { phonesLoaded, phoneAddToCart } from '../../actions';

 import ShopItem from '../shopItem';

const ShopList = (props) => { 
    const { shopStoreService, onAddToCart,  getPhones, phones } = props;

    useEffect(() => {
        getPhones(shopStoreService.data);
    }, [getPhones, shopStoreService]);

    const handleDddCart = productId => {
        onAddToCart(productId)
    };

    return (
        <div>
            <ShopItem 
                phones={phones}
                handleDddCart={handleDddCart}
            />
        </div>
    )
};

const mapStateToProps = state => ({
  phones: state.phones,
});

const mapDispatchToProps = dispatch => ({
    getPhones: data => dispatch(phonesLoaded(data)),
    onAddToCart: id => dispatch(phoneAddToCart(id))
})

const ShopListConnectService = withShopStoreService(ShopList)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopListConnectService); 








