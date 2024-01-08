function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
function addStudent() {
    var studentName = document.getElementById('studentName').value;

    if (studentName.trim() === "") {
        alert('Please enter a valid student name.');
        return;
    }

    // Get or initialize the attendance data from local storage
    var attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

    // Add the new student to the attendance data
    attendanceData.push({
        name: studentName,
        timestamp: new Date().toLocaleString()
    });

    // Update local storage with the updated attendance data
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));

    // Refresh the attendance table
    displayAttendance();
}

function displayAttendance() {
    var attendanceTable = document.getElementById('attendanceTable');
    attendanceTable.innerHTML = ""; // Clear existing table content

    // Get the attendance data from local storage
    var attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

    // Create table header
    var headerRow = attendanceTable.insertRow(0);
    var nameHeader = headerRow.insertCell(0);
    var timestampHeader = headerRow.insertCell(1);
    nameHeader.innerHTML = '<b>Name</b>';
    timestampHeader.innerHTML = '<b>Timestamp</b>';

    // Populate the attendance table with data
    for (var i = 0; i < attendanceData.length; i++) {
        var row = attendanceTable.insertRow(i + 1);
        var nameCell = row.insertCell(0);
        var timestampCell = row.insertCell(1);
        nameCell.innerHTML = attendanceData[i].name;
        timestampCell.innerHTML = attendanceData[i].timestamp;
    }
}

// Initial display of attendance
displayAttendance();

