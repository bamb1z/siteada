document
  .getElementById("botaoEnviar")
  .addEventListener("click", validaFormulario);

var nome = document.getElementById("nome-usuario");
var email = document.getElementById("email-usuario");
var telefone = document.getElementById("tel-usuario");


function validaFormulario() {
  if (
    nome.value != "" &&
    email.value != "" &&
    telefone.value != ""
  ) {
    alert("Prontinho! Você vai receber mais novidades no seu e-mail!");
  } else {
    alert("Por favor, preencha os campos vazios!");
  }
}