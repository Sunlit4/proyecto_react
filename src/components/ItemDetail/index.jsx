import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import Loading from '../Loading'
import Swal from 'sweetalert2';
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
        Swal.fire(
            'Producto agregado al carrito',
            product.title
        )
        navigate ('/cart')
    };
    
    console.log(qtyAdded)
    return (
        <article className="productDetail">
                <div className="detailContainerImg">
                {product.image ? (
                    <img className="detailImg" src={product.image} alt={product.title}/>

                ) : (
                    <div>
                        <Loading/>
                    </div>
                )}
                </div>
                <div className="detailInfo">
                    <p className='detailCategory'>{product.category}</p>
                    <h3 className="detailNombre">{product.title}</h3>
                    <h4>Descripción: </h4>
                    <p className="detailDescrip">{product.description}</p>
                    <strong className="detailPrice">
                        Price: $ {product.price}
                    </strong>
                    {!qtyAdded ?
                    <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock}/>
                    :
                    <button onClick={handleTerminate}>Agregar al carrito</button>
                    } 
                </div>    
        </article>
    )
}

export default ItemDetail