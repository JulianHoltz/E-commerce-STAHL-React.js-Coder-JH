//High Order Component
import React, { useEffect, useState } from 'react'

//La diferncia con un custom Hook es que recibe como parametro un compoennte
//y devuelve un nuevo componente, y se lo tengo que definir en el return

const WidthDataFetch = (WrappedComponent, url) => {
    return function WidthDataFetch(props){
        const [data, setData] = useState(null)
        const [isLoading, setIsLoading] = useState(false)
        const [error, setError] = useState(null)
        
        //Va a cambiar al cambiar la url
        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((info) => setData(info))
            .catch((error) => setError(true))
            .finally(() => setIsLoading(false))
        },[url])
        return(
            <WrappedComponent
            {...props}
            data={data}
            isLoading={isLoading}
            error={error}
            />
        )
    }
}
//el componente que reciba esto lo va a recibir por Props...
//antes se lo pasaba con un export, pero ahora en React eso no esta funcionando
//Ahora hay que envolverlo y pasar las props