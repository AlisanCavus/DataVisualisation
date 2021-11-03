// creating canvas element
let tableCrimes = $("#table1");
let tableHomicides = $("#table2");
let newCanvas1 = $("<canvas/>" , {'id': 'crimes', 'class':'canv'});
let newCanvas2 = $("<canvas/>" , {'id': 'homicides', 'class':'canv'});
// console.log("test1");
newCanvas1.insertBefore(tableCrimes);
newCanvas2.insertBefore(tableHomicides);

// canvas elements created just above tables

//create a function that will call crimes chart
function createChart(labels, values, chartTitle) {  
  var crtCrimes =$("#crimes").getContext("2d");
  var chartCrimes = new chart(crtCrimes, {  
    type: "bar",
    data: { 

    },
    options: {
      responsive : true,
      maintainAspectRation: false,
    }
  });
  return chartCrimes;
};

// convert table data in object
var crimesData = $("#table1").tableToJSON({
  ignoreColumns: [0],
  ignoreRows:[1],
  headings: false
});
console.log(crimesData);
  




