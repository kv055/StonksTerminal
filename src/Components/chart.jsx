
import React from 'react';
import Plot from 'react-plotly.js';

function App(props) {

let price = [];
let dates = [];

function todisplay (chartdata){
    let tempentries = Object.entries(chartdata);

    for (const element of tempentries) {
      price.push(element[1]);
      dates.push(element[0]);
    };
  };
todisplay(props.vis)


 let datensets = [
    {
        name: 'BTC/USD',
        x: dates,
        y: price,
        type: 'scatter',
        mode: 'lines'        
    }  , 
    {
        x: dates,
        y: [20, 14, 23],
        name: 'Position',
        type: 'bar'},
    //Add more Datasets here 
]
return (
  <div className="App">
    <header className="App-header">
      <Plot
       data={datensets}
    layout= 
{{
    title: 'BtcUsd',
    xaxis: {
    autorange: true,
    // range: ['2015-02-17', '2017-02-16'],
    rangeselector: {buttons: [
        {
            count: 1,
            label: '1m',
            step: 'month',
            stepmode: 'backward'
        },
        {
            count: 3,
            label: '3m',
            step: 'month',
            stepmode: 'backward'
        },
        {
            count: 6,
            label: '6m',
            step: 'month',
            stepmode: 'backward'
        },
        {
            count: 1,
            label: '1y',
            step: 'year',
            stepmode: 'backward'
        },
        {
            count: 3,
            label: '3y',
            step: 'year',
            stepmode: 'backward'
        },
        {
            count: 5,
            label: '5y',
            step: 'year',
            stepmode: 'backward'
        },
        {step: 'all'}
        ]},
    rangeslider: {range: ['2015-02-17', '2017-02-16']},
    type: 'date'
    },
    yaxis: {
    autorange: true,

    type: 'linear'
    }}
}
/>
    </header>
  </div>
);



  }





export default App;
