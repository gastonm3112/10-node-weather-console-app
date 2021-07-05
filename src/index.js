require('colors');
const {
  inquirerMenu,
  pause,
  readInput,
  listCities } = require('./helpers/inquirer');
const CityRepository = require('./repositories/cityRepository');
const cityRepository = new CityRepository();





const main = async () => {

  let option;

  do {

    option = await inquirerMenu();


    switch (option) {
      case 1:
        //Mostrar mensaje
        const searchCity = await readInput('City: ');

        //Mostrar los lugares
        const places = await cityRepository.findCities(searchCity);

        //Selecciona el lugar
        const idSelected = await listCities(places);
        const selectedPlace = places.find(place => place.id === idSelected);
        //Destructuración del lugar seleccionado
        const { name, lon, lat } = selectedPlace;

        //Buscar clima

        //Mostrar resultados
        console.log('\nInformation of Citys\n'.green);
        console.log('City: ', name);
        console.log('Lon: ', lon);
        console.log('Lat: ', lat);
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