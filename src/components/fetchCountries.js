import { URL_API } from '../models/env';

function fetchCountries(name) {

  return fetch(`${URL_API}/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });

}

export default fetchCountries;