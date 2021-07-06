const axios = require('axios');
const config = require('../config');

class WeatherRepository {

  constructor() {
    this.basePath = config.openweather.basePath,
      this.appid = config.openweather.apikey,
      this.units = 'metric',
      this.lang = 'es'
  }


  async getWeather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `${this.basePath}`,
        params: {
          lat,
          lon,
          'units': this.units,
          'lang': this.lang,
          'appid': this.appid
        }
      });

      const response = await instance.get();


      return {
        desc: response.data.weather[0].description,
        temp: response.data.main.temp,
        min: response.data.main.temp_min,
        max: response.data.main.temp_max
      };


    } catch (error) {
      console.log(error);
    }

  }




}

module.exports = WeatherRepository;