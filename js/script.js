document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if (document.getElementById("nome-usuario").value != "" && document.getElementById("email-usuario").value != "" && document.getElementById("tel-usuario").value != "") {
      alert("Prontinho! Você irá receber mais novidades no e-mail!")
  }
  else {
      alert("Por favor, preencha os campos vazios!");
  }
}