import './styles.css';
import React, {useState} from 'react';

const ItemCount = ({onConfirm, maxQuantity}) => {
    const [value, setValue] = useState(1);

    const handleConfirm = () =>{
        if(value <= maxQuantity){
            onConfirm(value);
        }else{
            alert("Lo sentimos, no hay suficiente stock para este producto.")
        }
    };

    return (
        <div className="contadorContainer">
            <div className="contadorChild">
                <button disabled={value === 1} onClick={() => setValue(value => value-1)}>
                    -
                </button>
                <span>{value}</span>
                <button onClick={() => setValue (value => value+1)}>
                    +
                </button>
            </div>
        
            <button onClick={handleConfirm}>
                Confirm
            </button>
        </div>
    )
}

export default ItemCount

