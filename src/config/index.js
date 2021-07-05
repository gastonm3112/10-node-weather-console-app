const dotenv = require('dotenv');
const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find the .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mapbox: {
    basePath: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    apikey: process.env.MAPBOX_API_KEY
  },
  openweather: {
    basePath: 'https://api.openweathermap.org/data/2.5/weather',
    apikey: process.env.OPENWEATHER_API_KEY
  }
}