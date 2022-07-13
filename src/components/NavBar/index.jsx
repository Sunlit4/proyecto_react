import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';


const NavBar = () => {

    return (
        <nav>
            <ul>
                <li className='logo'>{<Link to='/'>DELUX ONLINE</Link>}</li>
                <li>{<Link to='/'>Home</Link>}</li>
                <li>{<Link to='/category/jewelery'>Jewelery</Link>}</li>
                <li>{<Link to='/category/electronics'>Electronics</Link>}</li>
                <li>{<Link to="/category/men's clothing">Men's clothing</Link>}</li>
                <li>{<Link to="/category/women's clothing">Women's clothing</Link>}</li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;