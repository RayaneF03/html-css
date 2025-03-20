// const validarDados = () => {
//   alert("Alerta com ação de click");
// };
frmexemplo.inNome.focus();

const validarDados = () => {
  let nome = frmexemplo.inNome.value;
  let idade = frmexemplo.inIdade.value;

  if (nome.trim() == "") {
    alert("o campo nome é obrigatório");
    frmexemplo.inNome.focus();
    return false;
  }

  if (idade.trim() == "" || idade < 0) {
    alert("o campo idade é obrigatório");
    frmexemplo.inIdade.focus();
    return false;
  }

  if(nome.trim() !="" && idade.trim() != "" && idade > 0){
    alert("formulario preenchido com sucesso");
    location.reload(); 
  } 
}