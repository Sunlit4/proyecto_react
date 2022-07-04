import React from 'react'

const ItemDetail = ({product}) => {
    console.log (product)
    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.picture} alt={product.title}></img>
        </div>
    )
}

export default ItemDetail