import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './styles.css';


const NavBar = ({condicion}) => {

    return (
        <div className={`${condicion === true ? "open" : ""} ${"containerNavBar"}`}>
            <ul>
                <li className='logo'>{<NavLink to='/'>GREEN LIF</NavLink>}</li>
                <li>{<NavLink to='/'>Home</NavLink>}</li>
                <li>{<NavLink to='/productos'>Productos</NavLink>}</li>
                <li>{<NavLink to='/category/facial'>Cuidado facial</NavLink>}</li>
                <li>{<NavLink to='/category/bucal'>Cuidado bucal</NavLink>}</li>
                <li>{<NavLink to='/category/capilar'>Cuidado capilar</NavLink>}</li>
                <li>{<NavLink to='/category/hogar'>Hogar sustentable</NavLink>}</li>
                <NavLink to='/cart'><CartWidget/></NavLink>
            </ul>
        </div>
    )
}

export default NavBar;