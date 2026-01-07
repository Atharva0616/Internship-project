const ctx = document.getElementById('deptChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent', 'Backup'],
        datasets: [{
            label: 'Employees',
            data: [1, 0, 0],   // Sales department data
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
