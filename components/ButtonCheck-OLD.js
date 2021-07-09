

const ButtonCheck = () => {
  const checkButton = document.createElement('button'); // cria o botão de "concluir".
  checkButton.classList.add('checkButton'); // adiciona um style no botão.
  checkButton.innerText = '\u2713';

  checkButton.addEventListener('click', actionCheck);

  return checkButton;
}

const actionCheck = evento => {
  const verifyCheck = evento.target; // identifica aonde está acontecendo a chamada pelo (evento)
  verifyCheck.classList.toggle('clickButton');
  const verifyTextCheck = verifyCheck.previousElementSibling; // seleciona a tag irmão dentro do DOM
  verifyTextCheck.classList.toggle('done-text');
  const verifyItemCheck = verifyCheck.parentElement;
  // Se quisesse selecionar o elemento pai: verifyButton.parentElement
  verifyItemCheck.classList.toggle('done'); // adiciona uma classe css no elemento selecionado
}

export default ButtonCheck;
