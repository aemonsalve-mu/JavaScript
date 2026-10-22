
    d3.csv("https://raw.githubusercontent.com/AJM05/Bdata3-Visualizaci-n-datos/main/AENA.csv", function(error, datos) {
    
        if (error) throw error;
    
        // format the data
        datos.forEach(function(d) {
            d.high = +d.high;
            d.low = +d.low;
        });

        function unpack(datos, key) {
            return datos.map(function(row) { return row[key]; });
          }

        var x = unpack(datos, 'high')
        var x1 = unpack(datos, 'low')
    
        var trace = {
            x: x,
            name:"high",
            type: 'histogram',
            opacity: 0.5,
            marker: {
            color: 'red',
            }
          };

          var trace2 = {
            x: x1,
            name:"low",
            type: 'histogram',
            opacity: 0.5,
            marker: {
            color: 'blue',
            }
          };
        
        var layout = {
            width: 800,
            height: 500,
            barmode: "overlay" //stack
        }
        var data = [trace,trace2];
        Plotly.newPlot('div', data,layout);
    })