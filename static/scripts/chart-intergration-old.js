const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [{
      label: 'Revenue Growth',
      data: [12000, 15000, 18000, 17000, 20000],
      borderColor: '#27ae60',
      fill: false
    }]
  }
});

const orderValueCtx = document.getElementById('orderValueChart').getContext('2d');
new Chart(orderValueCtx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May'],
    datasets: [{
      label: 'Avg Order Value',
      data: [1100, 1200, 1250, 1300, 1234],
      backgroundColor: '#3498db'
    }]
  }
});

const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
new Chart(topProductsCtx, {
  type: 'pie',
  data: {
    labels: ['Sweaters','Jumpers','Blazers','T-shirts'],
    datasets: [{
      data: [50, 30, 20, 10],
      backgroundColor: ['#9b59b6','#2980b9','#16a085','#f39c12']
    }]
  }
});

const lowStockCtx = document.getElementById('lowStockChart').getContext('2d');
new Chart(lowStockCtx, {
  type: 'doughnut',
  data: {
    labels: ['Sweaters','Jumpers','Blazers','Socks'],
    datasets: [{
      data: [2,1,1,1],
      backgroundColor: ['#e74c3c','#c0392b','#d35400','#f39c12']
    }]
  }
});