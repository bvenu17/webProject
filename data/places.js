const axios = require('axios');
const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=playgrounds+in+Hoboken&key=AIzaSyAgCmZMYCBmuNLO_gJOxCWzobV3DLvtevY';

const getPlaygrounds = async () => {
    const res = await axios.get(url);
    return res.data.results;
}


module.exports = {
    getPlaygrounds
};