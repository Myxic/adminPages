viewElectricalreportModal.addEventListener("click", ()=> {
    ElectricalreportModal.showModal();
});
closeElectricalreportModal.addEventListener("click", ()=> {
    ElectricalreportModal.close();
});


viewPlumbingReportModal.addEventListener("click", ()=> {
    PlumbingReportModal.showModal();
});
closePlumbingReportModal.addEventListener("click", ()=> {
    PlumbingReportModal.close();
});


viewCarpentryReportModal.addEventListener("click", ()=> {
    CarpentryReportModal.showModal();
});
closeCarpentryReportModal.addEventListener("click", ()=> {
    CarpentryReportModal.close();
});


viewWindowReportModal.addEventListener("click", ()=> {
    WindowReportModal.showModal();
});
closeWindowReportModal.addEventListener("click", ()=> {
    WindowReportModal.close();
});


viewOthersReportModal.addEventListener("click", ()=> {
    OthersReportModal.showModal();
});
closeOthersReportModal.addEventListener("click", ()=> {
    OthersReportModal.close();
});


// TO GET DATA FROM API AND POPULATE A TABLE


document.addEventListener('DOMContentLoaded', function () {
    fetch('http://your-api-server-domain:port/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Call a function to populate the table with the retrieved data
            populateTable(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    function populateTable(data) {
        const table = document.querySelector('.tablePacer table');
        const tbody = document.createElement('tbody');

        // Iterate through the data and create table rows
        data.forEach((item, index) => {
            const row = document.createElement('tr');

            // Create a cell for the row number (index)
            const indexCell = document.createElement('td');
            indexCell.textContent = index + 1;
            row.appendChild(indexCell);

            // Create cells for user, room number, and issue
            const userCell = document.createElement('td');
            userCell.textContent = item.user;
            row.appendChild(userCell);

            const roomNoCell = document.createElement('td');
            roomNoCell.textContent = item.roomNo;
            row.appendChild(roomNoCell);

            const issueCell = document.createElement('td');
            issueCell.textContent = item.issue;
            row.appendChild(issueCell);

            // Create an empty cell for the last column
            const emptyCell = document.createElement('td');
            row.appendChild(emptyCell);

            // Append the row to the table body
            tbody.appendChild(row);
        });

        // Replace the existing tbody with the new one containing data
        table.replaceChild(tbody, table.querySelector('tbody'));
    }
});
