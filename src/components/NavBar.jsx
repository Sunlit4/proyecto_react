import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <ul>
            <li><a class="logo" href= "#home">GREEN LIF | Tienda Sustentable</a></li>
            <li><a class="active" href="#home">Inicio</a></li>
            <li><a href="#news">Productos</a></li>
            <li><a href="#contact">Nosotros</a></li>
            <li><a href="#about">Contacto</a></li>
        </ul>
    )
}

export default NavBar;