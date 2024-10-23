<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") El diseño y producción de historietas ha evolucionado significativamente a lo largo del tiempo, permitiendo que los creadores exploren diversas técnicas de reproducción de imágenes. Este proceso implica la selección de herramientas tecnológicas adecuadas para garantizar que el diseño final sea de alta calidad y logre un impacto visual eficaz, ya sea en medios impresos o digitales.

    .cont_intro.mt-4
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Este componente formativo tiene como objetivo proporcionar una revisión detallada de las técnicas más relevantes en la creación de historietas, desde métodos tradicionales como la xilografía y la serigrafía, hasta la impresión digital moderna. Comprender estos métodos ayudará a los diseñadores a tomar decisiones informadas sobre qué técnicas aplicar en sus proyectos.
      
      .row.mt-4.p-relative
        .col-auto.d-none.d-md-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col(style="place-self:center;" data-aos="fade-left")
          p.mb-0 Además, se exploran los modos de presentación de proyectos gráficos, como el uso del #[em artbook], una herramienta clave para dar a conocer el trabajo creativo de ilustradores y diseñadores. Estos conceptos no solo son útiles para proyectos personales, sino que también son aplicables en contextos laborales, brindando una comprensión completa del proceso creativo y técnico.



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
