// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
//                                  ATIVIDADE - 01
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
const ligar = () => {
  let lampada = document.getElementById("lampada");

  // lampada.src ="img/acesa.jpg";
  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
// -------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//                                 ATIVIDADE - 02
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");

  if (qtdImagem <= 0) alert("Informe um valor maior que zero!");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
    }
  }
};
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
//                                  ATIVIDADE - 03
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
function validaForm() {
  const mensagemErro = document.getElementById("mensagem-erro");
  mensagemErro.style.display = "none";
  mensagemErro.innerHTML = "";

  let erros = [];

  function validarCampo(id, mensagem, tipo = "text") {
    const campo = document.getElementById(id);
    if (!campo.value.trim()) {
      erros.push(mensagem);
    } else if (tipo === "string" && campo.value.trim().length < 5) {
      erros.push(`${mensagem} Deve conter pelo menos 5 caracteres.`);
    } else if (tipo === "number" && parseFloat(campo.value) <= 0) {
      erros.push(`${mensagem} Deve ser um número positivo.`);
    }
  }

  validarCampo(
    "inCli",
    "O campo Nome do cliente não pode estar vazio!",
    "string"
  );
  validarCampo("inFone", "O campo Telefone não pode estar vazio!");
  validarCampo("inMail", "O campo E-mail não pode estar vazio!");
  validarCampo(
    "inProd",
    "O campo Nome do produto não pode estar vazio!",
    "string"
  );
  validarCampo("inQtd", "O campo Quantidade não pode estar vazio!", "number");
  validarCampo(
    "inVal",
    "O campo Valor unitário não pode estar vazio!",
    "number"
  );

  if (erros.length > 0) {
    mensagemErro.innerHTML = erros.join("<br>");
    mensagemErro.style.display = "block";
  } else {
    alert("Formulário enviado com sucesso!");
    document.getElementById("frmRegistro").submit();
  }
}
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
//                                  ATIVIDADE - 04
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = inPercDesc.value;
  let valDesconto = inValDesc.value;
  let valFinalPedido = inValFinal.value;

  if (valPedido >= 2000) {
    // aplicar desconto de 1.5%
    alert(">= 2000")
  } else if (valPedido >= 1500) {
    // aplicar desconto de 1.0%
    alert(">= 1500")
  } else if (valPedido >= 1000) {
    // aplicar desconto de 0.8%
    alert(">= 1000")
  } else if (valPedido >= 500) {
    // aplicar desconto de 0.5%
    alert(">= 500")
  } else {
    // não aplicar desconto
    alert("Menor que 500")
  
  }

};
