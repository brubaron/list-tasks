
import {TaskLoad} from './TaskLoad.js';

const actionDelete = (refresh,id) => {

   const index = id;
   const tasksLoad = JSON.parse(localStorage.getItem('tasks'));

   tasksLoad.splice(index, 1);
   localStorage.setItem('tasks', JSON.stringify(tasksLoad));

   TaskLoad();
};

const ButtonDelete = (refresh,id) => {
  const deleteButton = document.createElement('button');
   deleteButton.classList.add('deleteButton');

   deleteButton.innerText = '\u2715';

   deleteButton.addEventListener('click', () => actionDelete(refresh,id));

   return deleteButton;
};

export default ButtonDelete;
