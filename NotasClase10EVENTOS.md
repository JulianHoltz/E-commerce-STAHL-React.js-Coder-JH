# EVENTOS
que vamos a ver
-EVENTOS
-CPMPONENTES basados en EVENTOS

IMPORTANTE
Lo vamos a usar al final de la app "es para hacer FORMULARIOS"

Lo que mas hace front FORMULARIOS
-Capturar datos
-validar
-enviarlos a Backend

Los eventos sirven para manejar los formularios
`NO son parecidos a los de js...`


# Eventos automaticos
por ejemplo la tipica inactividad,
te pregunta si quers siguir viendo... si hace mucho no tocas nada

Otro ejemplo, pagina de un banco, estas bastante inactivo... te vuelve a pedir la clave
y en general si por x tiempo no respondes, te cierra la sesion

# Eventos manuales
dependen de una interaccion
Botones...
Un imput...


# Vamos a ver eventos manuales
OnClick, OnChange...

# DOM events
Dispositivo/accion
mouse, imput, wheel event, keybord...

Custon Events.
son propios


El mas conocido
<div>
    <Button onCLick={input}>Boton</Button>
</div>

# Event listener
Esta bueno usarlos, pero ojo que se acumulan!
en react se acumulan muy facil ojo,

Antes se ponia un escuchador para ver la interaccion del usuario, se ponia en el div principal.
si no habia uso, sacaba un alert avisandole que iba a cerra...
`El problema es que recopila mucha info... y la va a cumulando a la larga es mucha data...`
Es comun que una App lenta de React se deba a el tema de que tiene Evetn Listeners de mas... y/o acumulando basura...

- Ejemplo Listener Window
Window.addEventListener('resize', onResize)

return () => {
wondow.removeEventListener(onResize)
}

Con el return se limpia el registro, para que no pese tanto...


# SYNTHETIC EVENTS
los browsers tienen algunas variaciones...
por eso react lo normaliza


-sirve para estandatizar los eventos

Una vez que se ejecuta el evento, se destruye (los eventos On) que son nativos y guarda una copia.

En cambio los EventListener no. por que son custom.

# Formularios
Con el envento OnkeyDown puedo bloquear siertos caracteres

con target.value puedo agarrar el contenido del input


# IMPORTANTE
`PreventDefault()` es nativo de Js, y evita que haga lo que hace siempre
ejemplo un submit recargar la pagina, que en react perderia los datos guardados...

otro similar es `StopPropagation()` ver...

# Funcionamiento en React
Las props van de padres a Hijos pero...

El hijo le puede pasar datos al padre, por que los Eventos Suben
pasan de hijo a padre


