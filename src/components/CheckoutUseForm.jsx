import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import EmptyCart from "./EmptyCart";

const CheckoutUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { cart, cartTotal, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loader, setLoader] = useState(false);

  const onSubmit = (dataDelForm) => {
    //Si las validaciones dan todas OK
    let order = {
      buyer: {
        name: dataDelForm.name,
        lastname: dataDelForm.lastname,
        adress: dataDelForm.adress,
        email: dataDelForm.email1,
      },
      cart: {
        cart: cart,
        total: cartTotal(),
        date: serverTimestamp(),
      },
    };

    //traigo la collection...
    const sales = collection(db, "oreders");
    addDoc(sales, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };
  
  if(!cart.length && !orderId){return <EmptyCart/>}


  return (
    <>
      {orderId !== "" ? (
        <div>
          <h4>Orden Generada con exito!</h4>
          <h5>El id de tu compra es: {orderId}</h5>
          <Link to="/">Volver al Home</Link>
        </div>
      ) : (
        <div>
          <h1>Completa tus datos para generar la orden</h1>
          <form onSubmit={handleSubmit()}>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors?.name?.type === "required" && (
              <p style={{ color: "red" }}>Por favor complete el campo nombre</p>
            )}
            {errors?.name?.type === "required" && (
              <p style={{ color: "red" }}>
                El nombre debe contener como minimo 3 caracteres
              </p>
            )}

            <label htmlFor="">Apellido</label>
            <input
              type="text"
              name="lastname"
              {...register("lastname", { required: true, minLength: 3 })}
            />
            {errors?.lastname?.type === "required" && (
              <p style={{ color: "red" }}>
                Por favor complete el campo apellido
              </p>
            )}
            {errors?.lastname?.type === "required" && (
              <p style={{ color: "red" }}>
                El apellido debe contener como minimo 3 caracteres
              </p>
            )}

            <label htmlFor="">Direccion</label>
            <input
              type="text"
              name="adress"
              {...register("adress", { required: true })}
            />
            {errors?.adress?.type === "required" && (
              <p style={{ color: "red" }}>
                Por favor complete el campo domicilio
              </p>
            )}

            <label htmlFor="">email</label>
            <input
              type="email"
              name="email1"
              {...register("email1", { required: true })}
            />
            {errors?.email1?.type === "required" && (
              <p style={{ color: "red" }}>Por favor complete el campo email</p>
            )}

            <label htmlFor="">confirmacion email</label>
            <input
              type="email"
              name="email2"
              {...register("email2", {
                required: true,
                validate: {
                  equalsMails: (mail2) => mail2 === getValues().email1,
                },
              })}
            />
            {errors?.email2?.type === "required" && (
              <p style={{ color: "red" }}>
                Por favor complete el campo confirmacion de email
              </p>
            )}
            {errors?.email2?.type === "equalsMails" && (
              <p style={{ color: "red" }}>Los mails deben ser iguales</p>
            )}

            <button type="submit">Confirmar</button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutUseForm;
