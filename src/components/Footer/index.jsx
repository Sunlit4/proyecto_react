import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () =>{
   
return(
    <footer className="footer">
        <div>
            <div>
                <p>
                    E-Commerce | React | Sonsoles Grondona Fernández
                </p>
            </div>
            <div>
                <ul>
                    <li className='logo'>{<Link to='/'>DELUX ONLINE</Link>}</li>
                    <li>{<Link to='/category/jewelery'>Jewelery</Link>}</li>
                    <li>{<Link to='/category/electronics'>Electronics</Link>}</li>
                    <li>{<Link to="/category/men's clothing">Men's clothing</Link>}</li>
                    <li>{<Link to="/category/women's clothing">Women's clothing</Link>}</li>
                </ul>
            </div>
        </div>
    </footer>

)
}

export default Footer