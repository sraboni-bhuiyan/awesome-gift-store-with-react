import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {product, handleAddToCart} = props;
    const {id, name, picture, price} = product;
    
    return (
        <div className='item-card'>
            <div className='image-container'>
                <img src={picture} alt="" />
            </div>
            <div className='item-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className='item-btn'>
                <button onClick={() => handleAddToCart(product)} className='addToCart-btn'>
                <p>Add To Cart</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default SingleProduct;