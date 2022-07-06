import React from 'react';
import './styles.css';

const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <article className="productDetail">
            <div className="card">
                <img className="detailImg" src={product.image} alt={product.title}/>
                <div className="detailInfo">
                    <h3 className="nombre">{product.title}</h3>
                    <h4>Detalle</h4>
                    <p>{product.description}</p>
                    <strong className="infoGrid">
                    Price: US$ {product.price}
                    </strong>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail