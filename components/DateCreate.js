
import {CatchValue} from './TaskCreate.js';

export const DateCreate = (date) => {

   const tasks = JSON.parse(localStorage.getItem('tasks'))||[];

   const dateMoment = moment(date, 'DD/MM/YY');
   const topDate = document.createElement('li');
   const content = `<p class="content-date">${dateMoment.format('DD/MM/YY')}</p>`;

   topDate.innerHTML = content;

   tasks.forEach((tasks, id) => {

      const day = moment(tasks.dateFormated, 'DD/MM/YY');

      const diff = dateMoment.diff(day);

      if(diff === 0) {

         topDate.appendChild(CatchValue(tasks, id));

      };
   });

   return topDate;
};
