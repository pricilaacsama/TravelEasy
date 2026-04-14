# Travel Easy

Sitio web turístico desarrollado con HTML, CSS y JavaScript.
Permite explorar destinos, agencias, planes y contacto de manera interactiva y responsive.

—

## Descripción

**Travel Easy** es una aplicación web estática enfocada en brindar información turística de forma clara, visual y accesible.

El proyecto fue desarrollado sin frameworks, con el objetivo de demostrar dominio de tecnologías base del desarrollo web:
- HTML → estructura
- CSS → diseño y animaciones
- JavaScript → interactividad

—
##Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript (DOM, eventos)
- GitHub Pages / Netlify (deploy)

—
## Objetivos del Proyecto

- Diseñar un sitio web completo con múltiples secciones
- Implementar diseño responsive adaptable a distintos dispositivos
- Aplicar animaciones y efectos visuales modernos
- Desarrollar componentes reutilizables
- Integrar interactividad con JavaScript
- Implementar un sistema de tema oscuro (dark mode)

—-
## Estructura del Proyecto

El proyecto sigue una estructura modular organizada por responsabilidades:

```
travel-easy/
│
├── index.html              # Página principal (Home)
├── destino.html            # Página de destinos
├── precio.html            # Comparador de precios
├── blog.html               # Blog de destinos
├── agencia.html           # Agencias de viaje
├── contacto.html           # Formulario de contacto
│
├── css/
│   ├── styles.css             # Estilos globales (variables, header, footer, dark mode)
│   ├── index.css              # Estilos del Home
│   ├── destinos.css           # Estilos de destinos (filtros + galería)
│   ├── precios.css            # Estilos tabla comparativa
│   ├── blog.css               # Estilos del blog + scroll reveal
│   ├── agencias.css           # Estilos de agencias (cards flip, etc.)
│   └── contacto.css           # Estilos del formulario + modal + loader
│
├── js/
│   ├── theme-toogle.js        # Modo oscuro
│   ├── contador.js            # Contador animado (Home)
│   ├── blog.js                # Scroll reveal (blog)
│   └── contacto.js            # Validación + loader + modal
│
├── assets/
│   ├── img/                # Imágenes de destinos
│   ├── video/              # Video del hero
│   └── iconos/             # Iconos de redes sociales
│
└── 📄 README.md               # Documentación del proyecto

## Funcionalidades implementadas
###  Modo oscuro (Dark Mode)
- Implementado mediante variables CSS (`:root`)
- Cambio dinámico de colores en todo el sitio
- Botón toggle animado en el header
- Mejora la accesibilidad y reduce fatiga visual

---

###  Mega menú de navegación
- Menú desplegable al hacer hover
- Organización por categorías:
- Destinos nacionales
- Internacionales
- Populares
- Diseño responsive adaptado a dispositivos móviles

---

###  Sección Hero con video
- Video de fondo en la página principal
- Overlay con gradiente oscuro
- Texto animado con efecto *fade-in*

---

###  Galería de destinos con filtros
- Sistema de filtrado sin JavaScript (solo CSS)
- Uso de `input type="radio"` + `:checked`
- Categorías disponibles:
- Cultural
- Naturaleza
- Playa
- Gastronómico
- Religioso
- Layout tipo **masonry** con `column-count`

---

###  Tabla comparativa de precios
- Comparación entre planes:
- Económico
- Premium
- VIP
- Tooltips informativos al pasar el mouse
- Hover interactivo en filas
- Diseño responsive

---

###  Blog con animaciones (Scroll Reveal)
- Tarjetas de artículos organizadas por categorías:
- Playa
- Montaña
- Ciudad
- Animación al hacer scroll:
- Fade + desplazamiento + blur
- Sistema de filtrado por categorías

---

###  Sección de comentarios
- Diseño con avatares generados con CSS
- Estructura tipo red social
- Estética limpia y moderna

---

###  Contador animado
- Animación progresiva de números
- Datos simulados:
- Visitantes
- Destinos
- Agencias
- Implementado con JavaScript

---

###  Formulario de contacto avanzado
- Validación HTML5:
- Email
- Teléfono con `pattern`
- Feedback visual:
- Bordes verdes/rojos según validez
- Mejora la experiencia del usuario (UX)

---

###  Loader (pantalla de carga)
- Spinner animado
- Overlay que bloquea la pantalla
- Simula el envío del formulario

---

###  Modal de confirmación
- Se muestra al enviar el formulario
- Mensaje de éxito
- Botón para cerrar
- Animación de entrada

---

###  Carrusel de testimonios
- Slider automático con CSS (`@keyframes`)
- Pausa al hacer hover
- Transiciones suaves

---

###  Diseño responsive
- Adaptación a diferentes dispositivos:
- Desktop
- Tablet
- Mobile
- Uso de:
- CSS Grid
- Flexbox
- Media queries

---

###  Sistema de diseño consistente
- Uso de variables CSS para:
- Colores
- Temas (claro/oscuro)
- Estética uniforme en todas las páginas

---

###  Footer interactivo
- Formulario de suscripción
- Iconos de redes sociales
- Mapa embebido con ubicación

---
##  Decisiones Técnicas

Durante el desarrollo de **Travel Easy** se tomaron decisiones técnicas con el objetivo de lograr un sitio escalable, mantenible y con buena experiencia de usuario.

---

###  Arquitectura modular
Se optó por una estructura de proyecto separada por responsabilidades:

- HTML → estructura de cada página
- CSS → estilos organizados por archivo
- JavaScript → funcionalidades específicas

Esto permite:
- Mejor mantenimiento del código
- Escalabilidad del proyecto
- Reutilización de componentes

---

### Uso de variables CSS
Se implementaron variables en `:root` para manejar colores y estilos globales y implementación sencilla de Dark Mode:

```css
:root {
  --midnight: #0b132b;
  --sapphire: #1c3d5a;
  --petal: #f7c6d9;
  --lace: #faf9f6;
  --lavender: #d6c1f0;
  --bridal-blue: #89c2d9;

  --color-primario: var(--midnight);
  --color-secundario: var(--sapphire);
  --color-acento: var(--bridal-blue);
  --color-fondo: var(--lace);
  --color-texto: #333;
}
—
##  Páginas HTML

### **index.html**
Es la página principal del sitio. Contiene:

- Estructura base `header > section > footer`.
- Sección **hero** con video de fondo (`<video>`) y overlay con texto animado.
- Sección de **destinos destacados** en formato tarjetas (cards).
- Contador animado con números dinámicos (`data-target` + JavaScript).
- Sección de **testimonios** con carrusel automático hecho en CSS.
- Navegación principal con mega-menú desplegable.
- Botón para activar **modo oscuro (dark mode)**.


### **destino.html**
Muestra los destinos turísticos disponibles:

- Sistema de **filtros por categoría** (cultural, naturaleza, playa, etc.) usando `input radio + CSS`.
- Galería tipo **masonry (columnas)** adaptable según el tamaño de pantalla.
- Efectos hover con zoom y overlay en imágenes.
- Tabla de destinos con precios.
- Tabla responsive que se adapta a dispositivos móviles usando `data-label`.


### **precio.html**
Permite comparar planes turísticos:

- Tabla comparativa con tres niveles:
  - Económico
  - Premium
  - VIP
- Filas con información de destinos y servicios incluidos.
- Uso de **tooltips** en celdas para mostrar detalles adicionales.
- Botones para seleccionar plan.
- Efectos hover en filas para mejorar la experiencia del usuario.


### **agencia.html**
Presenta agencias de viaje asociadas:

- Tarjetas de agencias con información básica.
- Diseño visual con efectos hover.
- Distribución en grid o flexbox.
- Enfoque visual para destacar servicios ofrecidos.


### **blog.html**
Muestra artículos sobre destinos turísticos:

- Grid tipo revista con tarjetas de destinos.
- Sistema de **filtros por categoría** (playa, montaña, ciudad).
- Animaciones **scroll reveal** (aparición al hacer scroll).
- Sección de comentarios con avatar generado en CSS.
- Diseño enfocado en lectura y exploración visual.

### **contacto.html**
Contiene un formulario de contacto:

- Campos:
  - Nombre
  - Email
  - Teléfono (con validación mediante `pattern`)
  - Motivo (select)
  - Mensaje (textarea)
- Validación HTML5 (`required`, `pattern`).
- Loader animado mientras se procesa el envío.
- Modal de confirmación al enviar correctamente.
- Diseño centrado utilizando grid adaptable.

## Elementos comunes

Todas las páginas incluyen:

###  Header
- Logo del sitio
- Menú de navegación
- Mega menú desplegable
- Botón de modo oscuro

###  Footer
- Formulario de suscripción
- Redes sociales
- Mapa de ubicación

---

##  CSS y Diseño

**index.css** define estilos específicos para la página principal:

- Posicionamiento del video de fondo (Hero).
- Overlay con gradiente oscuro.
- Estilo de textos principales con animaciones.
- Diseño de tarjetas de destinos destacados.
- Estilos del contador animado.
- Carrusel de testimonios con animaciones CSS.

**destinos.css** incluye estilos para la página de destinos:

- Sistema de filtros con `input radio` y `:checked`.
- Galería tipo masonry con `column-count`.
- Efecto zoom en imágenes (`transform: scale`).
- Overlay informativo al hacer hover.
- Tabla responsive con `data-label`.


**precios.css**:

- Estilos para la tabla comparativa de planes.
- Uso de colores para destacar el plan Premium.
- Efecto hover en filas (`transform` y cambio de color).
- Implementación de tooltips informativos.
- Botones interactivos para selección de planes.


**blog.css**:

- Estilos para tarjetas del blog.
- Sistema de filtros por categorías (playa, montaña, ciudad).
- Animaciones de entrada con scroll reveal.
- Efectos hover en tarjetas.
- Diseño de sección de comentarios.


**contacto.css**:

- Layout de formulario centrado con `grid`.
- Estilos modernos para inputs y selects.
- Validación visual:
  - Verde (válido)
  - Rojo (inválido)
- Spinner (loader) con animación.
- Modal de confirmación con animación.


**agencias.css**:

- Diseño de tarjetas de agencias.
- Posibles efectos hover y animaciones.
- Organización visual en grid o flexbox.


**styles.css** contiene estilos compartidos:

- Variables CSS (`:root`) para colores y tema.
- Reset global (`margin`, `padding`, `box-sizing`).
- Tipografía general del sitio.
- Estilos del header y mega menú.
- Estilos del footer.
- Botón de modo oscuro (toggle).
- Definición del sistema de colores reutilizable.

---

### Modo oscuro

- Implementado mediante variables CSS.
- Activado con la clase `body.dark-mode`.
- Cambia automáticamente colores de todo el sitio.
- Mantiene consistencia visual sin duplicar estilos.

---

###  Diseño adaptable

- Uso de `media queries` para distintos dispositivos.
- Adaptación de:
  - Galerías
  - Formularios
  - Tablas
- Uso de `max-width` para controlar el layout.
- Enfoque responsive básico (desktop-first).
---

###  Layout y organización

- Uso de **Flexbox**:
  - Navbar
  - Botones
  - Secciones alineadas

- Uso de **CSS Grid**:
  - Formularios
  - Footer
  - Secciones de contenido

- Uso de **column-count**:
  - Galerías tipo masonry

---

### Animaciones e interacciones

- `transition` → suavidad en hover
- `transform` → escalado y movimiento
- `@keyframes` → animaciones complejas

Ejemplos:
- Scroll reveal
- Carrusel automático
- Botones interactivos
- Loader animado

---

## JavaScript - Explicación Técnica

### `contacto.js`
- Maneja el envío del formulario de contacto.
- Evita el envío real con `preventDefault()`.
- Muestra un **loader animado** mientras se procesa el envío.
- Luego de un tiempo simula la respuesta y muestra un **modal de confirmación**.

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault();

    loader.style.display = "flex";

    setTimeout(() => {
        loader.style.display = "none";
        modal.style.display = "flex";
    }, 2000);
});
```
---

### `blog.js`
- Implementa el efecto Scroll Reveal sin librerías externas.
- Detecta los elementos con la clase `.reveal`.
- Usa `getBoundingClientRect()` para detectar cuándo entran en pantalla.
- Agrega la clase `.active` al hacer scroll o al cargar la página.
- Mejora la experiencia visual con animaciones suaves.

---

### `contador.js`
- Anima los números en la sección de estadísticas del `index.html`.
- Usa el atributo `data-target` para definir el valor final.
- Incrementa progresivamente los valores hasta llegar al objetivo.
- Genera un efecto visual dinámico y atractivo.

---

### `theme-toggle.js`
- Alterna entre modo claro y modo oscuro.
- Usa `classList.toggle()` para aplicar la clase `.dark-mode`.
- Guarda la preferencia del usuario en `localStorage`.
- Mantiene el tema seleccionado incluso al recargar la página.

