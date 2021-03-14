import React from 'react';
import { connect } from 'react-redux';
import { phoneAddToCart,removePhoneToCart,decrementPhoneToCart } from '../../actions';

import './index.css';
const CartPage = ({cartItems, addToCart,removePhone,decrementPhone}) => {
  const incrementProduct=(id)=>{
    addToCart(id);
    

  }
  const decrementProduct=(id)=>{
    decrementPhone(id);

  }
  const deleteProduct=(id)=>{
    removePhone(id)

  }
  const renderRow = (item, index) => {
    const {id, title, count, total } = item;
    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
        <button
        onClick={()=>deleteProduct(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
           onClick={()=>incrementProduct(id)}
            onClick={() => addToCart(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={()=>decrementProduct(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>

      </tr>
    )
  }
  return(
    <div className="shopping-cart-table">
        <h2>Your Order</h2>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              cartItems.map((item, index) => renderRow(item, index))
            }
          </tbody>
        </table>
    </div>
  ) 
};
const mapStateToProps = state => ({
  cartItems: state.cartItems
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id) =>  dispatch(phoneAddToCart(id)),
  removePhone:(id)=>dispatch(removePhoneToCart(id)),
  decrementPhone:(id)=>dispatch(decrementPhoneToCart(id))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(CartPage);
