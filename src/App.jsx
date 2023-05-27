import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Routes >

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
         
          <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;