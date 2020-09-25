import React from 'react';
import {Line} from 'react-chartjs-2';



function chart(props){

    let  Xaxe = props.Xachse;
    let Yaxe = props.Yachse;

      return(
        <div className="chart">
            <Line   data={{
                    labels: Xaxe, //Xachse
                    datasets: [
                        {
                
                        data: Yaxe, //Yachse //Data als Array
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

// }


export default chart;