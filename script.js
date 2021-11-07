// creating canvas element
let tableCrimes = $("#table1");
let tableHomicides = $("#table2");
let newCanvas1 = $("<canvas/>", { id: "crimes", class: "canv" });
let newCanvas2 = $("<canvas/>", { id: "homicides", class: "canv" });
// console.log("test1");
newCanvas1.insertBefore(tableCrimes);
newCanvas2.insertBefore(tableHomicides);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let arrayCrimes = JSON.parse(xhttp.responseText);
    console.log(arrayCrimes);

    const ctx = $("#crimes");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
        ],
        datasets: [
          {
            label: arrayCrimes[0].country,
            data: [
              arrayCrimes[0].y2002,
              arrayCrimes[0].y2003,
              arrayCrimes[0].y2004,
              arrayCrimes[0].y2005,
              arrayCrimes[0].y2006,
              arrayCrimes[0].y2007,
              arrayCrimes[0].y2008,
              arrayCrimes[0].y2009,
              arrayCrimes[0].y2010,
              arrayCrimes[0].y2011,
              arrayCrimes[0].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(39, 140, 201, 0.7)"
          },
          {
            label: arrayCrimes[1].country,
            data: [
              arrayCrimes[1].y2002,
              arrayCrimes[1].y2003,
              arrayCrimes[1].y2004,
              arrayCrimes[1].y2005,
              arrayCrimes[1].y2006,
              arrayCrimes[1].y2007,
              arrayCrimes[1].y2008,
              arrayCrimes[1].y2009,
              arrayCrimes[1].y2010,
              arrayCrimes[1].y2011,
              arrayCrimes[1].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(226, 57, 16, 0.1)"
          },
          {
            label: arrayCrimes[2].country,
            data: [
              arrayCrimes[2].y2002,
              arrayCrimes[2].y2003,
              arrayCrimes[2].y2004,
              arrayCrimes[2].y2005,
              arrayCrimes[2].y2006,
              arrayCrimes[2].y2007,
              arrayCrimes[2].y2008,
              arrayCrimes[2].y2009,
              arrayCrimes[2].y2010,
              arrayCrimes[2].y2011,
              arrayCrimes[2].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(121, 208, 151, 0.1)"
          },
          {
            label: arrayCrimes[3].country,
            data: [
              arrayCrimes[3].y2002,
              arrayCrimes[3].y2003,
              arrayCrimes[3].y2004,
              arrayCrimes[3].y2005,
              arrayCrimes[3].y2006,
              arrayCrimes[3].y2007,
              arrayCrimes[3].y2008,
              arrayCrimes[3].y2009,
              arrayCrimes[3].y2010,
              arrayCrimes[3].y2011,
              arrayCrimes[3].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(141, 31, 161, 0.9)"
          },
          {
            label: arrayCrimes[4].country,
            data: [
              arrayCrimes[4].y2002,
              arrayCrimes[4].y2003,
              arrayCrimes[4].y2004,
              arrayCrimes[4].y2005,
              arrayCrimes[4].y2006,
              arrayCrimes[4].y2007,
              arrayCrimes[4].y2008,
              arrayCrimes[4].y2009,
              arrayCrimes[4].y2010,
              arrayCrimes[4].y2011,
              arrayCrimes[4].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(206, 45, 113, 0.6)"
          },
          {
            label: arrayCrimes[5].country,
            data: [
              arrayCrimes[5].y2002,
              arrayCrimes[5].y2003,
              arrayCrimes[5].y2004,
              arrayCrimes[5].y2005,
              arrayCrimes[5].y2006,
              arrayCrimes[5].y2007,
              arrayCrimes[5].y2008,
              arrayCrimes[5].y2009,
              arrayCrimes[5].y2010,
              arrayCrimes[5].y2011,
              arrayCrimes[5].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(14, 97, 249, 0.7)"
          },
          {
            label: arrayCrimes[6].country,
            data: [
              arrayCrimes[6].y2002,
              arrayCrimes[6].y2003,
              arrayCrimes[6].y2004,
              arrayCrimes[6].y2005,
              arrayCrimes[6].y2006,
              arrayCrimes[6].y2007,
              arrayCrimes[6].y2008,
              arrayCrimes[6].y2009,
              arrayCrimes[6].y2010,
              arrayCrimes[6].y2011,
              arrayCrimes[6].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(54, 45, 12, 0.4)"
          },
          {
            label: arrayCrimes[7].country,
            data: [
              arrayCrimes[7].y2002,
              arrayCrimes[7].y2003,
              arrayCrimes[7].y2004,
              arrayCrimes[7].y2005,
              arrayCrimes[7].y2006,
              arrayCrimes[7].y2007,
              arrayCrimes[7].y2008,
              arrayCrimes[7].y2009,
              arrayCrimes[7].y2010,
              arrayCrimes[7].y2011,
              arrayCrimes[7].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(46, 170, 82, 0.5)"
          },
          {
            label: arrayCrimes[8].country,
            data: [
              arrayCrimes[8].y2002,
              arrayCrimes[8].y2003,
              arrayCrimes[8].y2004,
              arrayCrimes[8].y2005,
              arrayCrimes[8].y2006,
              arrayCrimes[8].y2007,
              arrayCrimes[8].y2008,
              arrayCrimes[8].y2009,
              arrayCrimes[8].y2010,
              arrayCrimes[8].y2011,
              arrayCrimes[8].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"brgba(72, 27, 139, 0.9)"
          },
          {
            label: arrayCrimes[9].country,
            data: [
              arrayCrimes[9].y2002,
              arrayCrimes[9].y2003,
              arrayCrimes[9].y2004,
              arrayCrimes[9].y2005,
              arrayCrimes[9].y2006,
              arrayCrimes[9].y2007,
              arrayCrimes[9].y2008,
              arrayCrimes[9].y2009,
              arrayCrimes[9].y2010,
              arrayCrimes[9].y2011,
              arrayCrimes[9].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(175, 94, 55, 0.9)"
          },
          {
            label: arrayCrimes[10].country,
            data: [
              arrayCrimes[10].y2002,
              arrayCrimes[10].y2003,
              arrayCrimes[10].y2004,
              arrayCrimes[10].y2005,
              arrayCrimes[10].y2006,
              arrayCrimes[10].y2007,
              arrayCrimes[10].y2008,
              arrayCrimes[10].y2009,
              arrayCrimes[10].y2010,
              arrayCrimes[10].y2011,
              arrayCrimes[10].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(2, 122, 142, 0.2)"
          },
          {
            label: arrayCrimes[11].country,
            data: [
              arrayCrimes[11].y2002,
              arrayCrimes[11].y2003,
              arrayCrimes[11].y2004,
              arrayCrimes[11].y2005,
              arrayCrimes[11].y2006,
              arrayCrimes[11].y2007,
              arrayCrimes[11].y2008,
              arrayCrimes[11].y2009,
              arrayCrimes[11].y2010,
              arrayCrimes[11].y2011,
              arrayCrimes[11].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(125, 144, 74, 1)"
          },
          {
            label: arrayCrimes[12].country,
            data: [
              arrayCrimes[12].y2002,
              arrayCrimes[12].y2003,
              arrayCrimes[12].y2004,
              arrayCrimes[12].y2005,
              arrayCrimes[12].y2006,
              arrayCrimes[12].y2007,
              arrayCrimes[12].y2008,
              arrayCrimes[12].y2009,
              arrayCrimes[12].y2010,
              arrayCrimes[12].y2011,
              arrayCrimes[12].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(250, 211, 219, 1)"
          },
          {
            label: arrayCrimes[13].country,
            data: [
              arrayCrimes[13].y2002,
              arrayCrimes[13].y2003,
              arrayCrimes[13].y2004,
              arrayCrimes[13].y2005,
              arrayCrimes[13].y2006,
              arrayCrimes[13].y2007,
              arrayCrimes[13].y2008,
              arrayCrimes[13].y2009,
              arrayCrimes[13].y2010,
              arrayCrimes[13].y2011,
              arrayCrimes[13].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(114, 65, 73, 0.5)"
          },
          {
            label: arrayCrimes[14].country,
            data: [
              arrayCrimes[14].y2002,
              arrayCrimes[14].y2003,
              arrayCrimes[14].y2004,
              arrayCrimes[14].y2005,
              arrayCrimes[14].y2006,
              arrayCrimes[14].y2007,
              arrayCrimes[14].y2008,
              arrayCrimes[14].y2009,
              arrayCrimes[14].y2010,
              arrayCrimes[14].y2011,
              arrayCrimes[14].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(158, 171, 93, 0.7)"
          },
          {
            label: arrayCrimes[15].country,
            data: [
              arrayCrimes[15].y2002,
              arrayCrimes[15].y2003,
              arrayCrimes[15].y2004,
              arrayCrimes[15].y2005,
              arrayCrimes[15].y2006,
              arrayCrimes[15].y2007,
              arrayCrimes[15].y2008,
              arrayCrimes[15].y2009,
              arrayCrimes[15].y2010,
              arrayCrimes[15].y2011,
              arrayCrimes[15].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(110, 214, 74, 0.6)"
          },
          {
            label: arrayCrimes[16].country,
            data: [
              arrayCrimes[16].y2002,
              arrayCrimes[16].y2003,
              arrayCrimes[16].y2004,
              arrayCrimes[16].y2005,
              arrayCrimes[16].y2006,
              arrayCrimes[16].y2007,
              arrayCrimes[16].y2008,
              arrayCrimes[16].y2009,
              arrayCrimes[16].y2010,
              arrayCrimes[16].y2011,
              arrayCrimes[16].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(160, 40, 72, 1)"
          },
          {
            label: arrayCrimes[17].country,
            data: [
              arrayCrimes[17].y2002,
              arrayCrimes[17].y2003,
              arrayCrimes[17].y2004,
              arrayCrimes[17].y2005,
              arrayCrimes[17].y2006,
              arrayCrimes[17].y2007,
              arrayCrimes[17].y2008,
              arrayCrimes[17].y2009,
              arrayCrimes[17].y2010,
              arrayCrimes[17].y2011,
              arrayCrimes[17].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(189, 57, 187, 0.2)"
          },
          {
            label: arrayCrimes[18].country,
            data: [
              arrayCrimes[18].y2002,
              arrayCrimes[18].y2003,
              arrayCrimes[18].y2004,
              arrayCrimes[18].y2005,
              arrayCrimes[18].y2006,
              arrayCrimes[18].y2007,
              arrayCrimes[18].y2008,
              arrayCrimes[18].y2009,
              arrayCrimes[18].y2010,
              arrayCrimes[18].y2011,
              arrayCrimes[18].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(34, 225, 62, 0.9)"
          },
          {
            label: arrayCrimes[19].country,
            data: [
              arrayCrimes[19].y2002,
              arrayCrimes[19].y2003,
              arrayCrimes[19].y2004,
              arrayCrimes[19].y2005,
              arrayCrimes[19].y2006,
              arrayCrimes[19].y2007,
              arrayCrimes[19].y2008,
              arrayCrimes[19].y2009,
              arrayCrimes[19].y2010,
              arrayCrimes[19].y2011,
              arrayCrimes[19].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(229, 175, 61, 0.9)"
          },
          {
            label: arrayCrimes[20].country,
            data: [
              arrayCrimes[20].y2002,
              arrayCrimes[20].y2003,
              arrayCrimes[20].y2004,
              arrayCrimes[20].y2005,
              arrayCrimes[20].y2006,
              arrayCrimes[20].y2007,
              arrayCrimes[20].y2008,
              arrayCrimes[20].y2009,
              arrayCrimes[20].y2010,
              arrayCrimes[20].y2011,
              arrayCrimes[20].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(252, 15, 5, 0.9)"
          },
          {
            label: arrayCrimes[21].country,
            data: [
              arrayCrimes[21].y2002,
              arrayCrimes[21].y2003,
              arrayCrimes[21].y2004,
              arrayCrimes[21].y2005,
              arrayCrimes[21].y2006,
              arrayCrimes[21].y2007,
              arrayCrimes[21].y2008,
              arrayCrimes[21].y2009,
              arrayCrimes[21].y2010,
              arrayCrimes[21].y2011,
              arrayCrimes[21].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(217, 217, 206, 1)"
          },
          {
            label: arrayCrimes[22].country,
            data: [
              arrayCrimes[22].y2002,
              arrayCrimes[22].y2003,
              arrayCrimes[22].y2004,
              arrayCrimes[22].y2005,
              arrayCrimes[22].y2006,
              arrayCrimes[22].y2007,
              arrayCrimes[22].y2008,
              arrayCrimes[22].y2009,
              arrayCrimes[22].y2010,
              arrayCrimes[22].y2011,
              arrayCrimes[22].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(152, 134, 185, 0.9)"
          },
          {
            label: arrayCrimes[23].country,
            data: [
              arrayCrimes[23].y2002,
              arrayCrimes[23].y2003,
              arrayCrimes[23].y2004,
              arrayCrimes[23].y2005,
              arrayCrimes[23].y2006,
              arrayCrimes[23].y2007,
              arrayCrimes[23].y2008,
              arrayCrimes[23].y2009,
              arrayCrimes[23].y2010,
              arrayCrimes[23].y2011,
              arrayCrimes[23].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(224, 115, 94, 0.8)"
          },
          {
            label: arrayCrimes[24].country,
            data: [
              arrayCrimes[24].y2002,
              arrayCrimes[24].y2003,
              arrayCrimes[24].y2004,
              arrayCrimes[24].y2005,
              arrayCrimes[24].y2006,
              arrayCrimes[24].y2007,
              arrayCrimes[24].y2008,
              arrayCrimes[24].y2009,
              arrayCrimes[24].y2010,
              arrayCrimes[24].y2011,
              arrayCrimes[24].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(245, 226, 8, 0)"
          },
          {
            label: arrayCrimes[25].country,
            data: [
              arrayCrimes[25].y2002,
              arrayCrimes[25].y2003,
              arrayCrimes[25].y2004,
              arrayCrimes[25].y2005,
              arrayCrimes[25].y2006,
              arrayCrimes[25].y2007,
              arrayCrimes[25].y2008,
              arrayCrimes[25].y2009,
              arrayCrimes[25].y2010,
              arrayCrimes[25].y2011,
              arrayCrimes[25].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(113, 246, 194, 0.8)"
          },
          {
            label: arrayCrimes[26].country,
            data: [
              arrayCrimes[26].y2002,
              arrayCrimes[26].y2003,
              arrayCrimes[26].y2004,
              arrayCrimes[26].y2005,
              arrayCrimes[26].y2006,
              arrayCrimes[26].y2007,
              arrayCrimes[26].y2008,
              arrayCrimes[26].y2009,
              arrayCrimes[26].y2010,
              arrayCrimes[26].y2011,
              arrayCrimes[26].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(153, 179, 50, 0.2)"
          },
          {
            label: arrayCrimes[27].country,
            data: [
              arrayCrimes[27].y2002,
              arrayCrimes[27].y2003,
              arrayCrimes[27].y2004,
              arrayCrimes[27].y2005,
              arrayCrimes[27].y2006,
              arrayCrimes[27].y2007,
              arrayCrimes[27].y2008,
              arrayCrimes[27].y2009,
              arrayCrimes[27].y2010,
              arrayCrimes[27].y2011,
              arrayCrimes[27].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"black"
          },
          {
            label: arrayCrimes[28].country,
            data: [
              arrayCrimes[28].y2002,
              arrayCrimes[28].y2003,
              arrayCrimes[28].y2004,
              arrayCrimes[28].y2005,
              arrayCrimes[28].y2006,
              arrayCrimes[28].y2007,
              arrayCrimes[28].y2008,
              arrayCrimes[28].y2009,
              arrayCrimes[28].y2010,
              arrayCrimes[28].y2011,
              arrayCrimes[28].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(223, 149, 241, 0.9)"
          },
          {
            label: arrayCrimes[29].country,
            data: [
              arrayCrimes[29].y2002,
              arrayCrimes[29].y2003,
              arrayCrimes[29].y2004,
              arrayCrimes[29].y2005,
              arrayCrimes[29].y2006,
              arrayCrimes[29].y2007,
              arrayCrimes[29].y2008,
              arrayCrimes[29].y2009,
              arrayCrimes[29].y2010,
              arrayCrimes[29].y2011,
              arrayCrimes[29].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(61, 102, 15, 0.9)"
          },
          {
            label: arrayCrimes[30].country,
            data: [
              arrayCrimes[30].y2002,
              arrayCrimes[30].y2003,
              arrayCrimes[30].y2004,
              arrayCrimes[30].y2005,
              arrayCrimes[30].y2006,
              arrayCrimes[30].y2007,
              arrayCrimes[30].y2008,
              arrayCrimes[30].y2009,
              arrayCrimes[30].y2010,
              arrayCrimes[30].y2011,
              arrayCrimes[30].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(49, 13, 33, 0.9)"
          },
          {
            label: arrayCrimes[31].country,
            data: [
              arrayCrimes[31].y2002,
              arrayCrimes[31].y2003,
              arrayCrimes[31].y2004,
              arrayCrimes[31].y2005,
              arrayCrimes[31].y2006,
              arrayCrimes[31].y2007,
              arrayCrimes[31].y2008,
              arrayCrimes[31].y2009,
              arrayCrimes[31].y2010,
              arrayCrimes[31].y2011,
              arrayCrimes[31].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(234, 119, 77, 0.8)"
          },
          {
            label: arrayCrimes[32].country,
            data: [
              arrayCrimes[32].y2002,
              arrayCrimes[32].y2003,
              arrayCrimes[32].y2004,
              arrayCrimes[32].y2005,
              arrayCrimes[32].y2006,
              arrayCrimes[32].y2007,
              arrayCrimes[32].y2008,
              arrayCrimes[32].y2009,
              arrayCrimes[32].y2010,
              arrayCrimes[32].y2011,
              arrayCrimes[32].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(155, 226, 58, 1)"
          },
          {
            label: arrayCrimes[33].country,
            data: [
              arrayCrimes[33].y2002,
              arrayCrimes[33].y2003,
              arrayCrimes[33].y2004,
              arrayCrimes[33].y2005,
              arrayCrimes[33].y2006,
              arrayCrimes[33].y2007,
              arrayCrimes[33].y2008,
              arrayCrimes[33].y2009,
              arrayCrimes[33].y2010,
              arrayCrimes[33].y2011,
              arrayCrimes[33].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(52, 168, 20, 1)"
          },
          {
            label: arrayCrimes[34].country,
            data: [
              arrayCrimes[34].y2002,
              arrayCrimes[34].y2003,
              arrayCrimes[34].y2004,
              arrayCrimes[34].y2005,
              arrayCrimes[34].y2006,
              arrayCrimes[34].y2007,
              arrayCrimes[34].y2008,
              arrayCrimes[34].y2009,
              arrayCrimes[34].y2010,
              arrayCrimes[34].y2011,
              arrayCrimes[34].y2012,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(246, 199, 100, 0.8)"
          },
        ],
      },
      options: {
        animations: {
            tension: 0,
          },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
};

xhttp.open("GET", " crimes.json", true);
xhttp.send();


var xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function() {  
  if (this.readyState == 4 && this.status == 200) { 
    let arrayHomicides = JSON.parse(xhttp1.responseText) ;
    console.log(arrayHomicides);


    const ctx1 = $("#homicides");
    const myChart1 = new Chart(ctx1, {  
      type: "line",
      data: {
        labels: [
          "2007 -2009",
          "2010 - 2012",
        ],
        datasets: [
          {
            label: arrayHomicides[0].c,
            data: [
              arrayHomicides[0].y7,
              arrayHomicides[0].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(39, 140, 201, 0.7)"
          },
          {
            label: arrayHomicides[1].c,
            data: [
              arrayHomicides[1].y7,
              arrayHomicides[1].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(226, 57, 16, 0.1)"
          },
          {
            label: arrayHomicides[2].c,
            data: [
              arrayHomicides[2].y7,
              arrayHomicides[2].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(121, 208, 151, 0.1)"
          },
          {
            label: arrayHomicides[3].c,
            data: [
              arrayHomicides[3].y7,
              arrayHomicides[3].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(141, 31, 161, 0.9)"
          },
          {
            label: arrayHomicides[4].c,
            data: [
              arrayHomicides[4].y7,
              arrayHomicides[4].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(206, 45, 113, 0.6)"
          },
          {
            label: arrayHomicides[5].c,
            data: [
              arrayHomicides[5].y7,
              arrayHomicides[5].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(14, 97, 249, 0.7)"
          },
          {
            label: arrayHomicides[6].c,
            data: [
              arrayHomicides[6].y7,
              arrayHomicides[6].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(54, 45, 12, 0.4)"
          },
          {
            label: arrayHomicides[7].c,
            data: [
              arrayHomicides[7].y7,
              arrayHomicides[7].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(46, 170, 82, 0.5)"
          },
          {
            label: arrayHomicides[8].c,
            data: [
              arrayHomicides[8].y7,
              arrayHomicides[8].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"brgba(72, 27, 139, 0.9)"
          },
          {
            label: arrayHomicides[9].c,
            data: [
              arrayHomicides[9].y7,
              arrayHomicides[9].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(175, 94, 55, 0.9)"
          },
          {
            label: arrayHomicides[10].c,
            data: [
              arrayHomicides[10].y7,
              arrayHomicides[10].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(2, 122, 142, 0.2)"
          },
          {
            label: arrayHomicides[11].c,
            data: [
              arrayHomicides[11].y7,
              arrayHomicides[11].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(125, 144, 74, 1)"
          },
          {
            label: arrayHomicides[12].c,
            data: [
              arrayHomicides[12].y7,
              arrayHomicides[12].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(250, 211, 219, 1)"
          },
          {
            label: arrayHomicides[13].c,
            data: [
              arrayHomicides[13].y7,
              arrayHomicides[13].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(114, 65, 73, 0.5)"
          },
          {
            label: arrayHomicides[14].c,
            data: [
              arrayHomicides[14].y7,
              arrayHomicides[14].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(158, 171, 93, 0.7)"
          },
          {
            label: arrayHomicides[15].c,
            data: [
              arrayHomicides[15].y7,
              arrayHomicides[15].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(110, 214, 74, 0.6)"
          },
          {
            label: arrayHomicides[16].c,
            data: [
              arrayHomicides[16].y7,
              arrayHomicides[16].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(160, 40, 72, 1)"
          },
          {
            label: arrayHomicides[17].c,
            data: [
              arrayHomicides[17].y7,
              arrayHomicides[17].y10,,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(189, 57, 187, 0.2)"
          },
          {
            label: arrayHomicides[18].c,
            data: [
              arrayHomicides[18].y7,
              arrayHomicides[18].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(34, 225, 62, 0.9)"
          },
          {
            label: arrayHomicides[19].c,
            data: [
              arrayHomicides[19].y7,
              arrayHomicides[19].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(229, 175, 61, 0.9)"
          },
          {
            label: arrayHomicides[20].c,
            data: [
              arrayHomicides[20].y7,
              arrayHomicides[20].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(252, 15, 5, 0.9)"
          },
          {
            label: arrayHomicides[21].c,
            data: [
              arrayHomicides[21].y7,
              arrayHomicides[21].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(217, 217, 206, 1)"
          },
          {
            label: arrayHomicides[22].c,
            data: [
              arrayHomicides[22].y7,
              arrayHomicides[22].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(152, 134, 185, 0.9)"
          },
          {
            label: arrayHomicides[23].c,
            data: [
              arrayHomicides[23].y7,
              arrayHomicides[23].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(224, 115, 94, 0.8)"
          },
          {
            label: arrayHomicides[24].c,
            data: [
              arrayHomicides[24].y7,
              arrayHomicides[24].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(245, 226, 8, 0)"
          },
          {
            label: arrayHomicides[25].c,
            data: [
              arrayHomicides[25].y7,
              arrayHomicides[25].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(113, 246, 194, 0.8)"
          },
          {
            label: arrayHomicides[26].c,
            data: [
              arrayHomicides[26].y7,
              arrayHomicides[26].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(153, 179, 50, 0.2)"
          },
          {
            label: arrayHomicides[27].c,
            data: [
              arrayHomicides[27].y7,
              arrayHomicides[27].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"black"
          },
          {
            label: arrayHomicides[28].c,
            data: [
              arrayHomicides[28].y7,
              arrayHomicides[28].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(223, 149, 241, 0.9)"
          },
          {
            label: arrayHomicides[29].c,
            data: [
              arrayHomicides[29].y7,
              arrayHomicides[29].y10,
            ],
            borderColor: "black",
            borderWidth: 2,
            backgroundColor:"rgba(61, 102, 15, 0.9)"
          },
        ],
      },
      options: {
        animations: {
            tension: 0,
          },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }
};

xhttp1.open("GET", "homicides.json", true);
xhttp1.send();