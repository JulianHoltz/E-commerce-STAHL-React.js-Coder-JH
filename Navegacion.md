#  OJO LA PPT ESTA MUY DESACTUALIZADA EN ESTE TEMA

# Navegacion clase 9 React
Libreria React Router

-npm install react-router-dom
https://reactrouter.com/home
(hay otras)


Las configuraciones se hacen en el principal, que en este caso es APP

`Wraper (Brouser Router)`
es el que envuemlve la navegacion y da los permisos, si no esta envolviendo la aplicacion es posible que rompa...
escucha la url para saber que tiene que mostrar en pantalla

`Routes`

Route es cada ruta

OJO! estos componentes de navegacion no admiten estilos
por que se rompen

Routes envuelve las rutas
Route es la ruta, se le pone la direccion en path y el elemento que va a mostrar
"las rutas siempre van en minuscula"
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos al tren 🎵'/>}/>
      </Routes>


# Nota extra Crawlers
Son softwares que recorren webs para leerlas y buscar info. (También se los conoce como spiders)



# Componentes de Navegacion
tengo que importarlos
Estos componentes me hacen navegar sin recargar toda la pagina, como que cambia un estado

Hay dos....
`NavLink` para navar, tiene mas cositas... por ejemplo puedo saber cuando la ruta esta activa
`link` para botones y otros

Las librerias de estilos tienen sus propias librerias de navegacion,
por que algunas librerias de navegacion arruinan todos los estilos
hay varias modalidades de aplicar los NavLinks... ver grabacion

Todos los anchor tags `a` van a ser nav links

importo 
import { NavLink } from "react-router-dom";

cambio los href por to, para la direccion


# Recibir datos de RUTA

El boton "ver mas" tiene que tener navegacion tambien
y me tiene que llevar al item en si

hay que llamarlo
import {Link} from 'react-router-dom';

y asi puedo agregar e id del producto, en este caso por que el prouct ya estaba cargado en el componente
<button><Link to={`/item/${product.id}`}>Ver Mas</Link></button>


# Custom HOOK para parametros de Navegacion
La libreria trae este hook para usar parametros
import {useParams} from 'react-router-dom';


DATO. las url son siempre strings!
si los id los trabajo como numero los tengo que trasnforar