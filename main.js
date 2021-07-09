

import {handleNovoItem} from './components/TaskCreate.js';
import {TaskLoad} from './components/TaskLoad.js'

  const botao = document.querySelector('[data-form-button]');

  botao.addEventListener('click', handleNovoItem);

  TaskLoad();
  
