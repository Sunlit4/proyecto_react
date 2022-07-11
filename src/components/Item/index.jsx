import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
      <div className="container">
         <div className="card">
            <img className="img" src={product.image} alt=""/>
            <h2>{product.title}</h2> 
               <h3>
                  <Link to={`/detail/${product.id}`}>
                  See More...
                  </Link>
               </h3>
            
            <p><span>US$ {product.price} </span></p> 
         </div>
      </div>
    )
}

export default Item