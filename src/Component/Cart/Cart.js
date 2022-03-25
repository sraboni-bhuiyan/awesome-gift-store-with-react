import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const [random, setRandom] = useState([])
    const chooseOne = (cart) => {
        //console.log(cart);
        const randomIndex = Math.floor(Math.random() * cart.length);
        const item = cart[randomIndex];
        setRandom(item);
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
                <button onClick={() => chooseOne(cart)} className='chooseOne-btn'>CHOOSE 1 FOR ME</button>
                <button onClick={chooseAgain} className='chooseAgain-btn'>CHOOSE AGAIN</button>
            </div>
            <div>
                <h3>Randomly Selected: {random.name}</h3>
            </div>
        </div>
    );
};

export default Cart;