import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const ShopHeader = (props) => {
    const { cartItems } = props;
    console.log(cartItems, 'cartItems');
    return (
        <div>
            <Link to="/">
                Home
            </Link>

            
            <br />

            <Link to="/cart" className="logo">  
                Items {cartItems.length}
            </Link>
        </div>
    )
};

const mapStateToProps = state => ({
    cartItems: state.cartItems
});



export default connect(
    mapStateToProps, null
)(ShopHeader)