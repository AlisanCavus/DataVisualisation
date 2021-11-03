// creating canvas element
let table1 = $("#table1");
let table2 = $("#table2");
let newCanvas1 = $("<canvas/>" , {'id': 'crimes', 'class':'canv'});
let newCanvas2 = $("<canvas/>" , {'id': 'homicide', 'class':'canv'});
// console.log("test1");
newCanvas1.insertBefore(table1);
newCanvas2.insertBefore(table2);

// canvas elements created just above tables

//create charts 
let myCharts = $(".crimes").getContext("2d");

let crimesChart = new Chart(myCharts);
let homicideChart = new Chart(myCharts);

