import { useState } from 'react'
//import { useCounter } from '../Hooks/useCounter'

const itemCount = ({stock, onAdd}) => { 

  //destructuring del array de useState
    const [count, setCount] = useState(1)

    //funcion de sumar
    const add = () => {
      if(count < stock){setCount(count + 1)}
    }
    //funcion de restar
    const subtract = () => {
      if(count > 0){setCount(count - 1)}
    }


  return (
    <>
      <div>
          <div className='text-2xl text-center text-slate-300 font-bold'>
              <button className='rounded-l-lg bg-cyan-600 min-h-10 min-w-6 hover:bg-slate-600' onClick={subtract} disabled={count === 0}>-</button>
              <span className='inline-block text-center min-w-40 text-slate-800'>{count}</span>

              <button className='rounded-r-lg bg-red-600 min-w-6 min-h-10 hover:bg-slate-600'  onClick={add} disabled={count > stock } >+</button>
              
          </div>
          <button className='text-slate-300 mt-2 rounded-lg min-w-56 min-h-10 bg-slate-800 hover:bg-slate-600' disabled={count > stock || count === 0} onClick={()=>onAdd(count)}>Add to cart</button>
      </div>
    </>
  )
}

export default itemCount;