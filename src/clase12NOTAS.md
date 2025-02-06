# Rendering 
vamos a ver:
Principios basicos
Tecnicas de Rendering condicional
Render Optimization
React Memo


`React trabaja con un lfujo de reconciliacion`
modo en que carga, al cambiar un estado se modifica un componente y sus hijos, pero sin modificar el padre
entonces cargo menos, no toda la pagina con cada cambio

Si cambia algo -> Uso un estado


Info Hijo a padre -> Evento
si paso dato, funcion padre a hijo -> (respuesta min 15 clase 12)


# Render Condicional
Tiene dos posibilidades
en caso de true carga algo
en caso de false carga otra cosa

Un Desmontaje es cuando un nodo deja de existir
muestro una cosa o la otra

`display none no vale aca` Aca aparece o no aparece... Render condiciona;
loading ? <h2>algo</h2> : <h3>otra cosa</h3>

canales, son las versiones de la app
canal produccion
canal QA
canal desarrollo

Desmontaje -> componente deja de existir...

# Cleaners
Puedo limpiar Estados y Efectos
para reducir el margen de error
Se usa en pasarrellas de pago, lo saco del lugar de pago para que no se equivoque y lo vuelva a hacer
lo saco de la pantalla y limpio

`Los renders condicionales a veces causan Bugs` OJO

# COndicional con return anticipado

El componente retorna algo, le pongo una condicion con un return

if(condition ===true){
return h2 la condicion se cumplio h2
}
return h2 la condicion no se cumplio h2

`es lo mismo que un ternario...`
Esta mal visto en el mundo del programador, pero si sirve si tengo mas de un condicional
por ejemplo como una especia de catch para atrapar un error...

ternario
condicion === true ? esto : sino.lo otro


# MEMO
no confundir con useMemo
React.memo(componente)
guardo en la memoria el componente, para no renderizarlo cuando no hayan cambiado nada en su contenido...

Sirve para ahorrar renderizacion,
No hay que usarlo en todos lados, y no vale la pena en renders simples

Es para grandes Listas! cosas grandes que son pesadas...