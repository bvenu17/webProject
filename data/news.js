const axios = require('axios');
const url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';

const getAllData = async () => {
    const res = await axios.get(url);
    return res.data.articles;
}
const  getPersonByName = async () => {
    const res = await axios.get(url);
    return res.data.articles[0].title;
}
const  getImage = async () => {
    const res = await axios.get(url);
    return res.data.articles[0].urlToImage;
}


module.exports = {
    getAllData,
    getPersonByName,
    getImage
};