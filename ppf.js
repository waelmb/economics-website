/************************************************************************
  Graph
************************************************************************/
var increasePrice = false
var decreasePrice = false
var increaseQuantity = false
var decreaseQuantity = false

var myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'black';

var chart = new Chart(myChart, {
  type:'scatter', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[0,1,2],
    datasets:[{
      label:'D',
      fill: false,
      data:[{x: 0.5,y: 1.5},{x: 1,y: 1},{x: 1.5,y: 0.5}],
      backgroundColor:'blue',
      borderWidth:1,
      borderColor:'blue',
      hoverBorderWidth:3,
      hoverBorderColor:'blue'
    }, {
      label:'S',
      fill: false,
      data:[{x: 0.5,y: 0.5},{x: 1,y: 1},{x: 1.5,y: 1.5}],
      backgroundColor:'green',
      borderWidth:1,
      borderColor:'green',
      hoverBorderWidth:3,
      hoverBorderColor:'green'
    }, {
      label:'5',
      borderDash: [5, 5],
      fill: false,
      data:[{x: 0,y: 1},{x: 1,y: 1}],
      backgroundColor:'purple',
      borderWidth:1,
      borderColor:'purple',
      hoverBorderWidth:3,
      hoverBorderColor:'purple'
    }, {
      label:'5',
      borderDash: [5, 5],
      fill: false,
      data:[{x: 1,y: 1},{x: 1,y: 0}],
      backgroundColor:'purple',
      borderWidth:1,
      borderColor:'purple',
      hoverBorderWidth:3,
      hoverBorderColor:'purple'
    }]
  },
  options:{
    animation: false,
    scales: {
      xAxes: [{
        gridLines: {
          display:true
        },
        ticks: {
          callback: function(value, index, values) {
            if (value == 1) {
              return 'Q1';
            } else if (increaseQuantity == true && value == 1.25) {
              return 'Q2'
            } else if (decreaseQuantity == true && value == 0.75) {
              return 'Q2'
            } else {
              return ''
            }
          },
          display: true,
          max: 2,
          min: 0,
          stepSize: 0.25
        },
        scaleLabel: {
          display: true,
          labelString: 'Quantity'
        }
      }],
      yAxes: [{
        gridLines: {
          display:true
        },
        ticks: {
          callback: function(value, index, values) {
            if (value == 1) {
              return 'P1';
            } else if (increasePrice == true && value == 1.25) {
              return 'P2'
            } else if (decreasePrice == true && value == 0.75) {
              return 'P2'
            } else {
              return ''
            }
          },
          display: true,
          max: 2,
          min: 0,
          stepSize: 0.25
        },
        scaleLabel: {
          display: true,
          labelString: 'Price'
        }
      }]

    },

    legend:{
      display:true,
      position:'right',
      labels:{
        filter: function(item, chart) {
                  // Logic to remove a particular legend item goes here
                  return !item.text.includes('5');
              },
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      mode: 'index',
      enabled: false
    }
  }
});

var demandClicks = false

var numLines = 0

function increaseDemandChart() {
  resetChart()
  var newDataset = {
    label:"D'",
    fill: false,
    data:[{x: 0.75,y: 1.75},{x: 1.25,y: 1.25},{x: 1.75,y: 0.75}],
    backgroundColor:'red',
    borderWidth:1,
    borderColor:'red',
    hoverBorderWidth:3,
    hoverBorderColor:'red'
  }
  var newAxis1 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 1.25,y: 1.25},{x: 1.25,y: 0}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  var newAxis2 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 1.25,y: 1.25},{x: 0,y: 1.25}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  if (demandClicks == false) {
    increasePrice = true
    increaseQuantity = true
    demandClicks = true
    numLines = numLines + 3
    chart.data.datasets.push(newDataset)
    chart.data.datasets.push(newAxis1)
    chart.data.datasets.push(newAxis2)
    chart.update()
  }
};
function increaseSupplyChart() {
  resetChart()
  var newDataset = {
    label:"S'",
    fill: false,
    data:[{x: 0.75,y: 0.25},{x: 1.25,y: 0.75},{x: 1.75,y: 1.25}],
    backgroundColor:'orange',
    borderWidth:1,
    borderColor:'orange',
    hoverBorderWidth:3,
    hoverBorderColor:'orange'
  }
  var newAxis1 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 1.25,y: 0.75},{x: 0,y: 0.75}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  var newAxis2 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 1.25,y: 0.75},{x: 1.25,y: 0}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  if (demandClicks == false) {
    decreasePrice = true
    increaseQuantity = true
    demandClicks = true
    numLines = numLines + 3
    chart.data.datasets.push(newDataset)
    chart.data.datasets.push(newAxis1)
    chart.data.datasets.push(newAxis2)
    chart.update()
  }

};
function decreaseDemandChart() {
  resetChart()
  var newDataset = {
    label:"D'",
    fill: false,
    data:[{x: 0.25,y: 1.25},{x: 0.75,y: 0.75},{x: 1.25,y: 0.25}],
    backgroundColor:'red',
    borderWidth:1,
    borderColor:'red',
    hoverBorderWidth:3,
    hoverBorderColor:'red'
  }
  var newAxis1 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 0.75,y: 0.75},{x: 0,y: 0.75}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  var newAxis2 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 0.75,y: 0.75},{x: 0.75,y: 0}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  if (demandClicks == false) {
    demandClicks = true
    decreasePrice = true
    decreaseQuantity = true
    numLines = numLines + 3
    chart.data.datasets.push(newDataset)
    chart.data.datasets.push(newAxis1)
    chart.data.datasets.push(newAxis2)
    chart.update()
  }
};
function decreaseSupplyChart() {
  resetChart()
  var newDataset = {
    label:"S'",
    fill: false,
    data:[{x: 0.25,y: 0.75},{x: 0.75,y: 1.25},{x: 1.25,y: 1.75}],
    backgroundColor:'orange',
    borderWidth:1,
    borderColor:'orange',
    hoverBorderWidth:3,
    hoverBorderColor:'orange'
  }
  var newAxis1 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 0.75,y: 1.25},{x: 0,y: 1.25}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  var newAxis2 = {
    label:'5',
    borderDash: [5, 5],
    fill: false,
    data:[{x: 0.75,y: 1.25},{x: 0.75,y: 0}],
    backgroundColor:'purple',
    borderWidth:1,
    borderColor:'purple',
    hoverBorderWidth:3,
    hoverBorderColor:'purple'
  }
  if (demandClicks == false) {
    demandClicks = true
    increasePrice = true
    decreaseQuantity = true
    numLines = numLines + 3
    chart.data.datasets.push(newDataset)
    chart.data.datasets.push(newAxis1)
    chart.data.datasets.push(newAxis2)
    chart.update()
  }
};
function resetChart() {
  demandClicks = false
  increasePrice = false
  decreasePrice = false
  increaseQuantity = false
  decreaseQuantity = false
  while (numLines > 0) {
    chart.data.datasets.pop()
    numLines = numLines - 1;
  }
  chart.update()
};

/************************************************************************
 UI Shading
 ************************************************************************/

/************************************************************************
 UI Buttons functions
 ************************************************************************/

/************************************************************************
 UI Explanation functions , ''
 ************************************************************************/
