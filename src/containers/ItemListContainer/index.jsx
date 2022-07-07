import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import Title from '../../components/Title';
import './styles.css';

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);

    const params = useParams()
    console.log(params)

    useEffect(() => {

        const getProductos = async () =>{
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                console.log (data);
                //filtro de las categorias
                let productsFiltrados=[...data];
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
            <Title titulo='Welcome to Delux Online'/>
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