const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f4bf8e8a48abf34e196342a67f5b4a61&units=metric`);
    return resp.data.main.temp;
};


module.exports = {
    getClima
};