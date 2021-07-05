require('colors');
const {
  inquirerMenu,
  pause,
  readInput,
  listCities } = require('./helpers/inquirer');
const CityRepository = require('./repositories/cityRepository');
const cityRepository = new CityRepository();
const WeatherRepository = require('./repositories/weatherRepository');
const weatherRepository = new WeatherRepository();





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

        if (idSelected === '0') continue;

        const selectedPlace = places.find(place => place.id === idSelected);
        //Destructuración del lugar seleccionado
        const { name, lon, lat } = selectedPlace;

        //Buscar clima
        const weather = await weatherRepository.getWeather(lat, lon);
        //Destructuración datos del clima
        const { desc, temp, min, max } = weather;

        //Mostrar resultados
        console.clear();
        console.log('\nInformation of Citys\n'.green);
        console.log('City: ', name.green);
        console.log('Lon: ', lon);
        console.log('Lat: ', lat);
        console.log('Weather description: ', desc.green);
        console.log('Temperature: ', temp);
        console.log('Min. Temp: ', min);
        console.log('Max Temp: ', max);

        break;
    }

    if (option !== 0) {
      await pause();
    }

  } while (option !== 0);
}


main();