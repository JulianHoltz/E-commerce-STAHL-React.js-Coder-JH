import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import ItemListConteinerFiltro from './components/ItemListConteinerFiltro'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext';


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
      <div className='bg-slate-900'><NavBar/></div>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenido!'/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/cart' element={<h1>Aca vendra el carrito</h1>}/>
        <Route path='/checkout' element={<h1>aca serael paso final de la compra</h1>}/>
      </Routes>
      <div className='bg-slate-900'><Footer/></div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
