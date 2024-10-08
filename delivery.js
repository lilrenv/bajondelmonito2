function toggleOptions(id) {
  const optionsDiv = document.getElementById(id);
  optionsDiv.classList.toggle('hidden');
}

function showOrder() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;

  // Obtiene todas las opciones seleccionadas
  const checkedMenus = document.querySelectorAll('input[name="menu"]:checked');
  const selectedMenus = Array.from(checkedMenus).map(menu => menu.value).join(', ');

  // Obtiene todas las opciones adicionales seleccionadas
  const checkedSubOptions = document.querySelectorAll('input[type="checkbox"]:checked:not([name="menu"])');
  const selectedSubOptions = Array.from(checkedSubOptions).map(option => option.value).join(', ');

  // Muestra el resumen del pedido
  document.getElementById('summary-name').innerText = `Nombre: ${name}`;
  document.getElementById('summary-address').innerText = `Dirección: ${address}`;
  document.getElementById('summary-menu').innerText = `Opciones de comida: ${selectedMenus || 'Ninguna'}\nSeleccionado: ${selectedSubOptions || 'Ninguna'}`;

  document.getElementById('order-summary').classList.remove('hidden');
}

function confirmOrder() {
  // Muestra un mensaje de confirmación
  document.getElementById('confirmation-message').classList.remove('hidden');
}

function confirmOrder() {
  // Muestra un mensaje de confirmación
  document.getElementById('confirmation-message').classList.remove('hidden');

  // Redirige al inicio después de 2 segundos
  setTimeout(() => {
      window.location.href = 'menu.html'; // Cambia 'index.html' a la URL de tu página de inicio
  }, 2000);
}
