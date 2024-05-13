//TODO: Make API_URL configurable
export const API_URL = 'http://localhost:82';

import { getPromptTypes } from './modules/fetchData.js';
import './modules/formSubmit.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reloadButton').addEventListener('click', getPromptTypes);
    getPromptTypes();
});