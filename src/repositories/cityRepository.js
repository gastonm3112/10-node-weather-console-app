const axios = require('axios');

class CityRepository {

  //Ejemplos de historial
  historial = ['Buenos Aires', 'Mendoza', 'Brasilia'];

  constructor() {

    //TODO: leer la DB si existe
  }

  async findCities(city = '') {

    //TODO: Realizar petición de https a la API
    const res = await axios.get('https://reqres.in/api/users?page=2');

    console.log(res.data);

    return []; //Retornar ciudades que coincidan con la busqueda

  }



}


module.exports = CityRepository;