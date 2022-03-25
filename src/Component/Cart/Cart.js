import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;
    const chooseOne = () => {

    }
    const chooseAgain = () => {

    }
    //console.log(cart)
    return (
        <div className='cart-body'>
            <h2>Selected Products</h2>
            <div className='cart-info'>
                {cart.map( (item) => (
                    <h4>{item.name} - {item.price}</h4>
                ))}
            </div>
            <div className='cart-btn'>
                <button onClick={chooseOne} className='chooseOne-btn'>CHOOSE 1 FOR ME</button>
                <button onClick={chooseAgain} className='chooseAgain-btn'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;