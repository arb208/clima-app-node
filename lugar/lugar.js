const axios = require('axios');
const { dir } = require('console');

const getLugarLatLng = async(dir) => {


    const encodedUrl = (dir);
    const params = {
        auth: '444921953754795429832x113491',
        locate: `${encodedUrl}`,
        json: '1'
    };

    const response = await axios.get('https://geocode.xyz', { params });
    if (response.data.matches === null) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = response.data;
    //console.log(data);
    const direccion = response.data.standard.city;
    //console.log(direccion);
    const lat = response.data.latt;
    const lng = response.data.longt;


    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};