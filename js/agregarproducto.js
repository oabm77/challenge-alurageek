const input = document.querySelector('[data-precio]');

input.addEventListener('input', formateaValor);

function formateaValor() {
  let value = input.value;
  value = value.replace(/[^\d]/g, '');
  value = '$ ' + agregaComas(value);
  input.value = value;
}

function agregaComas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
