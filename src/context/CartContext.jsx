import { useState } from "react";
import { createContext } from "react";


//Creo el contexto
export const CartContext = createContext(); //lo eporto para poder usarlo fuera

//declaro el proveedor
export const CartProvider = ({children}) => {
    //declaro el estado
    const [cart, setCart] = useState([]) //array vacio, por que voy a ir acumulando los objetos que representan los productos


    //funciones dinamicas

        const addItem = (item, quantity) => {
            let compra = {...item, quantity} //esto es un spreed
            setCart(compra)
        }
    return(
        <CartContext.Provider value={{cart, addItem}}> {/* etiqueta cartContext que cumple el rol de ser un Provider */}
            {children}
        </CartContext.Provider>
    )
}