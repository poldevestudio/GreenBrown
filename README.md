# 🌿 Green Brown — Web Oficial de Mantenimiento de Espacios Verdes

Sitio web oficial desarrollado para **Green Brown** (`@green.brown3962`), servicio especializado en mantenimiento y corte de césped para countries, quintas, jardines residenciales y predios industriales.

Desarrollado por **Poldev Estudio** bajo estándares de diseño minimalista, Mobile First y alta conversión a WhatsApp.

---

## 📁 Estructura del Proyecto

```
WEBS/GreenBrown/
├── css/
│   └── style.css            # Sistema de diseño orgánico (bosque, musgo, arena y tierra)
├── js/
│   └── main.js              # Cotizador interactivo, acordeones FAQ y lógica de WhatsApp
├── images/
│   ├── logo.svg             # Logotipo vectorizado de Green Brown
│   ├── hero-art.svg         # Ilustración paisajística con fauna autóctona (teros)
│   ├── service-mantenimiento.svg
│   ├── service-grama.svg
│   ├── service-industrial.svg
│   └── service-poda.svg
├── index.html               # Estructura semántica HTML5 optimizada para SEO local
└── README.md
```

---

## 🎯 Características y Diferenciales

1. **Cotizador Rápido Interactivo en 3 Pasos**: Permite al visitante seleccionar el tipo de propiedad, la superficie aproximada y la labor requerida. Genera en tiempo real un mensaje personalizado listo para enviar por WhatsApp.
2. **Estrategia sin Local Físico**: Al ser un servicio a domicilio, se destaca el radio de cobertura geográfico (Escobar, San Sebastián, Puertos, Maschwitz, Tigre, Benavídez, Pilar y parques industriales) en lugar de un pin estático.
3. **Diseño Minimalista Orgánico**: Paleta de colores tierra y bosque profundo (`#14281D`, `#3A6946`, `#8C6541`, `#EDE5D8`), tipografía contemporánea (`Plus Jakarta Sans` e `Inter`) y espacios limpios.
4. **Conversión Inmediata**: Botón flotante pulsante de WhatsApp con tooltip, barra superior de aviso y botones directos de cotización en cada bloque.
5. **Autonomía y Cero Dependencias**: HTML5, CSS3 y JavaScript nativo sin librerías pesadas ni frameworks, asegurando una carga ultra veloz en cualquier teléfono.

---

## ⚙️ Configuración

Para vincular el número de WhatsApp real del cliente:
1. Abrir `js/main.js` y editar la constante:
   ```javascript
   const WHATSAPP_PHONE = '54911XXXXXXXX'; // Reemplazar con el número real
   ```
2. En `index.html`, buscar `5491100000000` y reemplazarlo con el mismo número para los enlaces estáticos.
