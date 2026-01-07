const ctx = document.getElementById('deptChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent', 'Backup'],
        datasets: [{
            label: 'Employees',
            data: [2, 1, 0],   // IT department data
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
