let records = null;

export async function getPromptTypes() {
    const res = await fetch("http://localhost/api/prompt_types");
    records = await res.json();
    populateDropdown();

    return records;
}

export function populateDropdown() {
    const dropdown = document.getElementById('recordDropdown');

    // Clear previous options
    dropdown.innerHTML = '<option value="">Select a record</option>';

    // Populate dropdown with records
    records['hydra:member'].forEach(record => {
        const option = document.createElement('option');
        option.value = record.id;
        option.textContent = record.name;
        dropdown.appendChild(option);
    });
}