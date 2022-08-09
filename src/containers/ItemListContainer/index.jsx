import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import './styles.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import Swal from "sweetalert2";
import Loading from '../../components/Loading';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    
    const params = useParams()
   
    useEffect(() => {

        const getProductos = async () =>{
            try {
                const q = query(collection(db, "products"));
                const querySnapshot = await getDocs(q);
                const productos = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    productos.push({id: doc.id, ...doc.data()})
                });
                //filtro de las categorias
                let productsFiltrados=[...productos];
                if(params?.categoryId) {
                    productsFiltrados = productsFiltrados.filter(producto => producto.category === params.categoryId)
                }
                setProductos (productsFiltrados);
            } catch (error){
                Swal.fire (error)
            }
        }
        getProductos()

    }, [params])

    return (
        <>
            <h2 className="itemListContainerTitle">Productos</h2>
                {productos.length !==0 ? (
                    <ItemList products={productos}/>
                ):(
                    <Loading/>
                )}  
        </>
    )
}


export default ItemListContainer