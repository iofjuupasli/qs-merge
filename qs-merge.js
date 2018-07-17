const {parse, stringify} = require('querystring');

const qsMerge = (b) => (a) =>
    stringify(Object.assign(
        {},
        typeof a === `string` ? parse(a) : a,
        typeof b === `string` ? parse(b) : b,
    ));

module.exports = qsMerge;
