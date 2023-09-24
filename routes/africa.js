const { Router } = require('express');
const { getCountries, getCountriesUpToPopulation } = require('../controllers/africa');

const rutas = Router();

// Obtener todos los países de África
rutas.get('/africa/all', getCountries);
// Filtrar países de África hasta x cantidad de población
rutas.get('/africa/population', getCountriesUpToPopulation);

module.exports = rutas;