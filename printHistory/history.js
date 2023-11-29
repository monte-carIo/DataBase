// Sample data for demonstration purposes
var printingData = [
    { index: 1, mssv: '789012', document: 'Report', pages: 10, date: '2023-11-29', time: '10:30 AM', printerType: 'CANON 6660', pageType: 'A3' },
    // Add more data as needed
];

// Additional data
var additionalData = [
    { index: 2, mssv: '789012', document: 'Presentation', pages: 15, date: '2023-11-30', time: '2:45 PM', printerType: 'CANON 6660', pageType: 'A3' },
    { index: 3, mssv: '789012', document: 'Thesis', pages: 50, date: '2023-12-01', time: '9:15 AM', printerType: 'CANON 9999', pageType: 'A4' },
    { index: 4, mssv: '789012', document: 'Thesis', pages: 50, date: '2023-12-01', time: '9:15 AM', printerType: 'CANON 9999', pageType: 'A4' },
    { index: 5, mssv: '789012', document: 'OS', pages: 50, date: '2023-12-01', time: '9:15 AM', printerType: 'CANON 9999', pageType: 'A4' },
    { index: 6, mssv: '789012', document: 'SE', pages: 50, date: '2023-12-01', time: '9:15 AM', printerType: 'CANON 9999', pageType: 'A4' },
    // Add more rows as needed
];

// Combine the existing data with the additional data
var allData = printingData.concat(additionalData);

// Function to populate the table with data
function populateTable(data) {
    var tableBody = document.getElementById('printingHistory').getElementsByTagName('tbody')[0];

    data.forEach(function (entry) {
        var row = tableBody.insertRow(-1);
        Object.values(entry).forEach(function (value) {
            var cell = row.insertCell(-1);
            cell.textContent = value;
        });
    });
}

// Populate the table with sample data
populateTable(allData);

function searchDocumentByName() {
    var documentNameInput = document.getElementById('documentName');
    var documentName = documentNameInput.value.trim().toLowerCase();

    // Clear previous search results
    clearTable();

    // Filter data based on document name
    var searchResults = allData.filter(function (entry) {
        return entry.document.toLowerCase().includes(documentName);
    });

    // Display search results
    populateTable(searchResults);

    // Update page status based on search results
    updatePageStatus(100, calculatePrintedPages(searchResults));
}

function searchDocumentByPrintDate() {
    var printDateInput = document.getElementById('printDate');
    var printDate = printDateInput.value;

    // Clear previous search results
    clearTable();

    // Filter data based on print date
    var searchResults = allData.filter(function (entry) {
        return entry.date === printDate;
    });

    // Display search results
    populateTable(searchResults);

    // Update page status based on search results
    updatePageStatus(100, calculatePrintedPages(searchResults));
}

// Function to clear the table
function clearTable() {
    var tableBody = document.getElementById('printingHistory').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
}