import './App.css';
import ShopProvider from './context/ShopContext';
import BrowserRouterContainer from './containers/BrowserRouterContainer';

function App() {
  return (
    <ShopProvider>
      <div className='App'>
      <BrowserRouterContainer/>
      </div>
    </ShopProvider>
  );
}

export default App;
