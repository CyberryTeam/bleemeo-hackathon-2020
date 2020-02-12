var data = {
    datasets: [{
        data: [10, 10, 10, 10],

        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
    }],

    labels: [
        'Red',
        'Yellow',
        'Blue',
        'Blue2'
    ]
};

var ctx = document.getElementById("myChart");

var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        legend: {
            display: false
        }
    }
});