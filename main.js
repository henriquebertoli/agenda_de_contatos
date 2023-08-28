const form = document.getElementById('form-agenda');/*Da inicio ao formulario */
let linhas = '';

form.addEventListener('submit', function (e) { /**Previne o formulario reset automatico */
  e.preventDefault();

  const inputnomeContato = document.getElementById('nome-contato'); /**Seleciona os inputs em questao */
  const inputTelefone = document.getElementById('telefone');

  let linha = '<tr>'; /**Define o que a variavel vai receber como conteudo linha 10 - 15 */
  linha += `<td>${inputnomeContato.value}</td>`;
  linha += `<td>${inputTelefone.value}</td>`;
  linha += `</tr>`;

  linhas += linha;

  const corpoAgenda = document.querySelector('tbody'); /** Variavel define qual tag HTML (tbody) vai receber o conteudo de linhas */
  corpoAgenda.innerHTML = linhas;

  inputnomeContato.value = ''; /*Limpa o campo*/
  inputTelefone.value = '';
});
