import './css/styles.css';

//library
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//const
import { refs } from './models/refs';
import { DEBOUNCE_DELAY } from './models/env';
//function
import fetchCountries from './components/fetchCountries';
import onSearchBox from './components/onSearchBox';

refs.searchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));
