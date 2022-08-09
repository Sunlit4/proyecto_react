import { doc,collection, addDoc, getDoc, writeBatch } from "firebase/firestore";
import Swal from "sweetalert2";
//import Swal from "sweetalert2";
import { db } from "../firebase/config";

const guardarOrden = (cart, orden, navigate ) => {
    console.log('Guardar orden');
    console.log (cart);
    console.log(orden);

    //Abrir un branch 
    const batch = writeBatch(db)

    // Array que me difine si hay productos fuera de stock 
    const outOfStock = []

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc (doc(db, 'products', productoEnCart.id))
        .then(async (documentSnapshot)=>{
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (producto.stock >= productoEnCart.quantity){
                batch.update(doc(db, 'products', producto.id), {
                    stock: producto.stock - productoEnCart.quantity
                })
            }else {
                outOfStock.push(producto)
            }

            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                    //Recién hacemos el commit una vez que se genera la order
                    batch.commit().then(() => {
                        Swal.fire("Se genero su pedido")
                        navigate(`/order/${id}`)
                    })
                }).catch((err) => {
                    Swal.fire(`Error: ${err.message}`);
                })
                //Si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
                } else {
                    let mensaje = ''
                    for (const product of outOfStock) {
                    mensaje += `${product.title}`
                    }
                    Swal.fire(`Productos fuera de stock: ${mensaje}`)
                }
        }).catch((err) =>{
            Swal.fire (`Error: ${err.message}`);
        })
    })
}

export default guardarOrden;