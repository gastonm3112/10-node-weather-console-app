const axios = require('axios');
const config = require('../config');

class CityRepository {

  //Ejemplos de historial
  historial = ['Buenos Aires', 'Mendoza', 'Brasilia'];

  constructor() {
    this.basePath = config.mapbox.basePath;
    this.apikey = config.mapbox.apikey;
    this.limit = 5;
    this.language = 'es';
    //TODO: leer la DB si existe
  }

  async findCities(city = '') {
    try {
      //TODO: Realizar petición de https a la API
      const instance = axios.create({
        baseURL: `${this.basePath}${city}.json`,
        params: {
          'access_token': this.apikey,
          'limit': this.limit,
          'language': this.language
        }
      });

      //Obtener la data necesaria
      const response = await instance.get();

      return response.data.features.map(item => ({
        id: item.id,
        name: item.place_name,
        lon: item.center[0],
        lat: item.center[1]
      }));

    } catch (error) {
      return [];
    }

  }



}


module.exports = CityRepository;