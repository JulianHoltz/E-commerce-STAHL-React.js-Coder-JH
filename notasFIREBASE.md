# Firebase (es de google)
a partir de esta clase no vamos a usar mas MOCK
vamos a traer productos desde Firebase

WHYW proceso clasico de explorar nuevas ideas


# que no es gratis OJO
plan gratis SPARCK

Storage de archivos a partir de cierto punto
Analytics, te da solo lo basico

Se recomienda usar
Real time data base
Authentification

# arquitectura
desarrollo clasico, arquitectura
SPA -> consume API -> para llegar a BASE DE DATOS
corre en Browser -> la api es provista por Backend -> accede y guarda via SQL o noSQL

NUESTRO BACKEND va a ser FIREBASE... que es una libreria

con firebase no usamos put, get, post... pero es similar
Tiene ya Metodos, que hacen unas cosillas mas...


# FIRESTORE
ojo, no es STORAGE

Firestore esta en menu -> Compilacion

1
-crear base de datos
2
-ubicacion (no lo modifiquen...USA)
-ID de BD (se genera automatico...)
-siguiente
3
`se puede cambiar este paso, pero a mano`
-Modo produccion (los datos son privados, accessos segun regla de seguridad) "la BD no devuelve nada"
-Modo de prueba (La BD si devuelve los datos) `este es el que va OJO que tiene un limite de tiempo 30d`
4
-USAR!

# Crear Coleccion
iniciar coleccion, el nombre en este caso products
el ID del objeto, le pongo id dinamico
en campo tipo y valor, voy poniendo todos los atributos de mi objeto

tipo de dato (selecciono) "map significa objeto"

# COnectar con mi App
instalo firebase en Node

en la WEB
voy al engranaje
configuracion de proyecto
entro a web app, que tiene simbolo </>
le pongo nombre a mi APP (STHAL e commerce)
no tildo la opcion, y le doy aceptar

me da los pasos...

La confi se puede hacer en Main, en App o tenerla por separado
es mejor ponerla separado en carpeta Services

traigo el SDK que son los pasos que me dio firebase en un archivo firebase.jsx son las configs.

# Paso extra para usar mas facil FIrebase
en firebase.jsx creo una const para exportar... mas facil
Metodo get firestore

esto le sumo al firestore.jsx:

//import del paso extra
import { getFirestore } from "firebase/firestore";

//paso extra Con esto es mas facil llevarlo a todos lados... (al final)  
export const db = getFirestore(app);


# IMPORTANTE
Ver afters para terminar carrito