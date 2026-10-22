var data = [{
    type: "pie",
    values: [8, 9, 7, 6],
    labels: ["Humlides", "Bestmarks", "Secta del Biri", "Genuine Data"],
    textinfo: "label+percent",
    textposition: "outside",
    marker:{
        colors:["#DB747A","#8F5356","#69DBC6","#8F6836"]
    },
    automargin: true
  }]
  
  var layout = {
    height: 400,
    width: 400,
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    showlegend: false
    }
  
  Plotly.newPlot('div', data, layout)