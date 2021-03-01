

var ctxpie = document.getElementById('myDoughnutChart').getContext('2d');
// For a pie chart
var myPieChart = new Chart(ctxpie, {
    type: 'pie',
    
    data: {
        labels: [
            'Mannen',
            'Vrouwen',
        ],
        datasets: [{
            data: [300, 150,],
            backgroundColor:['#462DFF','#FF2DB6'],
            borderColor:['#000000','#000000'], 
        }],
    },   
        // These labels appear in the legend and in the tooltips when hovering different arcs

    options: {
        cutoutPercentage: 50,   
        responsive: true,        
    }
});

var ctx = document.getElementById('brandstof').getContext('2d');
var myLineChart  = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus','September','Oktober'],
        datasets: [{
            label: 'Brandstof in procenten (%)',
            borderColor: 'rgb(55, 255, 132)',
            data: [100, 85, 80, 75, 70, 65, 60,50,45,40,0]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctxsnelheid = document.getElementById('snelheid').getContext('2d');
var chart = new Chart(ctxsnelheid, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus','September','Oktober',],
        datasets: [{
            label: 'Snelheid in 1000 kilometers(km)',
            borderColor:'rgb(255, 128, 0)',
            backgroundColor:'rgb(255, 128, 0)',
            data: [50, 85, 80, 75, 70, 65, 60,50,45,40,35,20]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxbars = document.getElementById('voedsel').getContext('2d');
var chart = new Chart(ctxbars, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Brood', 'Snoep', 'Fruit', 'Rijst','Groenten'],
        datasets: [{
            label: 'Eten op voorraad in procenten (%)',
            backgroundColor: ['rgb(158, 90, 0','rgb(255, 200, 251','rgb(255, 95, 76','rgb(198, 198, 198','rgb(19, 194, 0)'],
            data: [100,50, 70, 60, 25,0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxbars = document.getElementById('verzorging').getContext('2d');
var chart = new Chart(ctxbars, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Deodorant', 'Zeep', 'Tampons', 'Shampoo'],
        datasets: [{
            label: 'Aantal verzorgings producten in procenten (%)',
            backgroundColor: 'rgb(19, 194, 255)',
            data: [50, 70, 60, 25,0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxkleding = document.getElementById('kleding').getContext('2d');
var chart = new Chart(ctxkleding, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Truien', 'T-shirts', 'Broeken','Onderbroeken','Onderhemden', 'Vesten'],
        datasets: [{
            label: 'Aantal kleding in procenten (%)',
            backgroundColor: 'rgb(255, 19, 19)',
            data: [100, 60, 100, 40,70,80,0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxmeds = document.getElementById('medicijnen').getContext('2d');
var chart = new Chart(ctxmeds, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Paracetamol', 'Ibuprofen', 'Voltaren'],
        datasets: [{
            label: 'Aantal medicijnen in procenten (%)',
            backgroundColor: 'rgb(255, 213, 2)',
            data: [100,80, 65, 50,0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxtoys = document.getElementById('speelgoed').getContext('2d');
var chart = new Chart(ctxtoys, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['puzzles', 'speelkaarten', 'Q&A- kaarten','Ballen'],
        datasets: [{
            label: 'Aantal speelgoed',
            backgroundColor: 'rgb(149, 8, 187)',
            data: [7, 10, 5,6,0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxwater = document.getElementById('watertank').getContext('2d');
var chart = new Chart(ctxwater, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus','September','Oktober',],
        datasets: [{
            label: 'Inhoud watertank in procenten (%)',
            backgroundColor: 'rgb(144, 255, 251)',
            borderColor: 'rgb(144, 255, 251)',
            data: [100,90, 85, 80, 75, 70, 65, 60,50,45,40,35,20,0]
        }]
    },

    // Configuration options go here
    options: {
    }
});


document.getElementById('button').onclick = function(){
    var x = document.getElementById('gebruik').value; 
    alert(x);

}