import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = ({id}) => {
    const [productDetail, setProductos] = useState ({});
    useEffect (()=>{
            const getProductos = async () =>{
                try {
                    const response = await fetch ('/mocks/data.json');
                    const data = await response.json();
                    console.log(data)
                    setProductos(data)
                    
                } catch (error){
                    console.log ('Hubo un error')
                }     
            }
            getProductos()
        },[id])
    return (
           <ItemDetail products={productDetail}/>
    )
}

export default ItemDetailContainer