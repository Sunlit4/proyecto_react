// Función para generar la orden 
const ordenGenerada = (buyer, cart, total) => {
    return {
        buyer: {
             name: buyer.name, 
            address: buyer.address,
            email: buyer.email,
            phone: buyer.phone
        },
        items: cart
        ,
        total: total, 
        createdAt: new Date ().toLocaleString()
       
    }
}
export default ordenGenerada;