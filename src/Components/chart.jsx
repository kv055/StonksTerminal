import React from 'react';
import {Line} from 'react-chartjs-2';

class App extends React.Component {
  
    constructor(props) {
      super();
   
      this.state = {
        isLoading: false,
        btcUsdChart: props.Daten
      };
    }
  
    componentDidMount() {

    }
    
    render() {
  
      
      console.log(this.state.btcUsdChart);
  
          return (
            <div className="chart">
            <Line   data={{
                    labels: this.state.btcUsdChart[0], //Xachse
                    datasets: [
                        {
                
                        data: this.state.btcUsdChart[1], //Yachse //Data als Array
                        fill: false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                    
                    
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                    
                        ],
                        borderWidth: 2 //Breite der Linie
                    
                        }
                    ]
                }}

                options={{
                    scales: {
                        yAxes: [{
                            type: 'linear',
                            ticks: {
                            beginAtZero: false
                            }
                        }]
                    }
                }
                }/>
      
            
        </div>
          )
        }
  }
   
  export default App;
  

