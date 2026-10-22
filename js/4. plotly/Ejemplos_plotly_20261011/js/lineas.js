
    // parse the date / time
var parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S");


d3.csv("https://raw.githubusercontent.com/AJM05/Bdata3-Visualizaci-n-datos/main/AENA.csv", function(error, data) {

    if (error) throw error;

    // format the data
    data.forEach(function(d) {
        d.date = parseTime(d.date);
        d.high = +d.high;
        d.low = +d.low;
    });

    data.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
    
    function unpack(data, key) {
        return data.map(function(row) { return row[key]; });
      };


    console.log(d3.min(unpack(data,"date")))

    var serie_high = {
        x: unpack(data,"date"),
        y: unpack(data,"high"),
        type: 'scatter',
        name: "high",
        line: {color: '#8b61ca'}
      };
      
      var serie_low = {
        x: unpack(data,"date"),
        y: unpack(data,"low"),
        type: 'scatter',
        name: "low",
        line: {color: '#07c0e4'}
      };
      
      var datos = [serie_high, serie_low];

      var layout = {
          title: "dos líneas",
          width: 800,
          height: 500,
          xaxis:{
              title: "unas fechas",
              rangeselector:{buttons:[
                  {
                      count: 1,
                      label: '1m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 6,
                      label: '6m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {step: 'all'}
              ]},
              rangeslider: {range: [d3.min(unpack(data,"date")), d3.max(unpack(data,"date"))]},
              type: 'date'
          },
          yaxis:{
            title: "unos euros",
        },
        legend:{
            y:0.75,
            font: {
                size:12
            }
        },
        annotations:[{
            x: "2021-05-01",
            y:150,
            xref:"x",
            yref: "y",
            text: "anoto cosas"
        }]

      }
      
      Plotly.newPlot('div', datos,layout);

})