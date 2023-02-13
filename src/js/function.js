import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { markupList } from './fetchCountries'

function markUpCardCounty(country, refs) {
    console.log(country.flag)
    const markup =
        `
        <p class="name-flag"><img class="solo-country-flag"
        src="${country.flag}" 
        alt="Flag ${country.name}" 
        width="45"
        height="30"><b>${country.name}</b></p>
        <p><b>Capital:&#32</b>${country.capital}</p>
        <p><b>Population:&#32</b>${country.population}</p>
        <p><b>Languages:&#32</b>${country.languages.map(lang => lang.name).join(', ')}</p>
        `
        ;
    refs.countryInf.innerHTML = markup
}

export function clearMarking(refs) {
    refs.counrylist.innerHTML = "";
    refs.countryInf.innerHTML = "";
}

export function searchCountry(refs) {

    const inputValue = refs.input.value.trim();

    if (inputValue === "") {
        return
    }
    fetch(`https://restcountries.com/v2/name/${inputValue}?fields=name,capital,population,flag,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .then(arrayCounry => {
            console.log(arrayCounry)
            if (arrayCounry.length > 10) {
                Notify.info("Too many matches found. Please enter a more specific name.");

            } else if (arrayCounry.length > 2 && arrayCounry.length < 10) {
                console.log('I here')
                markupList(arrayCounry, refs.counrylist)
            } else {
                markUpCardCounty(...arrayCounry, refs)
            }

        })
        .catch(() => {
            Notify.failure("Oops, there is no country with that name")
        })
}