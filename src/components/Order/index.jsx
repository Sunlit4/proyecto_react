import React, { useEffect } from "react";
import {doc, getDoc} from "firebase/firestore";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../firebase/config";
import './styles.css'



const Order = () => {
    const [order, setOrder] = useState({})
    const params = useParams();
    
    useEffect(() =>{
        const getOrder = async () => {
            const docRef = doc (db, "orders", params.orderId)
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                const orders = {id: params.orderId, ...docSnap.data() }
                setOrder(orders);
            }else {
                Swal.fire("No such document!");
            }
        } 
        getOrder()

    }, [params])

    return(
        <div>
        <h1 className="titleOrder">
            ¡Gracias por su compra!
        </h1>
        <p className="dateOrder">
            Fecha de compra: {order?.createdAt}
        </p>
        <div>    
        <h2>
            Datos del comprador
        </h2>
            <div className="infoOrder">
            <p> Nombre: {order?.buyer?.name}</p>
            <p>Télefono: {order?.buyer?.phone}</p>
            <p>Email: {order?.buyer?.email}</p>
            </div>
        </div>
        <table className="tablaOrder">
            <thead>
                <tr>
                    <th>
                        Pedido:
                    </th>
                </tr>
            </thead>
            <tbody className="orderInfo">
            {order?.items?.map((producto) =>{
                const precioItems = () =>{
                    return producto.quantity * producto.price
                };
                return(<tr key={producto.id}>
                    <td>
                        {producto.title} x {producto.quantity} :
                    </td>
                    <td>
                        ${precioItems()}
                    </td>
                </tr>
                ); 
            }
            )}
            </tbody>
        </table>
            <h2>Total: $ {order.total?.total}</h2>
            <Link className="linkOrder" to='/'>Volver</Link>
            
        </div>
          
    )   
}

export default Order