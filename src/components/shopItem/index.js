import React from 'react';
import './index.css';

const ShopItem = ({phones, handleDddCart}) => {
    return (
        <div>
            {
                phones.map((phone) => {
                    return (
                        <div className="list-item" key={phone.id}>
                            <div className="img-content">
                                <img 
                                    src={phone.coverImage}
                                    alt={phone.title}
                                />
                            </div>

                            <div className="product-detail">
                                <h2>{phone.title}</h2>
                                <span>{phone.price} $</span>

                                <div className="add-button-content">
                                    <button onClick={() => handleDddCart(phone.id)}>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default ShopItem;