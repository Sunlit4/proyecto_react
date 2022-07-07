import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount"

const Item = ({product}) => {

   const onAdd = (quantity) =>{
      console.log(`Se agrego el producto (${quantity}) al carrito`)
  }

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
            <ItemCount onAdd={onAdd} initial={1} stock={8}/>
         </div>
      </div>
    )
}

export default Item