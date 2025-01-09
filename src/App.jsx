import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (
    <>
      <div className='bg-slate-900'><NavBar/></div>
      <div className=''><ItemListContainer greeting='Bienvenidos al tren 🎵'/></div>
    </>
  )
}

export default App
