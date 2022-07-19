import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Title from '../../components/Title';
import './styles.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);

    const params = useParams()
    console.log(params)

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
                console.log(productos)
                
                //filtro de las categorias
                let productsFiltrados=[...productos];
                if(params?.categoryId) {
                    productsFiltrados = productsFiltrados.filter(producto => producto.category === params.categoryId)
                }
                setProductos (productsFiltrados);
            } catch (error){
                console.log ("Hubo un error:")
                console.log (error)
            }
        }
        getProductos()

    }, [params])

    console.log (productos);

    return (
        <div>
            <Title titulo='Welcome to Green Lif'/>
            <h2 className="itemListContainerTitle">Products</h2>,
            {productos ? 
                <ItemList products={productos} />
                :
                null
            }  
        </div>
    )
}


export default ItemListContainer