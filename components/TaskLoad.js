
import {DateCreate} from './DateCreate.js';
import {removeRepDates, sortDate} from '../service/date.js';


export const TaskLoad = () => {

   const list = document.querySelector('[data-list]');

   const tasksLoad = JSON.parse(localStorage.getItem('tasks'))||[];

   list.innerHTML = '';

   const uniqueDates = removeRepDates(tasksLoad)

   sortDate(uniqueDates);

   uniqueDates.forEach((day) => {
      list.appendChild(DateCreate(day));
   });

};
