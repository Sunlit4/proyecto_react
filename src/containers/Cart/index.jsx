import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import ordenGenerada from '../../utils/generarOrden';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'
import './styles.css';
import guardarOrden from '../../utils/guardarOrden';
import { useState } from 'react';
import Form from '../../components/CkeckOut';
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2';

const Cart = () => {
  const {cart, removeItem, clearCart, totalPrice} = useContext(Shop);
  const [ showForm, setShowForm] = useState (false)
  const [ showCart, setShowCart ] = useState (true)
  const MySwal = withReactContent(Swal)

  //Utilizo el useNavigate para continuar comprando
  const navigate = useNavigate ();

  const handleTerminate= ()=>{
    navigate ('/productos')
  }

  if (cart.length === 0){
    return(
      <>
        <p> Your cart it's empty </p>
        <Link to='/'>Home</Link>
      </>
    );
  }

  const confirmarOrden = async (orderBuyer) =>{
    const orden = ordenGenerada (orderBuyer, cart, {total: totalPrice()} )
    guardarOrden (cart, orden, navigate);
    setShowForm(false);
    //const docRef = await addDoc(collection(db, "orders"), orden);
    //console.log("Document written with id: ", docRef.id)
  }

  const emptyCart = () =>{
    MySwal.fire({
      title:'¿Desea eliminar los productos de su carrito?',
      text:'La compra será cancelada',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar compra',
      cancelButtonText: 'No, seguir comprando'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire(
          'Cancelada!',
          'Su carrito esta vacio',
          'success'
        )
        clearCart()
        setShowForm(false);
      }
    })
  }
  return (
    <div>
      {showForm && (
        <Form 
          setShowForm={setShowForm}
          confirmarOrden={confirmarOrden}
          setShowCart= {setShowCart}
        />
      )}
      {cart.length !==0 ? (
        showCart && (
          <>
          <table className="tableContainer">
            <thead className="table">
              <tr>
                <th scope= "col">Producto</th>
                <th scope= "col">Imagen</th>
                <th scope= "col">Categoria</th>
                <th scope= "col">Cantidad</th>
                <th scope= "col">Precio c/u</th>
                <th scope="col"> Subtotal</th>
              </tr>
            </thead>
            <tbody>
            {cart.map(producto => {
              const precioItems = () => {
                return producto.quantity * producto.price;
              }
              return (<tr key={producto.id}>
                  <td>{producto.title}</td>
                  <td>
                    <img src={producto.image} width='80px' alt={producto.title}/>
                  </td>
                  <td>{producto.category}</td>
                  <td>{producto.quantity}</td>
                  <td>{producto.price}</td>
                  <td>{precioItems()}</td>
                  <td>
                    <button onClick={() => removeItem(producto.id)}>
                      <FaTrash size={20}/>
                    </button>
                  </td>
                </tr>
              );
              }
          )}
        </tbody>
      </table>
      <h2>Total: {totalPrice()}</h2>
      <button className='btnCart' onClick={emptyCart}> 
        Vaciar carrito 
      </button>
      <button className='btnCart' onClick={handleTerminate}> 
        Continuar comprando 
      </button>
      <button className='btnCart' onClick={()=>{
        setShowForm(true)
        setShowCart(false)}}
        > 
        Comprar 
      </button>
      </>
        )
      ) : (
        <>
          <p> Su carrito esta vacio </p>
          <Link to='/productos'>Continue Shopping</Link>
        </>
      )}
      </div>
  )
}

export default Cart