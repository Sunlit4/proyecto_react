import React from 'react';
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Shop } from '../../context/ShopContext';
import './styles.css';

const CartWidget = () => {
    const {cart} = useContext(Shop);

    return (
        <div className="carrito">
            <FaShoppingCart size={32} />
            {cart.length && <span>({cart.length})</span>}
        </div>
        
    )
}

export default CartWidget