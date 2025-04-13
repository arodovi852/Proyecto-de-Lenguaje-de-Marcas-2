# Explicación del código

## Galería

Para la galería, se añadió una galería de fotos donde se pueden añadir y eliminar imágenes dinámicamente. Esto fue una tarea ardua ya que, debido a la falta de algo parecido en el código,
esta tuvo que ser creada de 0, sin embargo la decisión final fue introducirla en la sección principal como si de una sección de "sugerencias" se tratase, aunque no tenga ese propósito como tal.

Este es el código completo:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L1-L20

Primero, se crearon constantes para el contenedor donde se almacenan las imágenes y para el archivo a introducir:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L2-L3

Luego, esta línea de código se dispara cuando el usuario selecciona un archivo:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L5

Esto de aquí evita que se suban archivos que no sean imágenes como archivos de texto y por ello evitar errores:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L6-L7

Finalmente, este código permite cargar la imagen en la página web.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L8-L17

Cabe destacar que encontré la solución de utilizar FileReader por internet, donde FileReader es una API de JavaScript que convierte archivos locales en datos utilizables por la web:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L8

reader.readAsDataURL() convierte la imagen a una URL base64 para poder usarla como src de una etiqueta <img> :
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L17

Finalmente, en el onload() se crea una etiqueta <img>, se le asigna el contenido cargado como imagen, le da una clase CSS para implementar estilos visuales, la agrega al contenedor de la galería
y yo personalmente he decidido añadirle un evento para eliminarla al presionar click sobre ella para simplificar la subida y eliminación de imágenes:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/3afb03ca64845b96d68d9a4b143a7ae75276a4fd/JS/galeria.js#L9-L15

## Formulario

En este archivo se tomó el formulario creado en la sección de contacto para hacer que, en caso de que el usuario introduzca un correo erróneo, le aparezca por pantalla
el error inmediatamente al salir.

El código se ve así:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L1-L27

Ahora bien, estas dos primeras líneas almacenan los datos a utilizar, más en concreto el formulario y el input del email para la comprobación más adelante:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L2-L3

Luego, este evento blur ocurre cuando el usuario hace clic fuera del input de email, por lo que esto es lo que permitirá mostrar el mensaje de error:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L5

Ahora bien, el siguiente código elimina espacios en blanco por el usuario en caso de que accidentalmente haya añadido alguno, y usa una expresión regular para la comprobación
de que el email es correcto (que tuve que buscar por internet):
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L6-L14

Esto de aquí impide que el formulario se envíe antes de tiempo:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L18-L19

Estas líneas muestran un error en caso de que se envíe el formulario con un correo incorrecto:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L20-L22

Pero si el formulario es correcto, se mostrará un mensaje diciendo que se envió correctamente y se vaciarán los campos:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/f91dad5ef66ff25af9c1564c86553b95c7bb3842/JS/formulario.js#L24-L25

## Filtros

Para los filtros, se utilizó la caja previamente maquetada en productos donde se iba a poder introducir tanto un filtrado de precios como una ordenación de productos
según varios criterios como relevancia, precio o género musical

En cuanto al código en JS, primero se crean las constantes para utilizar en el código:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L2-L7

Luego, esta función recibe los datos necesarios buscando el nodo del producto y a su hijo donde está toda la información,
de forma que devuelve la información de dentro de cada producto:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L9-L19

Finalmente, la última función engloba todo lo que se refiere al filtrado de productos:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L21-L55

Aquí dentro, se crean las constantes para el mínimo y máximo del precio filtrado (0 e infinito) y 
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L22-L24

Aquí se llama a la función anterior para guardar la información como un array:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L26

Más adelante, esta línea de código filtra en función al precio, y hace que solo se queden guardados los productos entre el precio mínimo y máximo:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L28

Luego, esta sección del código permite filtrar según diversos criterios:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L30-L44

Debido a esto, se ha tenido que cambiar el HTML también para añadirle esta información y que así pudiese ser ordenado de esta forma:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/productos.html#L52-L57

Pero para que todo esto funcione, se debe vaciar los productos y reinsertar los productos filtrados y ordenados:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L48-L49

Esta línea de código está aquí para que cada vez que se cambie algún valor como el precio o el orden, se ejecute la función previamente mencionada:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L52

Por último, para establecer un orden predeterminado, al final del código se ejecuta la función anteriormente definida:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/8b9b6c60e561b890d01da346292c1c74ac65de17/JS/filtros.js#L54

## Carrito


