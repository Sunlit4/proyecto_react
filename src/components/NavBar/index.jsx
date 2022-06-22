import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
    return (
        <ul>
            <li><a className="logo" href= "#home">GREEN LIF | Tienda Sustentable</a></li>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#news">Productos</a></li>
            <li><a href="#contact">Nosotros</a></li>
            <li><a href="#about">Contacto</a></li>
            <CartWidget/>
        </ul>
    )
}

export default NavBar;