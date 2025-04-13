# Explicación del código

## Galería

Se añadió una galería de fotos donde se pueden añadir y eliminar imágenes dinámicamente.

## Formulario



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


