import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {id, name, picture, price} = props.product;
    console.log(name)
    return (
        <div className='item-card'>
            <div className='image-container'>
                <img src={picture} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <div>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;