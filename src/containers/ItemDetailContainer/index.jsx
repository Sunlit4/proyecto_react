import React, {useEffect, useState} from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])
    
    useEffect(()=> {
        const getProductos = async () =>{
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json()
                setProductDetail(data)
            }catch (error){
                console.log(error)
            }
        }
        getProductos();
    }, [])
    return (
        <ItemDetail product={productDetail}/>
    )
}

export default ItemDetailContainer