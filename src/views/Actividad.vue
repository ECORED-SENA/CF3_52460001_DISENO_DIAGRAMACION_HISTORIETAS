<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Explorando las técnicas y presentación de historietas ',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  las principales técnicas de reproducción de imágenes utilizadas en la creación de historietas, así como los modos de presentación de proyectos como el <em>artbook</em>.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes técnicas fue una de las primeras en permitir grandes tirajes en la impresión de imágenes? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impresión digital. ', esCorrecta: false },
            { id: 'b', texto: 'Xilografía. ', esCorrecta: true },
            {
              id: 'c',
              texto: 'Litografía <em>offset</em>. ',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Serigrafía. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué técnica utiliza una plancha de metal para el grabado en bajo relieve? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Calcografía. ', esCorrecta: true },
            { id: 'b', texto: 'Xilografía. ', esCorrecta: false },
            { id: 'c', texto: 'Impresión digital. ', esCorrecta: false },
            { id: 'd', texto: 'Serigrafía. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el sistema de impresión empleado en grandes tirajes por su economía y capacidad de reproducción? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impresión digital. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Litografía <em>offset</em>. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Xilografía. ', esCorrecta: false },
            { id: 'd', texto: 'Serigrafía. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica es utilizada generalmente para entintar y rotular textos en los globos de historietas? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pincelado. ', esCorrecta: false },
            { id: 'b', texto: 'Lápiz quemado. ', esCorrecta: false },
            { id: 'c', texto: 'Rotulador calibrado. ', esCorrecta: true },
            { id: 'd', texto: 'Plumilla. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes afirmaciones es verdadera sobre el <em>artbook</em>? ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es una técnica de coloreado manual. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incluye bocetos, guiones gráficos e ilustraciones de un proyecto. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es un tipo de <em>storyboard</em> digital. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un método de impresión tradicional. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica utiliza la incompatibilidad entre la grasa y el agua para la reproducción de imágenes? ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Litografía. ', esCorrecta: true },
            { id: 'b', texto: 'Impresión digital. ', esCorrecta: false },
            { id: 'c', texto: 'Grabado en linóleo. ', esCorrecta: false },
            { id: 'd', texto: 'Xilografía. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el proceso que implica la planificación gráfica de una historieta antes de su entintado? ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Impresión. ', esCorrecta: false },
            { id: 'b', texto: 'Arte final. ', esCorrecta: false },
            { id: 'c', texto: '<em>Storyboard</em>. ', esCorrecta: true },
            { id: 'd', texto: 'Colorear. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes métodos se utiliza para imprimir en grandes formatos como vallas y gigantografías? ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Calcografía. ', esCorrecta: false },
            { id: 'b', texto: 'Serigrafía. ', esCorrecta: false },
            { id: 'c', texto: 'Litografía. ', esCorrecta: false },
            { id: 'd', texto: 'Impresión digital. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El rotulador calibrado es una técnica comúnmente usada para la caligrafía en historietas. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso. ', esCorrecta: true },
            { id: 'b', texto: 'Verdadero. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La técnica de xilografía se basa en el uso de una plancha de madera tallada a mano. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso. ', esCorrecta: false },
            { id: 'b', texto: 'Verdadero. ', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
