import React from 'react';

const ItemDetail = ({products}) => {
    console.log(products)
    return (
        <div>
           <h1>{products.title}</h1>
        </div>
    )
}

export default ItemDetail