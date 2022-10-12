# Proyecto last.fm

## github-pages (ejercicio terminado)

- link (https://bitia83.github.io/clon-lastfm/)



## Descripción

Generaremos un fake de la web  **[last.fm](https://www.last.fm/home)**, web de playlists de canciones. El resultado se deberá parecer al que se muestra a continuación:

![Lastfm](https://i.imgur.com/W6lRsdO.gif)


## Instrucciones


### Pasos que tienes que seguir para entregar el ejercicio:

1. Realiza un fork del repositorio.
2. Clona __tu__ repositorio a tu máquina local.
3. Guarda los ficheros modificados:
    - `git add .`
   _Puedes usar un código de las historias de usuario para identificar los commits
    - `git commit -m 'us #1'`
4. Sube los cambios al repositorio:
    - `git push`
5. Genera una __gh-page__ y envía la url vía slack.

### DATOS

Las canciones se encuentran dentro del fichero `music.json` (**-Este fichero no es necesario tocarlo-**). Fichero con las 50 canciones más escuchadas la semana pasada.

El fichero tendrás que cargarlo vía `fetch()`.

El formato del fichero es el siguiente:

```json
[
    {
        "name": "The Less I Know the Better",
        "duration": "0",
        "listeners": "439958",
        "mbid": "",
        "url": "https://www.last.fm/music/Tame+Impala/_/The+Less+I+Know+the+Better",
        "artist": {
            "name": "Tame Impala",
            "mbid": "63aa26c3-d59b-4da4-84ac-716b54f1ef4d",
            "url": "https://www.last.fm/music/Tame+Impala"
        },
        "@attr": {
            "rank": "0"
        },
        "genre": "reggae"
    },
    ...
]
  ```

### HTML

Clona la misma estructura que aparece en la animación: header, cuadros, menú, listado (éste último se cargará dinámicamente según la opción seleccionada)

### Estilos

- Los colores deberían ser uniformes, asocia los colores a variables css para utilizarlos. La lista de variables se facilita en la hoja de estilos.
- Las imágenes utilizadas se facilitan en la hoja de estilos. Pero puedes utilizar las imágenes que quieras.
- Cada imagen de los estilos de música debe tener aplicado un [filtro](https://developer.mozilla.org/es/docs/Web/CSS/filter) css, puedes seleccionar el que más te guste.
- El logo del título se facilita en la hoja de estilos.
- La lista no debe aparecer hasta que no se cargue la página. Mira la alternancia del fondo en cada una de las canciones.
- Las canciones aparecen numeradas según su posición (usa la propiedad `step-counter` para pintar el número).
- El icono del reproductor se puede llevar a cabo mediante una fuente de iconos.

### USER STORIES

**User story 1**  
Dado que soy un usuario con conexión a internet y un navegador  
Cuando entro en la página LastFm.github.io  
Entonces puedo ver una lista de canciones más escuchadas del momento  

**User story 2**  
Dado que estoy en cualquier lugar de la web  
Cuando clico la opción "Overview" de la barra superior  
Entonces vuelvo a la página principal y puedo ver un listado de todas las canciones más escuchadas  

**User story 3**  
Dado que estoy en la web  
Cuando clico en la opción "Top 10 listened" de la barra superior  
Entonces puedo ver un listado con las 10 canciones más escuchadas  

**User story 4**  
Dado que estoy en la web  
Cuando clico en la opción "Rock" de la barra superior  
Entonces puedo ver un listado con las canciones más escuchadas del género rock  

**User story 5**  
Dado que estoy en la web  
Cuando clico en la opción "Hip-Hop" de la barra superior  
Entonces puedo ver un listado con las canciones más escuchadas del género hip-hop  

**User story 6**  
Dado que estoy en la web  
Cuando clico en la opción "Indie" de la barra superior  
Entonces puedo ver un listado con las canciones más escuchadas del género hip-hop  

**User story 7**  
Dado que estoy en la web  
Cuando clico en la opción "Jazz" de la barra superior  
Entonces puedo ver un listado con las canciones más escuchadas del género jazz  

**User story 8**  
Dado que estoy en la web  
Cuando clico en la opción "Reggae" de la barra superior  
Entonces puedo ver un listado con las canciones más escuchadas del género reggae  

**User story 9**  
Dado que estoy en la página y dispongo de un ratón o trackpad  
Cuando paso el cursor del ratón o trackpad por encima de la barra de menú  
Entonces la barra de menú cambia de estilo  

**User story 10**  
Dado que estoy en la página principal y veo una lista de canciones  
Cuando hago click en una de ellas  
Entonces se abre la página de la canción con toda su información  

**User story 11**  
Dado que estoy en la página principal y veo una lista de canciones con sus nombres de artistas  
Cuando hago click en el nombre del grupo o artista  
Entonces veo una página nueva con información sobre el grupo o artista  

### Requisitos técnicos
Sentíos libres de utilizar todo lo que habéis aprendido hasta ahora.
Sin embargo, sería interesante que siguieseis unas buenas prácticas de programación:
- Procurad que las funciones de javaScript hagan una única cosa. Si necesitáis que una función realice varias tareas lo debería hacer llamando a otras funciones.
- Utilizad nombres semánticos para todo: variables, funciones, objetos, arrays, etc.
- Se pueden utilizar todos los ficheros, tanto de js como de css, que consideréis, si creeis que así mejorará el código y facilitará el desarrollo.
- Se deberá realizar testing de al menos una de las funciones.

### Desarrollo
Incorporad las historias de usuario al backlog del kanban (Trello).

Incorporad también otras historias que no sean de usuario pero que sean necesarias
para el desarrollo.
    Ejemplo: pruebas de concepto (cosas nuevas), diseño general, desarrollo de estilos o el mismo análisis de las historias de usuario etc.

El desarrollo se realizará en dos sprints de unos 3-4 días cada uno.
    Deberéis seleccionar las historias que creéis que podéis abordar por sprint.

Distribuid los roles scrum y las historias.
Una vez seleccionadas las historias habrá que analizar qué tareas serán necesarias para realizar cada una de ellas, e incorporarlas al kanban (es buena idea hacerlo mediante checklist).

Estas tareas se realizarán en la reunión de planificación del sprint.

Durante las dailies deberéis abordar el avance del desarrollo. Tareas completadas, pendientes, bloqueos, etc.

Las tareas se irán pasando de columna del kanban hasta el test y después el done.
Sólo habrá una tarea activa por coder en el DOING

Las tareas pasan al DONE cuando se han completado y testado.

El proyecto estará finalizado cuando termine el desarrollo y las pruebas de todas las historias de usuario.

# BONUS TRACK
Si os queda tiempo podéis implementar la carga de las canciones directamente desde la API de last.fm.

# RECURSOS
En el fichero style.css se proporcionan colores, filtros e imágenes que necesitarás para el desarrollo.

# ENTREGABLES
- Vía slack se entregarán los siguientes artefactos:
  - Kanban del proyecto.
  - url del repositorio del proyecto.
  - url de la gh-page.
  - Documento resumen de la retrospectiva del primer sprint con los acuerdos alcanzados.

- Se hará una retrospectiva general de todos los proyectos que servirá como entrega del ejercicio.
