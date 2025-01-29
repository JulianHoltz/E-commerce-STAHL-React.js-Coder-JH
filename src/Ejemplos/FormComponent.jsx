import React from 'react'
import { useState, useEffect } from 'react'

export const FormComponent = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [letra, setLetra] = useState('')

    const nameHandler = (e) => {
        //console.log(e, 'evento')
        //console.log(e.target, 'target')
        setNombre(e.target.value) //Es lo que la persona esta escribiendo
    }



  

    const enviarData = (e) => {
        e.preventDefault()
        const data = {
            name: nombre,
            phone: telfono
        }
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={enviarData}>
            <label htmlFor="">Nombre</label>
            <input type="text" name='nombre' onChange={nameHandler}/> {/*El evento onChange me avisa cuando cambie el dato*/}
            <p>Nombre Catpurado: {nombre}</p>
            <label htmlFor="">Telefono</label>
            <input type="text" name='nombre' placeholder='+54 - 911 - 5838 -792' onChange={(e) => setTelefono(e.target.value)}/> {/*con funcion anonima*/}
            {/*cEn este fomrato no puedo agregar validaciones...*/}
            <p>Telefono Capturado: {telefono}</p>
        </form>
    </div>
  )
}

export default FormComponent