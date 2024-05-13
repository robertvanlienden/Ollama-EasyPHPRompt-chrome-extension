import {API_URL} from "../app.js";

let requests;

export async function getRequests() {
    const res = await fetch(API_URL + "/api/ollama_requests?page=1&order%5BcreatedAt%5D=asc&status=PROCESSING");
    requests = await res.json();
    populateProcessingRequests();

    return requests;
}

export function populateProcessingRequests() {
    const processingRecords = document.getElementById('processingRecords');

    processingRecords.innerHTML = '';

    if (requests['hydra:member'].length > 0) {
        // Populate dropdown with promptTypes
        requests['hydra:member'].forEach(record => {
            const request = document.createElement('tr');
            request.innerHTML += '<a href="' + API_URL + "/ollama/request/" + record.id + '" target="_blank">Picked up by worker at ' + record.pickedUpByWorkerAt + '</a><br><br>';
            processingRecords.appendChild(request);
        });
    } else {
        request.innerHTML += 'No currently processing records found!';
    }
}

getRequests();