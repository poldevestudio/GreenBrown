/**
 * GREEN BROWN - INTERACCIONES WEB & COTIZADOR DINÁMICO
 * Poldev Estudio
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. NÚMERO DE WHATSAPP CENTRALIZADO
  // Cambiar este número por el oficial del cliente cuando se defina
  const WHATSAPP_PHONE = '5491100000000';

  // 2. HEADER SCROLL EFFECT
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. MENÚ MOBILE INTERACTIVO
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-item');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
      });
    });
  }

  // 4. COTIZADOR RÁPIDO INTERACTIVO
  const propertyGrid = document.getElementById('propertyTypeOptions');
  const surfaceGrid = document.getElementById('surfaceOptions');
  const serviceGrid = document.getElementById('serviceOptions');
  const summaryText = document.getElementById('summaryText');
  const estimatorWhatsappBtn = document.getElementById('estimatorWhatsappBtn');

  // Estado inicial del cotizador
  let quoteState = {
    propertyType: 'Country / Barrio Cerrado',
    surface: '400 a 1.200 m²',
    service: 'Mantenimiento Periódico (Corte y Bordes)'
  };

  function updateEstimatorUI() {
    // Actualizar texto de resumen
    if (summaryText) {
      summaryText.innerHTML = `Propiedad: <strong>${quoteState.propertyType}</strong> • Superficie: <strong>${quoteState.surface}</strong> • Servicio: <strong>${quoteState.service}</strong>`;
    }

    // Armar mensaje para WhatsApp
    const message = `¡Hola Green Brown! Estuve usando el cotizador de la web. Me gustaría solicitar un presupuesto con estos datos:
• Propiedad: ${quoteState.propertyType}
• Superficie: ${quoteState.surface}
• Labor requerida: ${quoteState.service}

¿Podrían darme una estimación o coordinar una visita? Muchas gracias.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

    if (estimatorWhatsappBtn) {
      estimatorWhatsappBtn.href = whatsappUrl;
    }
  }

  function handlePillSelection(container, stateKey) {
    if (!container) return;
    const pills = container.querySelectorAll('.option-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        quoteState[stateKey] = pill.getAttribute('data-value');
        updateEstimatorUI();
      });
    });
  }

  handlePillSelection(propertyGrid, 'propertyType');
  handlePillSelection(surfaceGrid, 'surface');
  handlePillSelection(serviceGrid, 'service');

  // Inicializar estado del botón
  updateEstimatorUI();

  // 5. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Cerrar los demás acordeones
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherPanel = otherItem.querySelector('.faq-panel');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.style.maxHeight = null;
          }
        });

        // Alternar el actual
        if (isActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
          panel.style.maxHeight = null;
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  });

  // 6. TOOLTIP INTELIGENTE PARA BOTÓN FLOTANTE
  const floatingTooltip = document.querySelector('.floating-tooltip');
  if (floatingTooltip) {
    // Mostrar brevemente el tooltip al ingresar para llamar la atención del usuario
    setTimeout(() => {
      floatingTooltip.style.opacity = '1';
      floatingTooltip.style.transform = 'translateX(0)';
      setTimeout(() => {
        floatingTooltip.style.opacity = '';
        floatingTooltip.style.transform = '';
      }, 4500);
    }, 1800);
  }

  // 7. SCROLL REVEAL INTERSECTION OBSERVER
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Dejar de observar tras animar
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback directo si no hay soporte
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 8. FILTROS DE CATEGORÍA EN SERVICIOS.HTML
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const serviceItems = document.querySelectorAll('.detailed-service-item');

  if (filterBtns.length > 0 && serviceItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        serviceItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.classList.remove('is-hidden');
            setTimeout(() => {
              item.classList.add('is-revealed');
            }, 50);
          } else {
            item.classList.add('is-hidden');
          }
        });
      });
    });
  }

});
