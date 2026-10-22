var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S");


Plotly.d3.csv("https://raw.githubusercontent.com/AJM05/Bdata3-Visualizaci-n-datos/main/AENA.csv", function(err, datos){

// format the data
datos.forEach(function(d) {
    d.date = parseTime(d.date);
    d.high = +d.high;
    d.low = +d.low;
});    

datos.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
    });

  function unpack(datos, key) {
  return datos.map(function(row) { return row[key]; });
}

  var frames = []
  var x = unpack(datos, 'date')
  var y = unpack(datos, 'high')
  var x2 = unpack(datos, 'date')
  var y2 = unpack(datos, 'low')

 const margen_top = d3.max(y) + 20
 const margen_bot = d3.min(y2) - 20
  

  var n = x.length

  //console.log(d3.max(x))

  for (var i = 0; i < n; i+=3) {
      pos = i/3; 
    frames[pos] = {data: [{x: [], y: []}, {x: [], y: []}]}
    frames[pos].data[1].x = x.slice(0, i+1);
    frames[pos].data[1].y = y.slice(0, i+1);
    frames[pos].data[0].x = x2.slice(0, i+1);
    frames[pos].data[0].y = y2.slice(0, i+1);
  }
  
  var trace2 = {
    type: "scatter",
    mode: "lines",
    name: 'high',
    fill: 'tonexty',
    x: frames[5].data[1].x,
    y: frames[5].data[1].y,
    line: {color: '#8b61ca'}
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    name: 'low',
    x: frames[5].data[0].x,
    y: frames[5].data[0].y,
    line: {color: '#07c0e4'}
  }

  var data = [trace1,trace2]; 
    
  var layout = {
    title: 'lineas dinamicas',
    xaxis: {
      range: [d3.min(x), d3.max(x)],
      showgrid: true
    },
    yaxis: {
      range: [margen_bot, margen_top],
      showgrid: true
    },
    legend: {
      orientation: 'h',
      x: 0.5,
      y: 1.2,
      xanchor: 'center'
    },
    updatemenus: [{
      x: 0.5,
      y: 0,
      yanchor: "top",
      xanchor: "center",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 50, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 0,
          },
          frame: {
            duration: 40,
            redraw: false
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0,
              redraw: false
            }
          }
        ],
        label: "Pause"
      }]
    }]
  };

    Plotly.newPlot('div', data, layout).then(function() {
    Plotly.addFrames('div', frames);
  });
})