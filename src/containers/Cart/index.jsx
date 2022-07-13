import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
import './styles.css';


const Cart = () => {
  const {cart} = useContext(Shop);
  console.log(cart);

  //Eliminar el item
  const {removeItem} = useContext(Shop)
  //Vaciar carrito
  const {clearCart} = useContext(Shop)

  if (cart.length === 0){
    return(
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Ver productos</Link>
      </>
    );
  }

  return (
    <table className="tableContainer">
      <thead className="table">
        <tr>
          <th scope= "col">Nombre</th>
          <th scope= "col">Categoria</th>
          <th scope= "col">Cantidad</th>
          <th scope= "col">Imagen</th>
          <th scope= "col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(producto => {
          return <tr key={producto.id}>
                    <td>{producto.title}</td>
                    <td>{producto.category}</td>
                    <td>{producto.quantity}</td>
                    <td>
                      <img src={producto.image} width='80px' alt={producto.title}/>
                    </td>
                    <td>{producto.price}</td>
                    <td>
                      <button onClick={() => removeItem(producto.id)}>x</button>
                    </td>
                  </tr>
        })}
      </tbody>
        <button onClick={()=> clearCart ([])}>Vaciar carrito </button>
    </table>
    
  )
}

export default Cart