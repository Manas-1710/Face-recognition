const BACKEND_URL = "http://127.0.0.1:5000";

document.getElementById('capture-btn').addEventListener('click', function() {
    let studentName = prompt("Enter the student's name:");
    
    if (studentName) {
        fetch(`${BACKEND_URL}/capture/${studentName}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').innerText = data.message;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('output').innerText = 'Error capturing image.';
            });
    } else {
        document.getElementById('output').innerText = 'Capture cancelled: No name entered.';
    }
});

document.getElementById('train-btn').addEventListener('click', function() {
    fetch(`${BACKEND_URL}/train`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Error training model.';
        });
});

document.getElementById('run-btn').addEventListener('click', function() {
    fetch(`${BACKEND_URL}/run`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Error running attendance.';
        });
});

document.getElementById('check-btn').addEventListener('click', function() {
    fetch(`${BACKEND_URL}/attendance-log`)
        .then(response => response.json())
        .then(data => {
            let logOutput = 'Attendance Log:\n';
            data.log.forEach(row => {
                logOutput += `Name: ${row[0]}, Date: ${row[1]}, Time: ${row[2]}\n`;
            });
            document.getElementById('output').innerText = logOutput;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerText = 'Error fetching attendance log.';
        });
});
