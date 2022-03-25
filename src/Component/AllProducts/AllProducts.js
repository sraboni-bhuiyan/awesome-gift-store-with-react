import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
  } , [products])

    return (
        <div className="main-container">
            <div className='products-container'>
                {products.map((product) => (
                    <SingleProduct 
                    key={product.id} 
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></SingleProduct>
                ))}
            
            </div>
            <div className="cart-container">
                <Cart key={cart.id} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default AllProducts;