import React, {useEffect, useState} from 'react'
import './styles.css'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState ({});

    const params= useParams ()

    console.log(params)

    useEffect (()=>{
            const getProductos = async () =>{
                try {
                    const response = await fetch (`https://fakestoreapi.com/products/${params.productId}`);
                    const data = await response.json();
                    console.log(data)
                    setProductDetail(data)
                } catch (error){
                    console.log ('Hubo un error')
                }     
            }
            getProductos()
        },[params])
    return (
        <section className="gettingProducts">
            {Object.keys(productDetail).length !== 0 ? <ItemDetail product={productDetail}/> 
            : 
            <p>Getting products...</p>}
        </section>
    )
}

export default ItemDetailContainer