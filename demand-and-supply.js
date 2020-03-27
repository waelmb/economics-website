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
 function shadeChart() {
   resetChart();
   chart.update();
 };

var displayCS = false;
var displayPS = false;
var displayDWL = false;

function toggleConsumerSurplus() {
  displayCS = !displayCS;
  shadeConsumerSurplus();
};

 function shadeConsumerSurplus() {
   resetChart();
   chart.update();

   var shape = document.getElementById('consumerSurplus');
   //display
   if(!displayCS) {
     shape.style.display = 'none';
   }
   else if(displayCS) {
     shape.style.display = 'block';
   }
 };

 function toggleProducerSurplus() {
   displayPS = !displayPS;
   shadeProducerSurplus();
 };

  function shadeProducerSurplus() {
    resetChart();
    chart.update();

    var shape = document.getElementById('producerSurplus');
    //display
    if(!displayPS) {
      shape.style.display = 'none';
    }
    else if(displayPS) {
      shape.style.display = 'block';
    }
  };

/************************************************************************
 UI Buttons functions
 ************************************************************************/
var normalGood = false;
var inferiorGood = false;

function toggleNormalGood() {
  normalGood = !normalGood;
  if(normalGood === true && inferiorGood === true) {
    inferiorGood = !inferiorGood;
  }
  //console.log("Error: normalGood: " + normalGood);
  //console.log("Error: inferiorGood: " + inferiorGood);

  //set the correct color
  setColorNormalGoodButton();
  setColorInferiorGoodButton();
}
function toggleInferiorGood() {
  inferiorGood = !inferiorGood;
  if(normalGood === true && inferiorGood === true) {
    normalGood = !normalGood;
  }

  //console.log("Error: normalGood: " + normalGood);
  //console.log("Error: inferiorGood: " + inferiorGood);

  //set the correct color
  setColorNormalGoodButton();
  setColorInferiorGoodButton();

}

function setColorNormalGoodButton() {
  var property = document.getElementById('normalGoodButton');

  //change normalGood if needed
  if(normalGood === true) {
    //change to white
    property.style.backgroundColor = "white"
    property.style.color = "#D50032"
  }
  else if (normalGood === false){
    //change to default red
    property.style.backgroundColor = "#D50032"
    property.style.color = "white"
  }

  //console.log("Error: normalGood: " + normalGood);
  //console.log("Error: inferiorGood: " + inferiorGood);
}

function setColorInferiorGoodButton() {
  var property = document.getElementById('inferiorGoodButton');

  //change inferiorGood if needed
  if(inferiorGood === true) {
    //change to white
    property.style.backgroundColor = "white"
    property.style.color = "#D50032"
  }
  else if (inferiorGood === false){
    //change to default red
    property.style.backgroundColor = "#D50032"
    property.style.color = "white"
  }
  //console.log("Error: normalGood: " + normalGood);
  //console.log("Error: inferiorGood: " + inferiorGood);
}

function incomeIncrease() {
  if(normalGood === true) {
    increaseDemandChart();
    setDisplayedExpTo('expIncomeIncNormal', true, true);
  }
  else if( inferiorGood === true) {
    decreaseDemandChart();
    setDisplayedExpTo('expIncomeIncInferior', true, false);
  }
  else {
    document.getElementById('default').style.display = 'none';
    document.getElementById('incomeError').style.display = 'block';
    console.log("Error: Type of good hasn't been selected");
  }
};

function incomeDecrease() {
  if(inferiorGood === true) {
    increaseDemandChart();
    setDisplayedExpTo('expIncomedecInferior', true, true);
  }
  else if(normalGood === true) {
    decreaseDemandChart();
    setDisplayedExpTo('expIncomedecNormal', true, false);

  }
  else {
    document.getElementById('default').style.display = 'none';
    document.getElementById('incomeError').style.display = 'block';
    console.log("Error: Type of good hasn't been selected");
  }
};

/************************************************************************
 UI Explanation functions , ''
 ************************************************************************/
var defaultIds = [
  'default', 'incomeError'
];
var demandIds = ['expIncomeIncNormal',
'expIncomedecNormal', 'expIncomeIncInferior', 'expIncomedecInferior',
'expPrefInc', 'expPrefDec', 'expSubInc', 'expSubDec', 'expCompInc', 'expCompDec',
'expAccessInc', 'expAccessDec', 'expFuturePInc', 'expFuturePDec', 'expFutureQInc', 'expFutureQDec',
'expFutureIInc', 'expFutureIDec', 'expBuyersInc', 'expBuyersDec'
];
var supplyIds = [ 'expPInputsInc', 'expPInputsDec',
'expTechInc', 'expTechDec', 'expProdInc', 'expProdDec', 'expSubsidy', 'expTax'
];
var doubleIds = ['expBothInc', 'expBothDec',
'expIncDDecS', 'expDecDIncS'
];
var isDemandShift = false;
var isSupplyShift = false;
var isDemandInc = false;
var isDemandDec = false;
var isSupplyInc = false;
var isSupplyDec = false;


//sets explanation section to default
function setDisplayedExpToDefault() {
  //loop through everything and set to display none
  defaultIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });
  demandIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });
  supplyIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });
  doubleIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });

  //display default
  document.getElementById('default').style.display = 'block';

  //reset the variables
  resetExplanations();
}

//sets a specific demand explanation to be displated
function setDisplayedExpTo(choice, isDemand, isInc) {
  //check if demand or supply shift
  if(isDemand) {
    isDemandShift = true;
  } else {
    isSupplyShift = true;
  }

  //loop through everything and set to display none
  defaultIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });
  //if is a demand shift, loop through the demand section to make it unvisible
  if(isDemand) {
    demandIds.forEach((item, i) => {
      var exp = document.getElementById(item);
      exp.style.display = 'none';
    });
  }
  //if is a supply shift, loop through the supply section to make it unvisible
  if(!isDemand) {
    supplyIds.forEach((item, i) => {
      var exp = document.getElementById(item);
      exp.style.display = 'none';
    });
  }

  doubleIds.forEach((item, i) => {
    var exp = document.getElementById(item);
    exp.style.display = 'none';
  });

  //display choice after checking possible income error
  if((choice === 'expIncomeIncNormal' || choice === 'expIncomedecNormal' || choice === 'expIncomeIncInferior' || choice === 'expIncomedecInferior') && (!normalGood && !inferiorGood)) {
    document.getElementById('incomeError').style.display = 'block';
  }
  else {
    document.getElementById(choice).style.display = 'block';
  }

  //figure out if increasing or decreasing
  if(isDemandShift) {
    if(isInc) {
      isDemandInc = true;
    }
    else {
      isDemandDec = true;
    }
  }
  if(isSupplyShift) {
    if(isInc) {
      isSupplyInc = true;
    }
    else {
      isSupplyDec = true;
    }
  }


  //display a double shift if exist
  if(isDemandShift && isSupplyShift) {
    //console.log('entered double shifts')
    //console.log(isDemandInc + ' ' + isDemandDec + ' ' + isSupplyInc + ' ' + isSupplyDec)
    //display the double shift
    if(isDemandInc && isSupplyInc) {
      document.getElementById('expBothInc').style.display = 'block';
      //console.log('entered expBothInc')
    }
    else if(isDemandInc && isSupplyDec) {
      document.getElementById('expIncDDecS').style.display = 'block';
      //console.log('entered expIncDDecS')
    }
    else if(isDemandDec && isSupplyInc) {
      document.getElementById('expDecDIncS').style.display = 'block';
      //console.log('entered expDecDIncS')
    }
    else if(isDemandDec && isSupplyDec) {
      document.getElementById('expBothDec').style.display = 'block';
      //console.log('entered expBothDec')
    }

    //reset the variables
    resetExplanations();
  }

}

function resetExplanations() {
  isDemandShift = false;
  isSupplyShift = false;
  isDemandInc = false;
  isDemandDec = false;
  isSupplyInc = false;
  isSupplyDec = false;
}
