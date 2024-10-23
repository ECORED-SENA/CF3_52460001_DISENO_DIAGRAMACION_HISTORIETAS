<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modos de presentación de proyectos: #[em artbook]
    
    .cont_2_1
      p(data-aos="fade-up") El #[strong #[em artbook], o libro de arte], es un formato que reúne una amplia variedad de material relacionado con un proyecto gráfico, como bocetos de personajes, guiones gráficos, ilustraciones, conceptos preliminares, y todo aquello vinculado con el proceso creativo y técnico de una obra. A menudo, estos libros son espacios donde se desarrollan las ideas iniciales de historietas, videojuegos, películas de animación o cualquier otro proyecto visual, y muchas veces su contenido permanece inédito para el público general.
      .row.mt-4
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-6.col-lg-12
            img(src="@/assets/curso/tema2/2.svg")
        .col-lg(data-aos="zoom-in")
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FDF1F8;")
            p.mb-0 Con el tiempo, el #[em artbook] ha evolucionado hasta convertirse en una herramienta clave para visibilizar el trabajo creativo de #[strong los ilustradores, diseñadores gráficos, directores de arte y otros profesionales del ámbito visual]. No solo se trata de una muestra del resultado final, sino de una ventana al proceso detrás de la obra, destacando las etapas de conceptualización, los ensayos gráficos y las decisiones artísticas que llevan al producto terminado. Este formato no solo es apreciado por fanáticos, sino también por profesionales que buscan inspiración o referencias en sus propios proyectos.
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/3.png")
      
      p.mt-4(data-aos="fade-right") Además de ser un recurso de difusión, los #[em artbooks] se han consolidado como una forma de validar la experiencia y el portafolio de los artistas. Funcionan como libros de muestra de habilidades en ilustración, diseño y diagramación, permitiendo a los profesionales del campo compartir no solo sus logros finales, sino también el esfuerzo y la técnica detrás de cada creación.
    
    .cont_2_2.mt-5.pb-5.mb-5
      .row
        .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/4.png")
        .col-lg-7(data-aos="fade-left")
          .row
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/5.svg")
            .col(style="place-self:center;")
              p.mb-0 En la actualidad, estos libros suelen publicarse como revistas o ediciones de lujo, dependiendo del objetivo y público. Muchos #[em artbooks] se enfocan en mostrar detalladamente el proceso de ideación, conceptualización y desarrollo de una historia, lo que otorga un valor adicional a los seguidores del proyecto, ya que les permite profundizar en el mundo creativo detrás de una obra.
          p.mt-4.mb-0 Los #[em artbooks] cumplen una función educativa, al ofrecer una guía sobre el proceso artístico y técnico para otros creadores, sirviendo de inspiración para nuevos emprendimientos culturales y creativos.
      
      .row.mt-4(data-aos="zoom-in")
        .col(style="place-self:center;")
          p.mb-0 Finalmente, los #[em artbooks] no solo han ganado terreno en el ámbito del entretenimiento, como el cine o los videojuegos, sino que también se han extendido a otros sectores como la moda, la arquitectura y el diseño industrial, donde el valor estético y funcional de los proyectos puede documentarse y presentarse de manera visual. En estos casos, los #[em artbooks] no solo exhiben el producto final, sino que también documentan el enfoque metodológico y las decisiones estilísticas que llevan a una obra innovadora y de impacto.
        .col-auto.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema2/6.svg")




</template>

<script>
export default {
  name: 'Tema2',
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
