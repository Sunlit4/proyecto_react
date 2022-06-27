import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

const ItemListContainer = ({greeting}) => {
    const onAdd = (quantity) =>{
        console.log(`Se agrego el producto (${quantity}) al carrito`)
    }

    return (
        <div>
            <h1>{greeting}</h1>,
            <ItemCount onAdd={onAdd} initial={1} stock={8}/>
        </div>
        
    )
}

export default ItemListContainer