# 🌿 Green Brown — Web Oficial de Mantenimiento de Espacios Verdes

Sitio web oficial desarrollado para **Green Brown** (`@green.brown3962`), servicio especializado en mantenimiento y corte de césped para countries, quintas, jardines residenciales y predios industriales.

Desarrollado por **Poldev Estudio** bajo estándares de diseño minimalista, Mobile First y alta conversión a WhatsApp.

---

## 📁 Estructura del Proyecto

```
WEBS/GreenBrown/
├── css/
│   └── style.css            # Sistema de diseño orgánico + Scroll Reveal + páginas modulares
├── js/
│   └── main.js              # Cotizador interactivo, filtros de categoría, acordeones y WhatsApp
├── images/
│   ├── logo.png             # Logotipo oficial GB Green Brown (transparencia limpia para cabecera)
│   ├── logo-light.png       # Variante clara del logo oficial para el pie de página oscuro
│   ├── hero-bg.jpg          # Fondo paisajístico fotográfico para Hero con sutil bokeh y viñeta
│   ├── card-autonomia.jpg   # Fondo fotográfico para tarjeta Maquinaria Propia
│   ├── card-periodicidad.jpg# Fondo fotográfico para tarjeta Mantenimiento Programado
│   ├── card-entorno.jpg     # Fondo fotográfico para tarjeta Entorno y Privacidad
│   ├── card-seriedad.jpg    # Fondo fotográfico para tarjeta Respaldo y Seriedad
│   ├── hero-art.svg         # Ilustración paisajística con fauna autóctona (teros)
│   ├── service-mantenimiento.svg
│   ├── service-grama.svg
│   ├── service-industrial.svg
│   ├── service-poda.svg
│   ├── gallery-corte-patron.svg
│   ├── gallery-grama-panes.svg
│   ├── gallery-parque-country.svg
│   └── gallery-predio-industrial.svg
├── index.html               # Landing de conversión rápida (Hero, Cotizador, Resumen y Cobertura)
├── servicios.html           # Página técnica detallada (Fichas operativas, filtros y galería)
└── README.md
```

---

## 🎯 Arquitectura Dividida (Index + Servicios)

1. **`index.html` (Landing de Conversión Directa)**:
   - Diseñado para responder en segundos: Hero con propuesta de valor, cotizador interactivo rápido en 30 segundos, resumen de servicios, diferenciales de confianza y FAQ.
2. **`servicios.html` (Catálogo Técnico, Galería & Cobertura)**:
   - Diseñado para clientes residenciales, arquitectos o administraciones que requieren mayor detalle operativo:
     - Filtros interactivos por categoría (Corte, Grama, Industrial, Poda).
     - Fichas técnicas operativas por servicio (maquinaria utilizada, frecuencia recomendada, tratamiento de restos y tiempos de obra).
     - Módulo de cobertura geográfica por corredores y countries de Zona Norte.
     - Galería visual de terminaciones reales (patrones rayados, panes frescos de grama, parques con piscina).
     - Botón de cotización específico por cada disciplina.
3. **Scroll Reveal & Microinteracciones**:
   - Animaciones fluidas al hacer scroll basadas en `IntersectionObserver`, ligeras y accesibles (`prefers-reduced-motion`).

---

## ⚙️ Configuración

Para vincular el número de WhatsApp real del cliente:
1. Abrir `js/main.js` y editar:
   ```javascript
   const WHATSAPP_PHONE = '54911XXXXXXXX'; // Reemplazar con el número real
   ```
2. Reemplazar `5491100000000` en los archivos HTML (`index.html` y `servicios.html`).
