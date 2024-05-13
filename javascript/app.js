//TODO: Make API_URL configurable
export const API_URL = 'http://localhost:82';

import { getPromptTypes } from './modules/fetchData.js';
import './modules/formSubmit.js';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reloadButton').addEventListener('click', getPromptTypes);
    getPromptTypes();
});

document.addEventListener('DOMContentLoaded', function() {
    let openNewWindowButton = document.getElementById('openNewWindowButton');

    let extensionId = chrome.runtime.id;

    openNewWindowButton.addEventListener('click', function() {
        chrome.windows.create({
            'url': 'chrome-extension://' + extensionId +'/home.html',
            'type': 'popup',
            'width': 800,  // Adjust width and height as needed
            'height': 600
        });

        window.close();
    });
});