import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='header'>
                <h2>Awesome Gift Store</h2>
                <div>
                    <a href="">Shop</a>
                    <a href="">Order</a>
                    <a href="">Inventory</a>
                    <a href="">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;