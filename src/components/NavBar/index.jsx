import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';


const NavBar = () => {

    return (
        <nav>
            <ul>
                <li className='logo'>{<Link to='/'>GREEN LIF</Link>}</li>
                <li>{<Link to='/'>Home</Link>}</li>
                <li>{<Link to='/category/facial'>Cuidado facial</Link>}</li>
                <li>{<Link to='/category/bucal'>Cuidado bucal</Link>}</li>
                <li>{<Link to='/category/capilar'>Cuidado capilar</Link>}</li>
                <li>{<Link to='/category/hogar'>Hogar sustentable</Link>}</li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar;