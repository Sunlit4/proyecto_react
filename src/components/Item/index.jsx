import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

const Item = ({product}) => {

   const navigate = useNavigate();
   const handleDetail = () =>{
      navigate(`/detail/${product.id}`)
   }
   
    return (
      <div className="container">
         <div className="card">
            <img className="img" src={product.image} alt=""/>
            <h2 className="cardTitle">{product.title}</h2> 
            <p className="cardPrice"><span>$ {product.price} </span></p> 
            <button className="seeMore" onClick={handleDetail}>
                  Ver más
            </button>
         </div>
      </div>
    )
}

export default Item