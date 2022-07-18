import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'
import './styles.css';


const Cart = () => {
  const {cart, totalPrice} = useContext(Shop);

  //Utilizo el useNavigate para continuar comprando
  const navigate = useNavigate ();
  const handleTerminate= ()=>{
    navigate ('/')
  }
  //Eliminar el item
  const {removeItem} = useContext(Shop)
  //Vaciar carrito
  const {clearCart} = useContext(Shop)

  if (cart.length === 0){
    return(
      <>
        <p> Your cart it's empty </p>
        <Link to='/'>Continue Shopping</Link>
      </>
    );
  }

  return (
    <>
    <table className="tableContainer">
      <thead className="table">
        <tr>
          <th scope= "col">Name</th>
          <th scope= "col">Picture</th>
          <th scope= "col">Category</th>
          <th scope= "col">Quantity</th>
          <th scope= "col">Price</th>
          <th scope="col"> Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(producto => {
          return <tr key={producto.id}>
                    <td>{producto.title}</td>
                    <td>
                      <img src={producto.image} width='80px' alt={producto.title}/>
                    </td>
                    <td>{producto.category}</td>
                    <td>{producto.quantity}</td>
                    <td>{producto.price}</td>
                    <td>{producto.quantity * producto.price}</td>
                    <td>
                      <button onClick={() => removeItem(producto.id)}><FaTrash size={20}/></button>
                    </td>
                  </tr>
        })}
      </tbody>
      <>
        <h2>Total: {totalPrice()}</h2>
        <button className='btnCart' onClick={()=> clearCart ([])}> Clear cart </button>
        <button className='btnCart' onClick={handleTerminate}> Keep shopping </button>
      </>
    </table>
    </>
  )
}

export default Cart