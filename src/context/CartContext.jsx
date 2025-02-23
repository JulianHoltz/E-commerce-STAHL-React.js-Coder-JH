import { useEffect, useState } from "react";
import { createContext, useContext } from "react";


//Creo el contexto
export const CartContext = createContext(); //lo exporto para poder usarlo fuera

//Persistencia en sesion de los elementos del carrito
// const productosDelLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
//OJO! Si uso storage local hay que cambiar el useState de cart de [] a productosDelLocalStorage

//declaro el proveedor
export const CartProvider = ({children}) => {
    //declaro el estado
    const [cart, setCart] = useState([]) //array vacio, por que voy a ir acumulando los objetos que representan los productos


//Actualizacion del carrito al agregar items [Se ejecuta cada vez que se modifique el carrito]
// useEffect(()=>{
//     localStorage.setItem('carrito', JSON.stringify(cart));
// },[cart])

    //funciones dinamicas

        const addItem = (item, quantity) => {
            let compra = {...item, quantity} //esto es un spreed
            //si existe, le sumo, si no existe agrego el producto a la lista
            if(isInCart(item.id)){
                //sumar cantidades, no quiero repetidos
                const updatedCart = cart.map((prod)=>{
                    if(prod.id === item.id){
                        return {...prod, quantity:prod.quantity + quantity}
                    }else{
                        return prod
                    }
                })
                setCart(updatedCart)
            } else { //agrego el producto al carrito
                setCart([...cart, compra])
            }
        }

        const removeItem = (id) =>{
            setCart(cart.filter((item)=>item.id !== id)) //que filtra los item.ids distintos a los que le llegan por parametro id
        }

        //Funcion que vacia el array del carrito
        const clear = () => {
            setCart([])
        }

        //Funcion que retorna la cantidad de productos totales, sin discriminar tipo o categoria
        const cartQuantity = () => {
            return cart.reduce((acc, item) => acc += item.quantity , 0)
        }


        //Funcion que chequea si x id esta incluido en el array del carrito, devuelve true o false
        const isInCart = (id) => {
            return cart.some((item)=> item.id === id)
        }
        
        //Esta Funcion suma el valor total todos los productos en el carrito
        const cartTotal = () => {
            return cart.reduce((acc, item) => acc += item.price * item.quantity , 0)
        }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartQuantity, cartTotal}}> {/* etiqueta cartContext que cumple el rol de ser un Provider */}
            {children}
        </CartContext.Provider>
    )
}