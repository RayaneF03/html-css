// criando a função de flecha com frases aleatórias

const falar = () => {
  //criando o vetor de frases
  const frases = [
    "Hoje está um dia bonito",
    "Falta muito para sexta-feira?",
    "Qual o cardápio de hoje no almoço",
    "Vish, tem prova de matemática!!!!!!",
  ];

  // criando uma variavel para armazenar a div com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  //criando variavel de controle para frases exibidas
  let indice = 0;

  //criando variavel para numero aleatorio entre 0 e 1 (lembrando que o 1 nunca entra aqui)

  let numero = Math.random();

  //configurando o numero para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;
  else indice = 0;

  //escrevendo a frase para o usuario
  tagarela.innerHTML = frases[indice];
};
