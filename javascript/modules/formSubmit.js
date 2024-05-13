import {API_URL} from "../app.js";
let LAST_REQUEST_ID = null;

document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected record value
    let selectedRecordId = document.getElementById('recordDropdown').value;

    // Get data from textarea
    let data = document.getElementById('dataTextarea').value;

    // Prepare data for POST request
    let postData = {
        data: data,
    };

    try {
        let response = await fetch(API_URL + "/api/prompt_types/request/" + selectedRecordId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            let responseJsonData = await response.json();

            LAST_REQUEST_ID = responseJsonData['ollamaRequest'].id;

            // Construct the message with the link
            let message = 'Successfully submitted. <a href="' + API_URL + '/ollama/request/' + LAST_REQUEST_ID + '" target="_blank">View your request here</a>';

            // Show success message for 5 seconds
            let alertDiv = document.getElementById('alert');
            alertDiv.innerHTML = message;
            alertDiv.style.display = "block";
            setTimeout(() => {
                alertDiv.style.display = "none";
            }, 5000);

            // Reset the form
            document.getElementById('myForm').reset();
        } else {
            console.error("POST request failed:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
