export function markupList(arrayCounry, markUpHtml) {

    const markup = arrayCounry
        .map((country) =>
            `<li class="list-item"> 
                <img class="country-flag"
                src="${country.flag}" 
                alt="Flag ${country.name}" 
                width="35"
                height="24">
                <p>${country.name}</p>
            </li>`)
        .join("");
    markUpHtml.innerHTML = markup
};

