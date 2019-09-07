// Init Feather Icons

feather.replace();

// TODO: Format Numbers

// TODO: Assets Class

// TODO: Render Count Up

var ctx = document.getElementById('ttwo-chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Day',
            data: [6, 2, 5, 3, 6, 9],
            backgroundColor: [
                'rgba(255, 99, 132, .2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
});