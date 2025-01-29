import React from 'react'
import {useEffect, useState} from 'react'

const FetchConteiner = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        //Si no le pongo nada, entiende que es un GET
        fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json()) //traducimos lo recibido en algo que podamos entender
        .then((data) => setPersonajes(data.results)) //guardar la respuesta
        .catch((error) => console.log(error, 'error')) //hay que manejar el error, por que puede fallar dijo tusam
    },[])
    //console.log(personajes, 'personajes');
  return (
    <div>FetchConteiner</div>
  )
}

export default FetchConteiner