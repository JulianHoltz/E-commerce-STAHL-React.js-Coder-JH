import React, { useContext, useState } from 'react'
import {CartContext} from '../context/CartContext'
import { addDoc, serverTimestamp, collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Link } from "react-router-dom";
import Loader from './Loader';
import EmptyCart from './EmptyCart';


const Checkout = () => {
    const [user, setUser] = useState({});
    const [mailValidator, setMailValidator] = useState('');
    const {cart, cartTotal, clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [loader, setLoader] = useState(false);
    
    //Funcion que captura los datos ingresados, y con ellos arma el objeto "comprador"
    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value//Propiedad dinamica va entre corchetes
            }
        )
    }
    console.log(user, mailValidator)

    const finalizarCompra = (e) =>{
        e.preventDefault() //Ojo que si no lo freno, me borra TODO! acordate que el submit refresca la pagina
        //Validacion basica de que los campos tienen info
        if(!user.name || !user.lastname || !user.adress || !user.email){
            alert('los capos son obligatorios!')
        } else if(user.email !== mailValidator){
            alert('Los mails no concuerdan')
        }else{
            //arranco el loader...
            setLoader(true)
            //Datos para enviar a DB
        let order = {
            buyer:user,
            shop:cart,
            total:cartTotal(),
            date:serverTimestamp()
        }
        const sales = collection(db, "oreders");
        //Agregar documento
        addDoc(sales, order)
        .then((res)=>{
            //Como la compra salio OK, actualizo mi Stock
            cart.forEach((item)=>{
                const docRef = doc(db,"products", item.id);
                getDoc(docRef)
                .then((dbDoc)=>{
                    updateDoc(docRef, {stock:dbDoc.data().stock - item.quantity})
                })
                .catch((error)=>console.log(error))
            })

            setOrderId(res.id)
            clear() //si salio todo Ok borro el carrito, para no repetir compras identicas por error...
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoader(false))
        }
        

        
    }


    //return anticipado para meter el Loader
    if(loader){
        return <Loader/>
    }

    if(!cart.length && !orderId){return <EmptyCart/>}

  return (
    <>
        {
            orderId !== '' 
            ? <div>
                <h4>Orden Generada con exito!</h4>
                <h5>El id de tu compra es: {orderId}</h5>
                <Link to='/'>Volver al Home</Link>
            </div>
            : 
            <div>
            <h1>Completa con tus datos</h1>
            <form action="" onSubmit={finalizarCompra}>
                <input type="text" name='name' placeholder='ingrese su nombre' onChange={userData}/>
                <input type="text" name='lastname' placeholder='ingrese su apellido' onChange={userData}/>
                <input type="text" name='adress' placeholder='ingrese su direccion' onChange={userData}/>
                <input type="email" name='email' placeholder='ingrese su correo' onChange={userData}/>
                <input type="email" name='second-email' placeholder='repita su correo' onChange={(e) => setMailValidator(e.target.value)}/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
        }

    </>
  )
}

export default Checkout