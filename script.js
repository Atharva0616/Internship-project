const ctx = document.getElementById('attendanceChart').getContext('2d');

const attendanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: 'Number of Employees',
            data: [4, 3], // 4 present, 3 absent
            backgroundColor: ['green', 'red']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
