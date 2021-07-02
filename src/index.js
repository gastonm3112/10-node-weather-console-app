require('colors');
const {
  inquirerMenu,
  pause,
  readInput } = require('./helpers/inquirer');
const CityRepository = require('./repositories/cityRepository');
const cityRepository = new CityRepository();





const main = async () => {

  let option;

  do {

    option = await inquirerMenu();


    switch (option) {
      case 1:
        //Mostrar mensaje
        const city = await readInput('City: ');
        console.log(city);
        //Mostrar los lugares

        //Selecciona el lugar

        //Buscar clima

        //Mostrar resultados
        console.log('\nInformation of Citys\n'.green);
        console.log('City: ',);
        console.log('Lat: ',);
        console.log('Lon: ',);
        console.log('Temperature: ',);
        console.log('Min. Temp: ',);
        console.log('Max Temp: ',);
        break;
    }

    if (option !== 0) {
      await pause();
    }

  } while (option !== 0);
}


main();