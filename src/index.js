require('colors');
const {
  inquirerMenu,
  pause } = require('./helpers/inquirer');





const main = async () => {

  let option;

  do {

    option = await inquirerMenu();

    if (option !== 0) {
      await pause();
    }

    // switch (option) {
    //   case 1:

    //     break;

    //   default:
    //     console.log(`${'ERROR!'.red} option does not exist!`);
    //     break;
    // }

  } while (option !== 0);
}


main();