import React from 'react';
import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { Shop } from '../../context/ShopContext';
import Badge from '@mui/material/Badge'
import './styles.css';

const CartWidget = () => {
    const {cart, cartWidgetItems} = useContext(Shop);
    console.log (cart)

    return (
        <div className="carrito">
            <Badge>
                <FaShoppingCart size={32} />
                {cart.length > 0 ? (
                    <span className='cartItem'>
                        {cartWidgetItems()}
                    </span>
                    ) : (
                    <>
                        {''}
                    </> 
                    )
                }
            </Badge>
        </div>
    )
}

export default CartWidget