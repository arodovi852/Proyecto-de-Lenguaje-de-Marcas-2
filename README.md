# Proyecto-de-Lenguaje-de-Marcas: CDShop

Para este proyecto decidí hacer una página web de venta de CDs, la cual llamé CDShop.

La página principal recibe al usuario con la cabecera, donde vienen incluidos tanto el logo de la página como
las distintas páginas a las que se puede acceder.

![img.png](assets/img.png)

Además, esta posee un buscador y un botón de modo oscuro que,
aunque no sea funcional aún, está maquetado para que funcione con sus respectivos colores.

![img_2.png](assets/img_2.png)

Lo primero que el usuario observa son las ofertas más recientes moviéndose de un lado de la pantalla a otro,
donde se le puede dar click para acceder a los productos.

![img_3.png](assets/img_3.png)

También incluye una sección con lanzamientos populares y otras recomendaciones. Darle click a una de las imágenes
te lleva también a la página de productos.

![img_4.png](assets/img_4.png)

Más abajo se encuentra una sección dedicada al inicio de sesión para poder otorgar mayor precisión al usuario
en cuanto a recomendaciones. Dándole click al login te lleva a la página de inicio de sesión.

![img_5.png](assets/img_5.png)

Finalmente, la página posee un pie de página con la información de la página: Sus redes sociales y página de contacto.

![img_6.png](assets/img_6.png)

Tanto la cabecera como el pie de página son universales.

Pasando a los productos, esta te recibe con diversos álbumes con sus nombres respectivos precios, además de un
filtro para poder ver distintos productos.

![img_8.png](assets/img_8.png)

![img_7.png](assets/img_7.png)

Esta página también incluye una sección de sugerencias basada en la búsqueda del usuario.

![img_9.png](assets/img_9.png)

En términos de la página de inicio de sesión, esta recibe al usuario con un formulario para crearse una cuenta,
además de mostrar las múltiples mejoras que recibe por crearse una cuenta.

![img_11.png](assets/img_11.png)

Por otro lado, esta página también muestra algunos álbumes que el usuario podría recibir gracias a iniciar sesión.

![img_12.png](assets/img_12.png)

Por último, la página de contacto tiene un diseño simple: Muestra una sección recibiendo al usuario, otra
mostrando los distintos motivos por lo que el usuario podría contactar con la empresa y un formulario para
rellenar acerca del problema en cuestión.

![img_13.png](assets/img_13.png)

![img_14.png](assets/img_14.png)

---
## Explicación del proyecto
En términos de distribución, todas las páginas fueron estructuradas en HTML y todos los estilos fueron incluidos en 
una única página de CSS. Aquí se utilizaron las variables para facilitar el cambio de los colores y mantener una
mejor organización.

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L1-L12

Todas las páginas están dividas en 3 secciones distintas, de forma que hay un total de 12 secciones, además del header y footer.

La cabecera se compone del propio logo junto con una barra de búsqueda y las diversas páginas. Su estructura HTML es la siguiente:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/contacto.html#L8-L17
En cambio, su CSS es este:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L16-L109
Aquí podemos destacar varias cosas, más específicamente la barra de búsqueda, ya que esta está animada con un hover para que se extienda al pasar
el ratón por encima:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L50-L67
![img_1.png](assets/img_1.png)
En cambio, el footer es mucho más simple:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/contacto.html#L68-L79
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L121-L164
Está dividido en dos partes, una con redes sociales y otra con las formas de contactar a la empresa.

Pero pasando a las propias secciones en sí, la primera sección se trata de la animación de la oferta:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/principal.html#L18-L20

Su estructura HTML es bastante simple, sin embargo cabe destacar la animación de su CSS:

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L167-L206

Aquí, el rectángulo se mueve desde la derecha y va cambiando de color intermitentemente.


La siguiente sección se trata de los lanzamientos, donde cabe destacar una cosa importante acerca del proyecto:
El uso de etiquetas. Todas las etiquetas tienen un propósito, y es por esto que cabe destacar la diferencia entre las
etiquetas utilizadas para agrupar contenido.

Para agrupar distintas etiquetas y contenido, pueden utilizarse sections, articles y divs.

Los sections se utilizan para agrupar contenido relacionado entre sí, mientras que los articles pueden funcionar
por su propia cuenta sin necesitar información externa.

Sin embargo, los sections y articles requieren del uso de headings con jerarquía. Es por esto que cuando es
necesario agrupar contenido y no cabe la posibilidad de introducir un heading se deberá usar un div como último
recurso.

Es por esto que se utilizan diversos divs a lo largo de la estructura HTML, puesto que muchas de las 
imágenes requerían ser agrupadas dentro de una etiqueta, pero no había forma de introducir un heading coherente,
por lo que se utilizó divs en múltiples ocasiones. Dicho esto, esta es la estructura HTML junto con su CSS:

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/principal.html#L21-L39

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L208-L257

Como se puede comprobar, solo se usan divs en situaciones donde se deben agrupar imágenes sin texto alguno. 

Continuando por la sección inferior, las recomendaciones simplemente están conformadas por una sección con un enlace a la creación de cuenta:

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/principal.html#L40-L43

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L259-L293

En términos de la página de productos, la página está dividida en dos: La parte izquierda y la parte derecha. Esto se debe al filtro, ya
que este está al mismo nivel que los productos y ocupa un porcentaje de la pantalla.
En la parte izquierda se encuentra el filtro, donde se utilizó forms de tipo radio para poder escoger únicamente una entre todas las opciones
de ordenación, incluso si solo está maquetado y no funcione realmente.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/productos.html#L19-L45
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L309-L349

Por otro lado, la parte derecha está conformada por los productos, donde se encuentra tanto la imagen del disco como su descripción.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/productos.html#L46-L80
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L350-L401


De esta forma, toda esta estructura eso se vería así:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/productos.html#L18-L80


Para terminar con esta página llegamos a la sección de sugerencias, donde todo está dividido en varias secciones.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/productos.html#L81-L97
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L402-L452

Siguiendo por la página del login, aquí se pueden ver estructuras más complejas, como la primera, donde hay un formulario junto 
a una foto todo dentro de una misma caja. De esta forma, esta página tiene la siguiente estructura, siempre respetando el uso apropiado de
las etiquetas adecuadas para no caer en la trampa de usar únicamente divs genéricos:

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/provisional.html#L18-L33
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L525-L588
Además, aquí se utilizan 2 tipos de etiquetas form únicas: email y password.
Email solo acepta cadenas de caracteres que terminen en un formato de email válido, mientras que password no mostrará por pantalla
la cadena de caracteres

Más adelante se encuentran el conjunto de cajas, cuya estructura es bastante simple:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/provisional.html#L34-L53
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L589-L595

Para terminar con esta página tenemos la sección de abajo que, como la animación en la página de bienvenida, esta se mueve de un lado de la pantalla
a otro, usando la misma animación pero bajo un contexto distinto. 
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L598-L643
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/provisional.html#L54-L59

Además, esta se frena en seco al poner el ratón encima, ya que es más
difícil de darle debido a su pequeño tamaño. Esto es posible gracias a la siguiente línea de código:

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L616-L618

Por último tenemos la página de contacto, donde recibe al usuario con una parte superior introductoria que ocupa toda la pantalla.
Su estructura es la siguiente:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/contacto.html#L19-L23
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L455-L463

Luego está el conjunto de motivos para contactar con la empresa, dividida en 3 cajas que contienen texto.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/contacto.html#L24-L37
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L465-L480

Por último está el formulario, donde caben destacar algunas etiquetas.
Esta es la estructura:
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/contacto.html#L38-L67
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/0d3e9f10d4dd0076a3153318144213abc7f04ad5/css/styles.css#L481-L520
Aquí se utilizan checkboxes, radios, date, text, reset, submit.

Las radios se han explicado previamente, y las checkboxes funcionan como estas pero permite escoger múltiples a la vez.

Los text permiten al usuario introducir texto, mientras que las date solo aceptan fechas

Y para terminar, reset sirve para reiniciar y eliminar la información del formulario mientras que submit permite al usuario enviar su respuesta.


