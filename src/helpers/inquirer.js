require('colors');
const inquirer = require('inquirer');

const questions = [{
  type: 'list',
  name: 'option',
  message: '¿Que desea hacer?',
  choices: [
    {
      value: 1,
      name: `${'1.'.green} Search City`
    },
    {
      value: 2,
      name: `${'2.'.green} Historial`
    },
    {
      value: 0,
      name: `${'0.'.green} Salir`
    },
  ]
}];

const inquirerMenu = async () => {

  console.clear();
  console.log('=========================='.green);
  console.log('   Seleccione una opción  '.white);
  console.log('==========================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;

}

const pause = async () => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];

  console.log('\n');

  await inquirer.prompt(question);
}

const readInput = async (message) => {

  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please write a city';
        }
        return true;
      }
    }
  ];

  const { description } = await inquirer.prompt(question);

  return description;

}

const TasksToDelete = async (tasks = []) => {

  const choices = tasks.map((task, i) => {

    const index = `${i + 1}.`.green

    return {
      value: task.id,
      name: `${index} ${task.description}`,
    }

  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar'
  })
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'delete',
      choices
    }
  ]
  const { id } = await inquirer.prompt(questions);

  return id;

}

const confirm = async (message) => {

  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question);

  return ok;

}

const checkList = async (tasks = []) => {

  const choices = tasks.map((task, i) => {

    const index = `${i + 1}.`.green

    return {
      value: task.id,
      name: `${index} ${task.description}`,
      checked: (task.finish) ? true : false
    }

  });


  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
  ]
  const { ids } = await inquirer.prompt(question);

  return ids;

}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  TasksToDelete,
  confirm,
  checkList
}