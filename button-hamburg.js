
  
  document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbar-menu');
  
    navbarToggler.addEventListener('click', function() {
      navbarToggler.classList.toggle('open');
      navbarMenu.classList.toggle('active');
  
      if (navbarMenu.classList.contains('active')) {
        // Ocultar el ícono cuando se abre el menú
        navbarToggler.innerHTML = '';
      } else {
        // Mostrar el ícono cuando se cierra el menú
        navbarToggler.innerHTML = '&#9776;';
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!navbarMenu.contains(event.target) && !navbarToggler.contains(event.target)) {
        navbarToggler.classList.remove('open');
        navbarMenu.classList.remove('active');
        // Mostrar el ícono cuando se cierra el menú
        navbarToggler.innerHTML = '&#9776;';
      }
    });
  });
  
  