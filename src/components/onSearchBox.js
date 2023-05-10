import { Notify } from 'notiflix/build/notiflix-notify-aio';

import fetchCountries from "./fetchCountries";
import { renderHTMLList, renderHTMLItem } from "./renderhtml";

import { refs } from '../models/refs'


function clearDigitsFromInput(event) {
  //Прибирає цифри з поля вводу
  //Змініть [^a-zA-Z] на [^a-zA-ZА-Яа-яЇїҐґ] якщо хочете дозволити кирилицю.
  //[-\/\.]  - тире крапка та слеш

  if (/[^a-zA-Z-\/\.]/.test(event.target.value)) {
    let Selection = event.target.selectionStart - 1;
    event.target.value = event.target.value.replace(/[^a-zA-Z-\/\.]/g, '');
    event.target.setSelectionRange(Selection, Selection);
  }
}

function onSearchBox(event) {
  clearDigitsFromInput(event);

  const str = event.target.value.trim();
  const strLength = str.length;

  //clear HTML
  if (!strLength) {
    if (!refs.countryList.innerHTML || !refs.countryInfo.innerHTML) {
      refs.countryList.innerHTML = "";
      refs.countryInfo.innerHTML = "";
    }
  }

  if (!!strLength) {
    fetchCountries(str)
      .then(data => {

        if (data.length > 1 && data.length <= 10) {
          //sorting
          data.sort((a, b) => a.name.official.localeCompare(b.name.official))

          refs.countryList.innerHTML = renderHTMLList(data);
          refs.countryInfo.innerHTML = "";
        } else if (data.length === 1) {
          refs.countryInfo.innerHTML = renderHTMLItem(data);
          refs.countryList.innerHTML = "";
        } else {
          Notify.info(`Too many matches found. Please enter a more specific name.`);
        }
      })

      .catch(error => {
        Notify.failure(`Oops, there is no country with that name. Error: ${error.message}`);
        console.dir(error.message);
      });
  }
}

export default onSearchBox;