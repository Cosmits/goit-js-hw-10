import './css/styles.css';

//library
import debounce from 'lodash.debounce';
//const
import { refs } from './models/refs';
import onSearchBox from './components/on-search-box';


const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener('input', debounce(onSearchBox , DEBOUNCE_DELAY));
