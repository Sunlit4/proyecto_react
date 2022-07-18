import React from 'react';
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Shop } from '../../context/ShopContext';
import './styles.css';

const CartWidget = () => {
    const {cart, cartWidgetItems} = useContext(Shop);
    console.log (cart)

    return (
        <div className="carrito">
            <FaShoppingCart size={32} />
            {cartWidgetItems()>0 ? (
                <>
                    {cartWidgetItems()}
                </>
            ) : (
                <>
                {''}
                </> 
            )
        }
        </div>
        
    )
}

export default CartWidget