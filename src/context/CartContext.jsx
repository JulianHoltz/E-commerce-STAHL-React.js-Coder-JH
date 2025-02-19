import { useState } from "react";
import { createContext } from "react";


//Creo el contexto
export const CartContext = createContext(); //lo exporto para poder usarlo fuera

//declaro el proveedor
export const CartProvider = ({children}) => {
    //declaro el estado
    const [cart, setCart] = useState([]) //array vacio, por que voy a ir acumulando los objetos que representan los productos


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

        //Funcion que chequea si x id esta incluido en el array del carrito, devuelve true o false
        const isInCart = (id) => {
            return cart.some((item)=> item.id === id)
        }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}> {/* etiqueta cartContext que cumple el rol de ser un Provider */}
            {children}
        </CartContext.Provider>
    )
}