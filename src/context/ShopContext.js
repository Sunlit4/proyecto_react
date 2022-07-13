import React, { createContext, useState } from 'react'

// Declarando nuestro contexto
 export const Shop = createContext(); // debemos exportarlo para que luego sea utilizado dentro del useContext

const ShopProvider = ({children}) => {

    const [cart, setCart] = useState ([]);

    //Agregar un item al carrito en función de la cantidad
    const addItem = (producto, cantidad) => {
        console.log (producto, cantidad);
        //Si el item esta repetido cambia la cantidad
        const itemRepetido = isInCart(producto);
        if(itemRepetido){
            itemRepetido.quantity += cantidad
            setCart([...cart])
        } else {
        // sino agrega el producto al carrito 
            setCart([...cart, {...producto, quantity: cantidad}])
        }
    }

    //Buscar el producto en el carrito
    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

    //Remover item del carrito
    const removeItem = (id) => setCart (cart.filter (producto => producto.id !== id));
  
    //Vaciar carrito 
    const clearCart = () => setCart ([])

    return (
        <Shop.Provider value={{
            addItem, 
            removeItem, 
            clearCart, 
            cart
        }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider