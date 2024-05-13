document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected record value
    const selectedRecordId = document.getElementById('recordDropdown').value;

    // Get data from textarea
    const data = document.getElementById('dataTextarea').value;

    // Prepare data for POST request
    const postData = {
        data: data,
    };

    try {
        const response = await fetch("http://localhost/api/prompt_types/request/" + selectedRecordId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify(postData)
        });

        if (response.ok) {
            console.log(response);
            console.log("POST request successful!");
            // Reset the form
            document.getElementById('myForm').reset();
        } else {
            console.error("POST request failed:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
