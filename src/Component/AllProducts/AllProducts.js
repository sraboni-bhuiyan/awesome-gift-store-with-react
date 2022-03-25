import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
  } , [products])
    return (
        <div className="main-container">
            <div className='products-container'>
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product}></SingleProduct>
                ))}
            
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default AllProducts;