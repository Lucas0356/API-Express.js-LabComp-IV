const axios = require('axios');
const { request, response} = require('express');

const url = 'https://restcountries.com/v3.1/region/africa';

const getAfrica = (req = request, res = response) => {        
    // const api = process.env.API_KEY;

    axios.get(`${url}/`)
        .then(({ status, data, statusText }) => {
            // handle success

            // Filtrar y obtener solo los nombres en español (el common)
            const countryNames = data
            .filter(country => country.translations?.spa)
            .map(country => ({ name: country.translations.spa.common, 
                capital: country.capital, languages: country.languages,
                flag: country.flag}));

            console.log({ status, data, statusText });
            const { results } = data;
            res.status(200).json({
                status,
                countries: countryNames,
                statusText,               
            });
        })
        .catch((error)=>{
            // handle error
            console.log(error);
            res.status(400).json({
                status:400,
                msg: 'Error inesperado'
            });
        });        
}

module.exports = { getAfrica };