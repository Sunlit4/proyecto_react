import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import NotFound from "../../components/NotFound";
import Order from "../../components/Order";
import Cart from "../Cart";
import ItemDetailContainer from "../ItemDetailContainer";
import ItemListContainer from "../ItemListContainer";

const BrowserRouterContainer = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Hero/>}></Route>
                <Route path='/productos' element={<ItemListContainer/>}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/order/:orderId' element={<Order/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            <Footer/>
      </BrowserRouter>

    )
    
}

export default BrowserRouterContainer