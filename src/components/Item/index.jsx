import React from "react";
import './styles.css';
import Card from "react-bootstrap/Card";


const Item = ({product}) => {
    return (
        <Card clasName="card">
            <Card.Img className="img" variant="top" src={product.picture}/>
            <Card.Body>
               <Card.Title>{product.title}</Card.Title> 
               <Card.Text> Categoria: {product.category}</Card.Text>
               <span>$ {product.price} </span>
            </Card.Body>
        </Card>
       
    )
}

export default Item