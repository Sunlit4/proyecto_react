import './styles.css';
import React, {useState} from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        setCount(count + 1);
    }

    const onDecrement = () =>{
        setCount(count - 1);
    }

    return (
        <div className="contador">
            <h2>Producto 1</h2>
            <button disabled={count <= 1} onClick={onDecrement}>-</button>
            <p>{count}</p>
            <button disabled={count === stock} onClick={addCount}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd (count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

