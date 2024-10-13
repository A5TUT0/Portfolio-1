document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const indicator = document.getElementById('active-indicator');
  const ledBar = document.getElementById('led-bar');
  const sections = document.querySelectorAll('main > section');
  const navHeight = document.querySelector('nav').offsetHeight; // Obtener la altura del nav
  let isScrolling = false; // Variable para rastrear si se está desplazando

  // Función para mover el indicador y la barra LED
  const moveIndicator = (element) => {
      const linkRect = element.getBoundingClientRect();

      // Ajustar el tamaño y la posición del indicador
      indicator.style.width = `${linkRect.width}px`;
      indicator.style.left = `${element.offsetLeft}px`;
      indicator.style.height = `calc(75%)`; // Reducir la altura del indicador
      indicator.style.borderRadius = '20px'; // Reducir la redondez de los bordes

      // Mover la barra LED superior
      ledBar.style.width = `${linkRect.width / 2}px`; // LED más pequeño que el indicador
      ledBar.style.left = `${element.offsetLeft + linkRect.width / 4}px`; // Centrado en el indicador
  };

  // Función para el scroll suave
  function smoothScroll(target) {
      const targetPosition = target.offsetTop - navHeight; // Ajusta el desplazamiento según la altura del navbar
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Desplazamiento suave
      });
  }

  // Añadir el evento de clic a cada enlace del menú
  links.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Evita el comportamiento predeterminado del enlace

          // Mover el indicador
          moveIndicator(link);

          // Obtener la sección correspondiente al ID del enlace
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          // Desactivar el evento de scroll mientras se desplaza
          isScrolling = true;

          // Llamar a la función de scroll suave
          smoothScroll(targetSection);

          // Reiniciar la variable de desplazamiento una vez finalice
          setTimeout(() => {
              isScrolling = false;
          }, 1000); // Ajusta este tiempo según la duración del scroll
      });
  });

  // Ajustar el indicador con el scroll de la página
  window.addEventListener('scroll', () => {
      if (isScrolling) return; // No ejecutar si se está desplazando por clic

      let scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');

          // Verificar si el scroll actual está dentro de la sección
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
              if (activeLink) {
                  moveIndicator(activeLink); // Mueve el indicador si lo necesitas
              }
          }
      });
  });

  // Mover el indicador y barra LED al cargar la página según la primera sección
  const activeLink = document.querySelector('nav a');
  if (activeLink) {
      moveIndicator(activeLink);
  }

  // Funcionalidad del menú desplegable de idiomas
  const languageToggle = document.getElementById('language-toggle');
  const languageDropdown = document.getElementById('language-dropdown');

  // Función para mostrar/ocultar el menú desplegable de idiomas
  function toggleDropdown() {
      languageDropdown.classList.toggle('hidden');
  }

  // Mostrar/ocultar el menú desplegable al hacer clic en el botón de idioma
  languageToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar que el clic se propague al documento
      toggleDropdown();
  });

  // Función para cambiar el idioma (puedes agregar la lógica real aquí)
  function changeLanguage(lang) {
      alert('Cambiando idioma a: ' + lang);
      // Aquí puedes agregar la lógica real para cambiar el idioma.
  }

  // Cierra el menú desplegable si se hace clic fuera de él
  window.addEventListener('click', (event) => {
      if (!languageDropdown.contains(event.target) && !languageToggle.contains(event.target)) {
          languageDropdown.classList.add('hidden');
      }
  });
});
