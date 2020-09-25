import React from 'react';
import {Line} from 'react-chartjs-2';

class chart extends React.Component(){

    constructor(){
        super();

        this.state = {
            
            data: {
                labels: ["2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07"], //Xachse
                datasets: [
                    {
            
                  data: [9153.95,9199.875,9094.955,9083.395,9075.3125,9203.25,9265.375], //Yachse //Data als Array
                  fill: false,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
            
            
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
            
                  ],
                  borderWidth: 2 //Breite der Linie
            
                },
                //--------------------------------------------------
                //Weiteres Dataset hinzufügen

                //     {
                //       data: Liquidationlevel, //Yachse //Data als Array
                //       fill: false,
                //       backgroundColor: [
                //         'rgba(50, 50, 132, 0.2)',
                
                
                //       ],
                //       borderColor: [
                //         'rgba(206, 88, 132, 1)',
                
                //       ],
                //       borderWidth: 2 //Breite der Linie
                
                // //--------------------------------------------------
                //     }
                ]
            },

            options: {
                scales: {
                  yAxes: [{
                    type: 'logarithmic',
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
            }
        };
    }

    // ComponentDidMount(){

    // }

    render(){

        //TestData

        // let Xaxe = ["2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07"];
        // let Yaxe = [9153.95,9199.875,9094.955,9083.395,9075.3125,9203.25,9265.375];

        // this.setState({
        //     data.labels : Xaxe
        // });


      return(
        <div>
            <Line>
                data={{
                    labels: ["2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07"], //Xachse
                    datasets: [
                        {
                
                        data: [9153.95,9199.875,9094.955,9083.395,9075.3125,9203.25,9265.375], //Yachse //Data als Array
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
                            type: 'logarithmic',
                            ticks: {
                            beginAtZero: true
                            }
                        }]
                    }
            }}
            </Line>
        </div>
      )

    }

}


export default chart;