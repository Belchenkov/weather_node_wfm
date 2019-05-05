const rp = require('request-promise');

module.exports = async function (city = '') {
    if (!city)  throw new Error('Следует указать город');

    console.log(city);
};