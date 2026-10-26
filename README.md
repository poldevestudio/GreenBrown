# 🌿 Green Brown — Web Oficial de Mantenimiento de Espacios Verdes

Sitio web oficial desarrollado para **Green Brown** (`@green.brown3962`), servicio especializado en mantenimiento y corte de césped para countries, quintas, jardines residenciales y predios industriales.

Desarrollado por **Poldev Estudio** bajo estándares de diseño minimalista, Mobile First y alta conversión a WhatsApp.

---

## 📁 Estructura del Proyecto

```
WEBS/GreenBrown/
├── css/
│   └── style.css            # Sistema de diseño orgánico + Scroll Reveal + Mobile First
├── js/
│   └── main.js              # Cotizador interactivo, acordeón FAQ, menú mobile y WhatsApp
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
│   └── service-poda.svg
├── index.html               # Landing page ágil de conversión directa (Single Page)
└── README.md
```

---

## 🎯 Arquitectura Simplificada (Landing Page Single-Page)

1. **`index.html` (Landing de Conversión Directa)**:
   - Diseñado para responder en segundos: Hero editorial, bloque visual de diferenciales de confianza ("La Diferencia"), catálogo de 4 servicios esenciales, cotizador interactivo en 30 segundos, preguntas frecuentes (FAQ), caption de modalidad de trabajo con medios de pago y botón flotante de WhatsApp.
2. **Scroll Reveal & Microinteracciones**:
   - Animaciones fluidas al hacer scroll basadas en `IntersectionObserver`, ligeras y accesibles (`prefers-reduced-motion`).
3. **Navegación Fluida con Anclas Internas**:
   - Menú fijo superior y menú hamburguesa responsive con anclas directas (`#servicios`, `#cotizador`, `#faq`).

---

## ⚙️ Configuración

Para vincular el número de WhatsApp real del cliente:
1. Abrir `js/main.js` y editar:
   ```javascript
   const WHATSAPP_PHONE = '54911XXXXXXXX'; // Reemplazar con el número real
   ```
2. Reemplazar `5491100000000` en `index.html`.
