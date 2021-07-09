

const actionCheck = (refresh, id) => {
   const tasks = JSON.parse(localStorage.getItem('tasks'));

   tasks[id].complete = !tasks[id].complete;

   localStorage.setItem('tasks', JSON.stringify(tasks));

   refresh()
};

const ButtonCheck = (refresh, id) => {
   const checkButton = document.createElement('button'); // cria o botão de "concluir".
   checkButton.classList.add('checkButton'); // adiciona um style no botão.
   checkButton.innerText = '\u2713';

   checkButton.addEventListener('click', () => actionCheck(refresh, id));

   return checkButton;
};

export default ButtonCheck;
