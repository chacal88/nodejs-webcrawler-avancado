/**
 * Created by chacal on 30/01/17.
 */

const Horseman = require('node-horseman');
const horseman = new Horseman();

horseman
    .open('http://duckduckgo.com/')
    .then(function (status) {
        console.log(`status,${status}`)
    })
    .type('input[name="q"]','School of net')
    .click('input.search__button')
    .waitForNextPage()
    .count('a.result__a')
    .then(function (counter) {
        console.log(`Count links = ${counter}`)
        // console.log(`status,${status}`)
    })
    .catch((err) => {
        console.log(`There is an error: ${err}`);
    })
    .close();

module.exports = horseman;