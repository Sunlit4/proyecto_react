
import './styles.css';
import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const addProduct = (num) =>{
        setCount(count + num)
    };

    return (
        <div className="contadorContainer">
            <div className="contadorChild">
                <button disabled={count === initial} onClick={() => addProduct(-1)}>
                    -
                </button>
                <span>{count}</span>
                <button disabled={count === stock} onClick={() => addProduct (+1)}>
                    +
                </button>
            </div>
        

            <button disabled={stock === 0} onClick={() => onAdd (count)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount

