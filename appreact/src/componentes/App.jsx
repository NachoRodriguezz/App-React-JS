import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailConteiner/ItemDetailConteiner';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListConteiner/ItemListConteiner';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;