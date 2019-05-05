const rp = require('request-promise');

module.exports = async function (city = '') {
    if (!city)  throw new Error('Следует указать город');

    const KEY = '13d2715194db160d5dd4a18f5a8a8bb5';
    const uri = 'http://api.openweathermap.org/data/2.5/weather';

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    };

    try {
        const data = await rp(options);
        const {temp} = data.main;

        return {
            weather: `${data.name}: ${temp.toFixed(2)}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        };
    }
};