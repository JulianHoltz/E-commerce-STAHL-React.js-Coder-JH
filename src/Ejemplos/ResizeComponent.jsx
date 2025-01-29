import React from 'react'
import { useEffect } from 'react'


//No funciona revisar
export const ResizeComponent = () => {
    //Caja, donde guardo el ancho de la ventana del navegador
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        //funcion que se va a ejecutar cada vez que ajuste la pantalla
        const handleResize = () =>{
            setWindowWidth(window.innerWidth) //actualizacion del valor
        }

        //escuchador del cambio de tamanio, "le digo al navegador que preste atencion al resize"
        window.addEventListener('resize', handleResize) //cada vez que el usuario interactue con el 
        // tamanio de la pantalla va a correr...

        //Con esto le digo que borre el escuchador despues de actualizar
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[]) //el use efect va con el [] vacio, para que pase en el montaje y desmontaje, y no siempre...
  return (
    <div>
        <h1>El ancho de la ventana es: {windowWidth} </h1>
    </div>
  )
}

export default ResizeComponent