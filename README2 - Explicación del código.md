# Explicación del código

## Borrar ofertas

La función borrar ofertas **elimina completamente tanto la oferta en la de la página principal**, seleccionándolo con .querySelector() y eliminándolo con .remove().
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/borrarOfertas.js#L1-L8

## Cambio de disponibilidad del producto

Debido a un hipotético caso de falta en uno de los álbumes, **se cambia el precio de uno de los álbumes por "Fuera de Stock".**
Esto se consigue seleccionando el elemento con .querySelector(), creando un nuevo elemento disponibilidad que sea un párrafo al cual se le asigna un contenido
de "Fuera de Stock" con .textContent y se selecciona el precio con .lastElementChild para llegar a al elemento y se intercambia con .replaceChild()
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambiarDisponibilidadDelProductor.js#L1-L10

## Cambios visuales en la página principal

Esta sección se refiere a todo lo que concierne los **cambios visuales de la página principal** agrupados en único .js. Esto asume que el usuario es nuevo
y, por tanto, no tiene todavía ninguna recomendación en la página.

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambioVisualPrincipal.js#L1-L33

### Quitar los links de la página principal

Aquí se **eliminan los links de la página que te redirigen a productos** por redundancia con .querySelectors() donde se crea un nuevo elemento
a partir del ya existente con .createElement(), .className para tomar las propiedades de la clase del elemento antiguo y luego .replaceChild()
para reemplazar el antiguo.

https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambioVisualPrincipal.js#L2-L9

### Eliminar recomendaciones

Como el usuario aún no tiene recomendaciones, estas **no pueden aparecer**, así que se borran con .remove()
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambioVisualPrincipal.js#L12-L16

### Eliminar intereses

De igual forma, se **elimina la última sección de la página principal** seleccionándolo con .lastElementChild y una vez seleccionado se elimina con .remove()
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambioVisualPrincipal.js#L18-L21

### Cambiar posición del footer

Finalmente, para ajustarse a los cambios, **se le ajusta la posición al footer** con .style, cambiando las propiedades position y width para que se vea adecuadamente.
https://github.com/arodovi852/Proyecto-de-Lenguaje-de-Marcas-2/blob/1c127b1e1fca151a831d1d75ef4fabdf66089772/JS/cambioVisualPrincipal.js#L24-L28
