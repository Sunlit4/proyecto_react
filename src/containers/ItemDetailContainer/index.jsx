import React, {useEffect, useState} from 'react'
import './styles.css'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState ({});

    const params= useParams ()

    console.log(params)

    useEffect (()=>{
            const getProductos = async () =>{
                try {
                    const docRef = doc(db, "products", params.productId);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log(docSnap.id)
                        console.log("Document data:", docSnap.data());
                        const productDetail = {id: docSnap.id, ...docSnap.data()}
                        setProductDetail (productDetail)
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                } catch (error){
                    Swal.fire ('Hubo un error' + error);
                }     
            }
            getProductos()
        },[params])
    return (
        <section className="gettingProducts">
            {Object.keys(productDetail).length !== 0 ? <ItemDetail product={productDetail}/> 
            : 
            <Loading/>}
        </section>
    )
}

export default ItemDetailContainer