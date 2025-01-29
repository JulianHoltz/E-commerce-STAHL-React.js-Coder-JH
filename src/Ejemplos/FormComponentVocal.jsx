import React from 'react'
import { useState, useEffect } from 'react'

export const FormComponentVocal = () => {
    const noVocals = (e) => {
        console.log(e)
        if('aeiou'.includes(e.key.toLowerCase())){
            e.preventDefault()
            alert('No se permiten vocales')
        }
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
            <label htmlFor="">No vale poner vocales</label>
            <input type="text" name='nombre'  placeholder='no vocales' onKeyDown={noVocals}/> {/*El evento onChange me avisa cuando cambie el dato*/}

        </form>
    </div>
  )
}

export default FormComponentVocal