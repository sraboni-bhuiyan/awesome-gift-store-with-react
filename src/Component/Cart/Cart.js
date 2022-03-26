import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const [random, setRandom] = useState([])
    const [removeItem, setRemoveItem] = useState([])
    const chooseOne = (cart) => {
        //console.log(cart);
        if(cart.length > 0){
            const randomIndex = Math.floor(Math.random() * cart.length);
            const item = cart[randomIndex];
            setRandom(item);
        }
        
    }
    const chooseAgain = (cart) => {
        cart.length = 0;
        const removedItem = cart[cart.length];
        console.log(removedItem)
    }
    //console.log(cart)
    return (
        <div className='cart-body'>
            <h4>Selected Products</h4>
            <div className='cart-info'>
                {cart.map( (item) => (
                    <p key={item.id}>{item.name} - ${item.price}</p>
                ))}
            </div>
            <div className='cart-btn'>
                <button onClick={() => chooseOne(cart)} className='chooseOne-btn'>Choose Randomly</button>
                <button onClick={() => chooseAgain(cart)} className='chooseAgain-btn'>Remove Items</button>
            </div>
            <div className='cart-info'>
                <h4>Randomly Selected:</h4>
                <p>{random.name}</p>
            </div>
        </div>
    );
};

export default Cart;