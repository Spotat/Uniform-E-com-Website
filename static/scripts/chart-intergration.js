// Revenue Growth (Line Chart)
var revenueChart = echarts.init(document.getElementById('revenueChart'));
var revenueOption = {
  title: { text: 'Revenue Growth' },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Jan','Feb','Mar','Apr','May'] },
  yAxis: { type: 'value' },
  series: [{
    name: 'Revenue',
    data: [12000, 15000, 18000, 17000, 20000],
    type: 'line',
    smooth: true,
    lineStyle: { color: '#27ae60' },
    areaStyle: { color: 'rgba(39,174,96,0.2)' }
  }]
};
revenueChart.setOption(revenueOption);

// Average Order Value (Bar Chart)
var orderValueChart = echarts.init(document.getElementById('orderValueChart'));
var orderValueOption = {
  title: { text: 'Average Order Value' },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Jan','Feb','Mar','Apr','May'] },
  yAxis: { type: 'value' },
  series: [{
    name: 'Order Value',
    data: [1100, 1200, 1250, 1300, 1234],
    type: 'bar',
    itemStyle: { color: '#3498db' }
  }]
};
orderValueChart.setOption(orderValueOption);

// Top Products (Pie Chart)
var topProductsChart = echarts.init(document.getElementById('topProductsChart'));
var topProductsOption = {
  title: { text: 'Top Selling Products', left: 'center' },
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Products',
    type: 'pie',
    radius: '50%',
    data: [
      { value: 50, name: 'Sweaters' },
      { value: 30, name: 'Jumpers' },
      { value: 20, name: 'Blazers' },
      { value: 10, name: 'T-shirts' }
    ],
    emphasis: {
      itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.5)' }
    }
  }]
};
topProductsChart.setOption(topProductsOption);

// Low Stock Alerts (Doughnut Chart)
var lowStockChart = echarts.init(document.getElementById('lowStockChart'));
var lowStockOption = {
  title: { text: 'Low Stock Alerts', left: 'center' },
  tooltip: { trigger: 'item' },
  series: [{
    name: 'Low Stock',
    type: 'pie',
    radius: ['40%', '70%'], // doughnut style
    data: [
      { value: 2, name: 'Sweaters' },
      { value: 1, name: 'Jumpers' },
      { value: 1, name: 'Blazers' },
      { value: 1, name: 'Socks' }
    ],
    itemStyle: {
      color: function(params) {
        const colors = ['#e74c3c','#c0392b','#d35400','#f39c12'];
        return colors[params.dataIndex];
      }
    }
  }]
};
lowStockChart.setOption(lowStockOption);

window.addEventListener('resize', () => {
  revenueChart.resize();
  orderValueChart.resize();
  topProductsChart.resize();
  lowStockChart.resize();
});
