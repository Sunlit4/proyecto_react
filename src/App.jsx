import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
//import Footer from './components/Footer';
import Cart from './containers/Cart';
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
         {/*<Footer/>*/}
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
