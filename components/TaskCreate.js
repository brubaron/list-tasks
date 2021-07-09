

import ButtonCheck from './ButtonCheck.js';
import ButtonDelete from './ButtonDelete.js';
import {TaskLoad} from './TaskLoad.js';

export const handleNovoItem = (evento) => {
   evento.preventDefault();

   const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // o JSON.parse transforma a string em um objeto novamente. Já o || [] sinaliza que se o resultado for 'null' é pra colocar uma string vazia no lugar.

   const input = document.querySelector('[data-form-input]');
   const valor = input.value;

   const calendar = document.querySelector('[data-form-date]');
   const date = moment(calendar.value);
   const dateFormated = date.format('DD/MM/YY');
   const time = date.format('HH:MM');

   const complete = false;

   const data = {
      valor,
      dateFormated,
      time,
      complete
   };

   const newData = [...tasks, data];// Captura o que está armazenado no navegador e adiciona o novo input que vier de data.

   localStorage.setItem('tasks', JSON.stringify(newData)); // localStorage armazena os dados no navegador e persiste mesmo depois de fechado.
   // sessionStorage.setItem('tarefas', JSON.stringify(dados)); >> sessionStorage armazena os dados enquanto a aba estiver aberta.

   input.value = '';

   TaskLoad();
};

export const CatchValue = ({valor,dateFormated,time,complete}, id) => {
   const task = document.createElement('li');
   task.classList.add('caixa__tarefas___lista____itens');
   const conteudo = `<p>${time}  |  ${valor}</p>`;

   if(complete) {
      const text = task.firstChild;
      task.classList.toggle('done-text');
   };

   task.innerHTML = conteudo;

   task.appendChild(ButtonCheck(TaskLoad, id));
   task.appendChild(ButtonDelete(TaskLoad, id));

   return task;

};
