import React from "react";
import './styles.css';

const Item = ({product}) => {
    return (
      <article className="containerCard">
         <div className="card">
            <img className="img" src={product.image}/>
            <h3>{product.title}</h3> 
            <h4> Categoria: {product.category}</h4>
            <p>Marca: {product.brand}</p>
            <p><span>$ {product.price} </span></p>
         </div>
      </article>
       
    )
}

export default Item