var chart;

function generateChart() {
  var startDate = document.getElementById('start-date').value;
  var endDate = document.getElementById('end-date').value;
  var products = ['NTMC', 'RAB', 'ATU'];
  var productData = {};
  var colors = ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'];
  
  for (var i = 0; i < products.length; i++) {
    productData[products[i]] = [];
  }
  
  // Replace this with your own data retrieval code
  var rawData = [    { date: '2022-01-01', product: 'NTMC', value: 100 },    { date: '2022-01-01', product: 'RAB', value: 15 },    { date: '2022-01-01', product: 'ATU', value: 20 },    { date: '2022-01-02', product: 'NTMC', value: 30 },    { date: '2022-01-02', product: 'RAB', value: 25 },    { date: '2022-01-02', product: 'ATU', value: 15 },    { date: '2022-01-03', product: 'NTMC', value: 20 },    { date: '2022-01-03', product: 'RAB', value: 10 },    { date: '2022-01-03', product: 'ATU', value: 30 },  ];
  
  for (var j = 0; j < rawData.length; j++) {
    var data = rawData[j];
    if (data.date >= startDate && data.date <= endDate) {
      productData[data.product].push(data.value);
    }
  }
  
  var chartLabels = [];
  
  var currentDate = new Date(startDate);
  while (currentDate <= new Date(endDate)) {
    chartLabels.push(currentDate.toISOString().substring(0, 10));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  var chartData = {
    labels: chartLabels,
    datasets: []
  };
  
  for (var i = 0; i < products.length; i++) {
    var productValues = productData[products[i]];
    chartData.datasets.push({
      label: products[i],
      backgroundColor: colors[i],
      borderColor: colors[i],
      borderWidth: 1,
      data: productValues
    });
  }

  var ctx = document.getElementById('chart').getContext('2d');
  
  if (chart) {
    chart.destroy();
  }
  
  chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

generateChart();

var startDatePicker = document.getElementById('start-date');
var endDatePicker = document.getElementById('end-date');

startDatePicker.addEventListener('change', function() {
  generateChart();
});

endDatePicker.addEventListener('change', function() {
  generateChart();
});
