<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evolución técnica: reproducción de imágenes
    
    .cont_1_1
      .row
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 Los métodos de impresión de imágenes han evolucionado a lo largo del tiempo, lo que ha permitido el desarrollo de diversas posibilidades en color, textura y forma. Estos procesos han transitado desde técnicas manuales y artesanales hasta la llegada de la impresión digital:
        .col-auto.d-none.d-md-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/1.svg")
      
      .cont_1_2.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
        .tarjeta.bg-white.p-4.p-lg-5.pt-lg-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Xilografía
                p Consiste en tallar una plancha de madera a mano con buriles o gubias, que luego se entinta para su transferencia en el soporte deseado (papel, cartón, cartulina). Fue una de las primeras técnicas que permitió la producción de periódicos e imágenes en grandes tirajes.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/3.png')
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Grabado en linóleo
                p Es una técnica de estampación en relieve que se diferencia de la xilografía por el uso de linóleo en lugar de madera como matriz para la impresión.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/4.png')
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Litografía
                p Proceso químico que aprovecha la incompatibilidad entre la grasa y el agua. La impresión se obtiene al grabar una matriz en piedra caliza. La tinta de impresión queda en las áreas previamente dibujadas, y luego se transfiere al papel.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/5.png')
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Serigrafía
                p Proceso de impresión que utiliza una malla para transferir tinta al soporte deseado.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/6.png')
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Litografía #[em offset]
                p Derivada de la litografía, utiliza una mantilla para transferir la tinta desde la plancha hasta el papel. Se emplean planchas divididas por los colores CMYK. Este sistema de impresión es popular en grandes tirajes debido a su economía y capacidad de reproducción.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/7.png')
            .row.pt-lg-4(titulo="")
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Impresión digital
                p Utiliza archivos digitales para llevar las imágenes al papel mediante inyección de tinta o impresión láser. Hay impresoras para formatos grandes, como vallas publicitarias y gigantografías. Es común en piezas personalizadas o de tiraje reducido.
              .col-lg-5
                figure.m-auto.col-8.col-md-6.col-lg-12
                  img(src='@/assets/curso/tema1/8.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Relación con los modos de producción

    .row
      .col(style="place-self:center;" data-aos="fade-right")
        p El diseño y las técnicas de producción en la creación de una historieta deben ser coherentes y estar alineadas, ya que el diseño aporta en la selección del género, las características formales y comunicacionales, así como en la ilustración. Las técnicas de producción, mediante herramientas tecnológicas, fortalecen las decisiones del diseñador en cuanto al concepto y el impacto en los usuarios.
        p.mb-0 En general, el diseño y la diagramación siguen una serie de pasos esquemáticos:
      .col-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/9.png")
    
    .cont_1_3.mt-5
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="<em>Storyboard</em>" :icono="require('@/assets/curso/tema1/10.svg')")
          .row.p-4.pt-0.col-lg-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 #[em Storyboard]
              p En esta etapa se planifica y consolida el guion y la historia de manera gráfica.
            .col-lg-4
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/11.png')
        .py-4.py-md-5(titulo="Encaje a lápiz y entintado" :icono="require('@/assets/curso/tema1/12.svg')")
          .row.p-4.pt-0.col-lg-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Encaje a lápiz y entintado
              p Se dibuja la historieta a mano, se pasa en limpio y se entinta en blanco y negro. Este paso puede omitirse si el ilustrador trabaja de forma digital.
            .col-lg-4
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/13.png')
        .py-4.py-md-5(titulo="Colorear" :icono="require('@/assets/curso/tema1/14.svg')")
          .row.p-4.pt-0.col-lg-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Colorear
              p Se añade color, ya sea de manera digital o manual, utilizando lápices de acuarela, marcadores u otras herramientas que proporcionen color.
            .col-lg-4
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/15.png')
        .py-4.py-md-5(titulo="Arte final" :icono="require('@/assets/curso/tema1/16.svg')")
          .row.p-4.pt-0.col-lg-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Arte final
              p Se prepara el archivo final para su impresión o publicación digital, asegurando que las imágenes estén a 300 DPI, los textos convertidos en contornos o curvas, el encaje con el tamaño del papel y la selección del sistema de color adecuado.
            .col-lg-4
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/17.png')
        .py-4.py-md-5(titulo="Impresión o publicación" :icono="require('@/assets/curso/tema1/18.svg')")
          .row.p-4.pt-0.col-lg-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Impresión o publicación
              p Se transfiere el archivo gráfico al soporte seleccionado. En esta etapa se eligen las paletas y la cantidad de color (monocromía o policromía) a utilizar en el material impreso. El sistema de impresión se selecciona de acuerdo con el tiraje y el tamaño del soporte. Para historietas destinadas exclusivamente a pantallas, se debe utilizar el sistema de color RGB.
            .col-lg-4
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/19.png')

      Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Técnicas
    
    p(data-aos="fade-right") En el diseño de historietas, los ilustradores emplean diversas técnicas que no solo permiten ilustrar gráficamente un guion, sino también establecer una identidad visual distintiva. Algunas de estas técnicas son:

    .cont_1_4.mt-4
      .row.mt-5
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure 
            img(src="@/assets/curso/tema1/22.png")
        .col-lg-9(data-aos="zoom-in")
          AcordionA(tipo="a" clase-tarjeta="tarjeta")
            .row.col-xl-11.m-auto(titulo="Pincelado")
              p Proporciona claridad en líneas y fondos, siendo una de las técnicas más utilizadas entre ilustradores y caricaturistas.
            .row.col-xl-11.m-auto(titulo="Plumilla")
              p Esta técnica es común en la caligrafía y permite obtener un grosor particular que da vida y valor a las líneas del contorno del dibujo.
            .row.col-xl-11.m-auto(titulo="Rotulador calibrado")
              p Generalmente se utiliza para el texto dentro de los globos de diálogo, aunque también se emplea para el entintado.
            .row.col-xl-11.m-auto(titulo="Lápiz quemado")
              p Consiste en el uso de un lápiz grueso de tono oscuro, lo que aporta fuerza a las líneas. Algunos ilustradores escanean el dibujo para luego aplicar texturas variadas en el proceso de coloración.
          


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
