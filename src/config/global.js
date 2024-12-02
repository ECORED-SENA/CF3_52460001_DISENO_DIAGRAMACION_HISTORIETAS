export default {
  global: {
    componenteFormativo: 'Diseño de historietas',
    descripcionCurso:
      'Este componente formativo aborda la evolución de las técnicas de reproducción de imágenes en la creación de historietas, desde métodos manuales como la xilografía hasta la impresión digital. También describe el proceso de diagramación de una historieta, las técnicas de ilustración empleadas, y la presentación de proyectos mediante <em>artbooks</em>, incluyendo referencias bibliográficas y detalles de producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evolución técnica: reproducción de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Relación con los modos de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modos de presentación de proyectos: <em>artbook</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52460001_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evolución técnica: reproducción de imágenes ',
      referencia:
        'MacroIDEA. (2021). ¿Quién invento el cómic? Origen, Evolución. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=wHdYO4Be0QI&ab_channel=MacroIDEA  ',
    },
    {
      tema: 'Relación con los modos de producción ',
      referencia:
        'EchandoTrazos. (2022). Como imprimir tu cómic o manga / Dibujo a Catwoman The Batman. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KF_8PywQhYs&ab_channel=EchandoTrazos  ',
    },
    {
      tema: 'Técnicas ',
      referencia:
        'EchandoTrazos. (2022). El mejor estilógrafo para dibujar cómics / manga. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=f2wBl0o_Rn8&ab_channel=EchandoTrazos  ',
    },
    {
      tema: 'Modos de presentación de proyectos: <em>artbook</em>',
      referencia:
        'EchandoTrazos. (2024). Te muestro el increíble LIBRO DE ARTE de la leyenda del cómic Arthur Adams con MARVEL, DC COMICS... [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KBJPJw-E6BU&ab_channel=EchandoTrazos  ',
    },
  ],
  glosario: [
    {
      termino: '<em>Artbook</em>',
      significado:
        'libro de arte que incluye bocetos, guiones gráficos y otros elementos visuales de un proyecto. ',
    },
    {
      termino: 'Calcografía',
      significado:
        'grabado en bajo relieve sobre una plancha de metal, donde se impregna tinta para imprimir. ',
    },
    {
      termino: 'Impresión digital',
      significado:
        'proceso que utiliza archivos digitales para imprimir imágenes mediante inyección de tinta. ',
    },
    {
      termino: 'Lápiz quemado',
      significado:
        'método de dibujo con un lápiz grueso que permite obtener líneas oscuras y texturizadas. ',
    },
    {
      termino: 'Litografía',
      significado:
        'proceso de impresión que utiliza la incompatibilidad entre la grasa y el agua para grabar. ',
    },
    {
      termino: 'Pincelado',
      significado:
        'técnica que permite crear líneas y fondos claros en una ilustración. ',
    },
    {
      termino: 'Rotulador calibrado',
      significado:
        'herramienta usada para entintar y escribir textos en los globos de las historietas. ',
    },
    {
      termino: 'Serigrafía',
      significado:
        'técnica de impresión mediante una malla para transferir tinta a un soporte. ',
    },
    {
      termino: '<em>Storyboard</em>',
      significado:
        'planificación gráfica que organiza el guion visual de una historia antes de la producción. ',
    },
    {
      termino: 'Xilografía',
      significado:
        'técnica de grabado en madera utilizada para la impresión de imágenes en grandes tirajes. ',
    },
  ],
  referencias: [
    {
      referencia: 'Ecured. (Sin fecha). Serigrafía.',
      link: 'https://www.ecured.cu/Serigraf%C3%ADa',
    },
    {
      referencia:
        'Gubern, R. (1972). El lenguaje de los cómics. Barcelona, Península. ',
      link: '',
    },
    {
      referencia:
        'McCloud, S. (2005). Entender el cómic. El arte invisible. Bilbao, Astiberri. ',
      link: '',
    },
    {
      referencia:
        'McCloud, S. (2007). Hacer cómics: secretos narrativos del cómic, el manga y la novela gráfica. Bilbao, Astiberri. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernánn Mauricio Rodríguez',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
