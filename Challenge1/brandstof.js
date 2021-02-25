var ctx = document.getElementById('brandstof').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustes', 'Oktober', 'November','December'],
        datasets: [{
            label: 'Brandstof',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 50, 80, 100]
        }]
    },

    // Configuration options go here
    options: {}
});