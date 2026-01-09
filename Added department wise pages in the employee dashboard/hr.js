const ctx = document.getElementById('deptChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent', 'Backup'],
        datasets: [{
            label: 'Employees',
            data: [2, 0, 1],   // HR department data
            backgroundColor: ['green', 'red', 'orange']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function toggleRow(id) {
    const row = document.getElementById(id);
    row.classList.toggle("show");
}

