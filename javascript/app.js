//TODO: Make API_URL configurable
export const API_URL = 'http://localhost:82';

import {getPromptTypes} from './modules/fetchData.js';
import './modules/formSubmit.js';

const reloadButton = document.getElementById('reloadButton');

if (reloadButton) {
    document.addEventListener('DOMContentLoaded', function () {
        reloadButton.addEventListener('click', getPromptTypes);
        getPromptTypes();
    });
}

const openNewWindowButton = document.getElementById('openNewWindowButton');

if (openNewWindowButton) {
    document.addEventListener('DOMContentLoaded', function () {

        let extensionId = chrome.runtime.id;

        openNewWindowButton.addEventListener('click', function () {
            chrome.windows.create({
                'url': 'chrome-extension://' + extensionId + '/home.html',
                'type': 'popup',
                'width': 800,  // Adjust width and height as needed
                'height': 600
            });

            window.close();
        });
    });
}

