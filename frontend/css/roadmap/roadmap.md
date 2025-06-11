# 🎨 Roadmap de CSS - Guía de Aprendizaje Completa

## 📋 Índice
1. [Fundamentos Básicos](#fundamentos-básicos)
2. [Selectores y Especificidad](#selectores-y-especificidad)
3. [Box Model y Layout](#box-model-y-layout)  
4. [Flexbox](#flexbox)
5. [CSS Grid](#css-grid)
6. [Responsive Design](#responsive-design)
7. [Animaciones y Transiciones](#animaciones-y-transiciones)
8. [Preprocesadores](#preprocesadores)
9. [Metodologías CSS](#metodologías-css)
10. [CSS Moderno](#css-moderno)
11. [Herramientas y Optimización](#herramientas-y-optimización)
12. [Recursos Adicionales](#recursos-adicionales)

---

## 🎯 Fundamentos Básicos

### ✅ Conceptos Esenciales
- [ ] **Sintaxis CSS**: Selectores, propiedades, valores
- [ ] **Formas de aplicar CSS**: Inline, interno, externo
- [ ] **Comentarios en CSS**
- [ ] **Colores**: HEX, RGB, RGBA, HSL, HSLA
- [ ] **Unidades**: px, em, rem, %, vw, vh

### ✅ Propiedades Fundamentales
- [ ] **Tipografía**: font-family, font-size, font-weight, line-height, text-align
- [ ] **Colores de texto y fondo**: color, background-color, background-image
- [ ] **Espaciado básico**: margin, padding
- [ ] **Bordes**: border, border-radius
- [ ] **Display básico**: block, inline, inline-block, none

### 🎯 Tiempo estimado: 1-2 semanas

---

## 🎯 Selectores y Especificidad

### ✅ Tipos de Selectores
- [ ] **Selectores básicos**: elemento, clase, ID
- [ ] **Selectores de atributo**: [attr], [attr="value"]
- [ ] **Pseudo-clases**: :hover, :focus, :nth-child(), :first-child, :last-child
- [ ] **Pseudo-elementos**: ::before, ::after, ::first-line, ::first-letter
- [ ] **Selectores combinadores**: descendiente, hijo (>), hermano adyacente (+), hermano general (~)

### ✅ Especificidad y Cascada
- [ ] **Cálculo de especificidad**: inline, IDs, clases, elementos
- [ ] **!important**: cuándo y por qué evitarlo
- [ ] **Herencia CSS**: propiedades que se heredan
- [ ] **Cascada**: orden de aplicación de estilos

### 🎯 Tiempo estimado: 1 semana

---

## 🎯 Box Model y Layout

### ✅ Box Model
- [ ] **Componentes**: content, padding, border, margin
- [ ] **box-sizing**: content-box vs border-box
- [ ] **Colapso de márgenes**
- [ ] **Overflow**: visible, hidden, scroll, auto

### ✅ Posicionamiento
- [ ] **Position**: static, relative, absolute, fixed, sticky
- [ ] **Z-index**: control de capas
- [ ] **Float**: left, right, none (concepto legacy)
- [ ] **Clear**: both, left, right

### ✅ Display
- [ ] **Valores de display**: block, inline, inline-block
- [ ] **display: none vs visibility: hidden**

### 🎯 Tiempo estimado: 2 semanas

---

## 🎯 Flexbox

### ✅ Conceptos Fundamentales
- [ ] **Contenedor flex**: display: flex, flex-direction
- [ ] **Ejes principales**: main axis y cross axis
- [ ] **justify-content**: flex-start, center, space-between, space-around, space-evenly
- [ ] **align-items**: stretch, flex-start, center, flex-end, baseline
- [ ] **flex-wrap**: nowrap, wrap, wrap-reverse

### ✅ Propiedades de Flex Items
- [ ] **flex-grow**: crecimiento proporcional
- [ ] **flex-shrink**: reducción proporcional  
- [ ] **flex-basis**: tamaño base
- [ ] **flex**: shorthand property
- [ ] **align-self**: alineación individual
- [ ] **order**: reordenamiento de elementos

### ✅ Casos de Uso Prácticos
- [ ] **Centrado perfecto**: horizontal y vertical
- [ ] **Distribución de espacio**
- [ ] **Layouts de navegación**
- [ ] **Cards flexibles**

### 🎯 Tiempo estimado: 2 semanas

---

## 🎯 CSS Grid

### ✅ Fundamentos de Grid
- [ ] **display: grid**
- [ ] **grid-template-columns** y **grid-template-rows**
- [ ] **Unidades fr (fractional)**
- [ ] **repeat()**: función para patrones repetitivos
- [ ] **minmax()**: tamaños flexibles

### ✅ Colocación de Items
- [ ] **grid-column** y **grid-row**
- [ ] **grid-area**: shorthand para posicionamiento
- [ ] **Líneas nombradas**
- [ ] **grid-template-areas**: layouts por nombres

### ✅ Espaciado y Alineación
- [ ] **gap, row-gap, column-gap**
- [ ] **justify-items, align-items**
- [ ] **justify-content, align-content**
- [ ] **justify-self, align-self**

### ✅ Grid Avanzado
- [ ] **Auto-placement**: grid-auto-columns, grid-auto-rows
- [ ] **Grid implícito vs explícito**
- [ ] **Subgrid** (soporte limitado)

### 🎯 Tiempo estimado: 2-3 semanas

---

## 🎯 Responsive Design

### ✅ Media Queries
- [ ] **Sintaxis**: @media screen and (max-width: 768px)
- [ ] **Breakpoints comunes**: mobile, tablet, desktop
- [ ] **Mobile-first vs Desktop-first**
- [ ] **Orientación**: portrait, landscape
- [ ] **Resolución**: min-resolution, max-resolution

### ✅ Técnicas Responsive
- [ ] **Imágenes responsive**: max-width: 100%, object-fit
- [ ] **Tipografía fluida**: clamp(), rem, em
- [ ] **Contenedores fluidos**: max-width, container queries
- [ ] **Viewport meta tag**

### ✅ Unidades Responsive
- [ ] **Viewport units**: vw, vh, vmin, vmax
- [ ] **Función clamp()**: min, preferred, max
- [ ] **calc()**: cálculos dinámicos

### 🎯 Tiempo estimado: 2 semanas

---

## 🎯 Animaciones y Transiciones

### ✅ Transiciones CSS
- [ ] **transition-property**: qué animar
- [ ] **transition-duration**: duración
- [ ] **transition-timing-function**: easing (ease, linear, cubic-bezier)
- [ ] **transition-delay**: retraso
- [ ] **transition**: shorthand

### ✅ Animaciones CSS
- [ ] **@keyframes**: definición de animaciones
- [ ] **animation-name**: nombre de la animación
- [ ] **animation-duration**: duración
- [ ] **animation-timing-function**: curva de animación
- [ ] **animation-iteration-count**: repeticiones
- [ ] **animation-direction**: normal, reverse, alternate
- [ ] **animation-fill-mode**: forwards, backwards, both
- [ ] **animation**: shorthand

### ✅ Transformaciones
- [ ] **transform**: translate, scale, rotate, skew
- [ ] **transform-origin**: punto de transformación
- [ ] **3D transforms**: translateZ, rotateX, rotateY

### 🎯 Tiempo estimado: 2 semanas

---

## 🎯 Preprocesadores

### ✅ Sass/SCSS
- [ ] **Variables**: $color-primary, $font-size
- [ ] **Nesting**: anidación de selectores
- [ ] **Mixins**: @mixin, @include
- [ ] **Funciones**: darken(), lighten(), rgba()
- [ ] **Partials e imports**: @import, @use
- [ ] **Control directives**: @if, @for, @each

### ✅ Alternativas
- [ ] **Less**: similar a Sass
- [ ] **Stylus**: sintaxis más flexible
- [ ] **PostCSS**: procesamiento post-compilación

### 🎯 Tiempo estimado: 1-2 semanas

---

## 🎯 Metodologías CSS

### ✅ BEM (Block Element Modifier)
- [ ] **Sintaxis**: .block__element--modifier
- [ ] **Organización de componentes**
- [ ] **Ventajas y desventajas**

### ✅ Otras Metodologías
- [ ] **OOCSS**: Object-Oriented CSS
- [ ] **SMACSS**: Scalable and Modular Architecture
- [ ] **Atomic CSS**: utilidades pequeñas
- [ ] **CSS Modules**: scoping automático

### 🎯 Tiempo estimado: 1 semana

---

## 🎯 CSS Moderno

### ✅ Características Nuevas
- [ ] **Custom Properties (Variables CSS)**: --color-primary
- [ ] **Container Queries**: @container
- [ ] **:has()**: selector padre
- [ ] **aspect-ratio**: control de proporciones
- [ ] **gap en Flexbox**
- [ ] **logical properties**: margin-inline, padding-block

### ✅ CSS-in-JS (Conceptos)
- [ ] **Styled Components**
- [ ] **Emotion**
- [ ] **CSS Modules**

### 🎯 Tiempo estimado: 2 semanas

---

## 🎯 Herramientas y Optimización

### ✅ Herramientas de Desarrollo
- [ ] **DevTools**: Inspector, computed styles
- [ ] **Autoprefixer**: prefijos automáticos
- [ ] **PostCSS**: procesamiento post-compilación
- [ ] **Linters**: stylelint

### ✅ Optimización
- [ ] **Minificación**: reducir tamaño
- [ ] **Critical CSS**: CSS crítico above-the-fold
- [ ] **Purging**: eliminar CSS no usado
- [ ] **Bundle splitting**: división de archivos

### ✅ Frameworks CSS
- [ ] **Tailwind CSS**: utility-first
- [ ] **Bootstrap**: componentes predefinidos
- [ ] **Bulma**: framework moderno
- [ ] **Foundation**: framework responsive

### 🎯 Tiempo estimado: 2 semanas

---

## 📚 Recursos Adicionales

### 📖 Documentación Oficial
- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/CSS
- **W3C CSS Specs**: https://www.w3.org/Style/CSS/

### 🎮 Práctica Interactiva
- **CSS Diner**: selectores CSS
- **Flexbox Froggy**: práctica de Flexbox
- **Grid Garden**: práctica de CSS Grid
- **CSS Battle**: desafíos de CSS

### 📚 Libros Recomendados
- "CSS: The Definitive Guide" - Eric Meyer
- "CSS Secrets" - Lea Verou
- "Every Layout" - Andy Bell & Heydon Pickering

### 🌐 Sitios Web Útiles
- **Can I Use**: compatibilidad de navegadores
- **CSS-Tricks**: tutoriales y guías
- **Smashing Magazine**: artículos avanzados
- **A List Apart**: técnicas profesionales

---

## 🎯 Plan de Estudio Sugerido

### **Fase 1: Fundamentos (4-6 semanas)**
1. Fundamentos Básicos
2. Selectores y Especificidad  
3. Box Model y Layout

### **Fase 2: Layout Moderno (4-5 semanas)**
4. Flexbox
5. CSS Grid
6. Responsive Design

### **Fase 3: Interactividad (2 semanas)**
7. Animaciones y Transiciones

### **Fase 4: Herramientas Profesionales (3-4 semanas)**
8. Preprocesadores
9. Metodologías CSS
10. CSS Moderno
11. Herramientas y Optimización

---

## ✅ Checklist de Proyectos Prácticos

### Proyecto 1: Página Personal
- [ ] Layout básico con HTML semántico
- [ ] Estilos de tipografía y colores
- [ ] Box model y espaciado
- [ ] Responsive design básico

### Proyecto 2: Dashboard/Panel
- [ ] Layout con CSS Grid
- [ ] Componentes con Flexbox
- [ ] Responsive para múltiples dispositivos
- [ ] Transiciones suaves

### Proyecto 3: Sitio Web Completo
- [ ] Múltiples páginas
- [ ] Animaciones CSS
- [ ] Metodología BEM
- [ ] Optimización de rendimiento

### Proyecto 4: Componente Avanzado
- [ ] Sistema de componentes
- [ ] Variables CSS
- [ ] Responsive completo
- [ ] Accesibilidad

---

## 🎖️ Certificaciones y Validación

- [ ] **freeCodeCamp**: Responsive Web Design
- [ ] **Coursera**: CSS especialization
- [ ] **Udemy**: Cursos especializados
- [ ] **Platzi**: Ruta de Frontend

---

## 📈 Medición del Progreso

### Criterios de Dominio por Nivel:

**🟢 Principiante**: Completa fundamentos, selectores, box model
**🟡 Intermedio**: Domina Flexbox, Grid, responsive design  
**🔴 Avanzado**: Implementa animaciones, preprocesadores, metodologías
**⚡ Experto**: Optimización, CSS moderno, arquitectura escalable

---

*Última actualización: Junio 2025*
*Tiempo total estimado: 3-4 meses de estudio consistente*

¡Feliz aprendizaje! 🚀