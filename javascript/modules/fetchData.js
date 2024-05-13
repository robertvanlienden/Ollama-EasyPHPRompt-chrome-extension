import {API_URL} from "../app.js";

let promptTypes = null;

export async function getPromptTypes() {
    const res = await fetch(API_URL + "/api/prompt_types?order%5Bname%5D=asc\n");
    promptTypes = await res.json();
    populateDropdown();

    return promptTypes;
}

export function populateDropdown() {
    const dropdown = document.getElementById('recordDropdown');

    // Clear previous options
    dropdown.innerHTML = '';

    // Populate dropdown with promptTypes
    promptTypes['hydra:member'].forEach(record => {
        const option = document.createElement('option');
        option.value = record.id;
        option.textContent = record.name;
        dropdown.appendChild(option);
    });
}