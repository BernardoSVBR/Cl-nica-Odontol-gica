const form = document.getElementById('form-consulta')
form.addEventListener('submit', function (event) {
  event.preventDefault()

  const inputs = document.querySelectorAll('#form-consulta input')
  
  let consulta = { }
  for (let i = 0; i < inputs.length; i++) {
    if (isNullOrUndefined(inputs[i].value)) {
      alert("Por favor, preencha todos os campos do formulário.")
      return;
    }

    consulta[inputs[i].id] = inputs[i].value
  }

  const avista = consulta.value - (consulta.value / 10)
  const parcelado = consulta.value / 6
  document.getElementById('p1').innerHTML = `Nome: ${consulta.name}<br>Tratamento: ${consulta.tratament}<br>Valor a Vista: R$ ${avista}<br>Valor Parcelado: R$ ${parcelado}`
});

function isNullOrUndefined(value) {
  return value === null || value === undefined || (typeof value === 'string' && value.trim().length === 0)
}