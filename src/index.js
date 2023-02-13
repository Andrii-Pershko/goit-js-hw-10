import './css/styles.css';
import { clearMarking, searchCountry } from './js/function'

const _ = require('lodash');
const refs = {
    input: document.querySelector('#search-box'),
    counrylist: document.querySelector('.country-list'),
    countryInf: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener("input", _.debounce(fetchCountries, DEBOUNCE_DELAY));

function fetchCountries() {
    clearMarking(refs);
    searchCountry(refs);
}

