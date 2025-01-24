import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className='bg-slate-900'><NavBar/></div>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos al tren 🎵'/>}/>
        <Route path='/category/:categoryId' element={<h1>Aca vendra el filtro por categorias qeu es dinamico</h1>}/>
        <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
        <Route path='/cart' element={<h1>Aca vendra el carrito</h1>}/>
        <Route path='/checkout' element={<h1>aca serael paso final de la compra</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
