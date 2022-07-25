// Función para generar la orden 
const ordenGenerada = (nombre, telefono, email, cart, total) => {
    return {
        buyer: {
            nombre: nombre, 
            telefono: telefono,
            email: email
        },
        items: cart
        ,
        total: total, 
        createdAt: new Date ().toLocaleString()
       
    }
}
export default ordenGenerada;