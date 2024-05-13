import { getPromptTypes } from './modules/fetchData.js';
import './modules/formSubmit.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reloadButton').addEventListener('click', getPromptTypes);
    getPromptTypes();
});