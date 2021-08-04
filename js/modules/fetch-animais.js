import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {

  // Cria a div contendo informações com o total de animais
  function createAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}<h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal 
  function animaAnimaisNumeros() {
    const animaNumeros =  new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON e cria cada animal utilizando criarAnimal
  async function criarAnimais(){
    try {
      // Fetch, espera resposta e trasforma a resposta em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a trasformação de json , ativa as funções para preencher e animar os numeros
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }

  return criarAnimais();

}
