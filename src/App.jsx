import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer';
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
      <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      {/*<Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>

      </Routes>*/}
    </div>
  );
}

export default App;
