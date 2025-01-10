import { useState } from 'react'

const itemCount = ({stock, onAdd}) => {
    //destructuring del array de useState
    const [count, setCount] = useState(1)

    //funcion de sumar
    const add = () => {
      if(count < stock){setCount(count + 1)}
    }
    //funcion de restar
    const substract = () => {
      if(count > 0){setCount(count - 1)}
    }

    console.log("valor de count:", count);
    console.log('soy itemcount y me monte');
  return (
    <>
      <div>
          <div className='text-2xl text-center text-slate-300 font-bold'>
              <button className='rounded-l-lg bg-cyan-600 min-h-10 min-w-6 hover:bg-slate-600' onClick={substract} disabled={count === 0}>-</button>
              <span className='inline-block text-center min-w-40 text-slate-800'>{count}</span>

              {/* disable, si se cumple la porpiedad desaparece el boton */}
              <button className='rounded-r-lg bg-red-600 min-w-6 min-h-10 hover:bg-slate-600'  onClick={add} disabled={count > stock } >+</button>
              {/* El onAdd react la ejecuta, aunque nadie le haga click, entonces le tengo que decir que esper el oncklick, con funcion anonima o hacer una funcion a aprte */}
          </div>
          <button className='text-slate-300 mt-2 rounded-lg min-w-56 min-h-10 bg-slate-800 hover:bg-slate-600' disabled={count > stock || count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default itemCount;