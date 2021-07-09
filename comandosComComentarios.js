// arrow functions (() =>) são formas mais rápidas de gerar uma ação e não sofrem hoisting
// hoisting é a a "capacidade" que o js tem de executar uma function, mesmo que ela
// seja declarada depois de ser chamada, exemplo:
// chamarFunction;
// function chamarFunction() {return "fui chamada"}; ---> a function ainda teria dado certo.
( () => {
  const capturaValores = evento => {
  evento.preventDefault(); // previne que a página seja recarregada ao clicar no botão.

  const input = document.querySelector('[data-form-input]'); // identifica a tag do input no document.
  const valor = input.value; // salva o valor do input na constante.

  const lista = document.querySelector('[data-list]'); // identifica a tag ul no document.
  const tarefa = document.createElement('li');// ele cria um novo elemento ao invés de só reconhecer no document.
  tarefa.classList.add('itens') // ação para adicionar um style no novo elemento criado.
  const conteudo = `<p>${valor}</p>`;


  tarefa.innerHTML = conteudo; // acessa o conteúdo de algum elemento HTML, nessse caso, está acessando o <li> criado acima e adicionando o conteúdo da constante 'conteudo'(que é a tag <p> com o valor).
  // porém, para conseguir add um item dentro de um elemento (que no caso será o pai), é preciso usar outra expressão:
  lista.appendChild(tarefa); // cria a tarefa (o <li>) dentro do elemento data-list (o <ul>).
  tarefa.appendChild(ButtonCheck());
  tarefa.appendChild(ButtonDelete()); // cria o botão de "concluir" dentro da const tarefa (o <li>).
  /*
  insertBefore(pai, filho): Coloca um nó antes do outro.
  replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
  removeChild(elemento): Remove um nó da árvore.
  */

  input.value = "";
  }

  const botao = document.querySelector('[data-form-button]'); // reconhece o botão

  // o addEventListener recebe duas condições: 1. o evento que ele irá ouvir e 2. qual a ação (function = () =>) que ele irá executar.
  botao.addEventListener('click', capturaValores); // fica escutando o elemento (no caso o botão), para então executar as condições.

  const ButtonCheck = () => {
    const checkButton = document.createElement('button'); // cria o botão de "concluir".
    checkButton.classList.add('checkButton'); // adiciona um style no botão.
    checkButton.innerText = 'concluir';

    checkButton.addEventListener('click', actionCheck);

    return checkButton;
  }

  const actionCheck = evento => {
    const verifyCheck = evento.target; // identifica aonde está acontecendo a chamada pelo (evento)
    const verifyItemCheck = verifyCheck.previousElementSibling; // seleciona a tag irmão dentro do DOM
    // Se quisesse selecionar o elemento pai: verifyButton.parentElement
    verifyItemCheck.classList.toggle('done'); // adiciona uma classe css no elemento selecionado
  }

  const ButtonDelete = evento => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerText = 'delete';

    deleteButton.addEventListener('click', actionDelete);

    return deleteButton;
  }

  const actionDelete = evento => {
    const verifyDelete = evento.target;
    const verifyItemDelete = verifyDelete.parentElement;

    verifyItemDelete.remove();
  }
})();
