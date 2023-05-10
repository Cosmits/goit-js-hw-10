
export function renderHTMLItem(data) {

  return data.map(({ flags, name, capital, population, languages }) => {
    const languageList = Object.values(languages).join(', ');
    
    return `<div class="tittle-item">
              <img src="${flags.svg}" width="30" height="20"alt="${flags.alt}">
              <h2 class="item-title">${name.official} ( ${name.common} )</h2>
            </div>
            <p><b>Capital:</b> ${capital}</p>
            <p><b>Population:</b> ${population}</p>
            <p><b>Languages:</b> ${languageList}</p>`;
  }).join('');

}


export function renderHTMLList(data) {

  return data.map(({ flags, name }) => {
    return `<li class="list-item">
                <img src="${flags.svg}" width="30"height="20" alt="${flags.alt}">
                <h2 class="item-title">${name.official} ( ${name.common} )</h2>
              </li>`;
  }).join('');
}

