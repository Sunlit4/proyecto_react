import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({product}) => {

    const navigate = useNavigate ();

    product.stock = 10;
    const [qtyAdded, setQtyAdded] = useState(0);

    const {addItem} = useContext(Shop)

    const handleConfirm = (qty) => {
        setQtyAdded(qty);
    };

    const handleTerminate = () =>{
        addItem(product, qtyAdded)
        navigate ('/cart')
    };
    
    console.log(qtyAdded)
    return (
        <article className="productDetail">
            <div className="card">
                <img className="detailImg" src={product.image} alt={product.title}/>
                <div className="detailInfo">
                    <h3 className="nombre">{product.title}</h3>
                    <h4>Detalle</h4>
                    <p>{product.description}</p>
                    <strong className="infoGrid">
                    Price: $ {product.price}
                    </strong>
                    {!qtyAdded ?
                    <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock}/>
                    :
                    <button onClick={handleTerminate}>Add to Cart</button>
                    } 
                </div>
            </div>      
        </article>
    )
}

export default ItemDetail