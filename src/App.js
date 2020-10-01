//Config import
import React from 'react';
import './App.css';

//-------------------------------------------------
//Components import
import Positions from './Components/positions.jsx';
import Chart from './Components/chart.jsx';
import ChartControlPanel from './Components/ChartControlPanel.jsx';
import NewPosition from './Components/NewPositions.jsx'

//-------------------------------------------------
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      isLoading: false,
      Positions : [],
      btcUsdChart: []
     }
  }
componentDidMount(){
  this.setState({isLoading: true});
      
  // fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{mode: 'cors'})
  //   .then(response => response.json())
  //   .then(data => this.setState({ 
  //     btcUsdNow: data.bpi.USD.rate_float, 
      
  //   }));
    
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2015-07-01&end=2020-07-07',{mode: 'cors'})
  .then(response => response.json())
  .then(data => 

    this.setState({ 
    btcUsdChart: data.bpi

  }));
  fetch('http://localhost:3002/antwort2')
  .then(response => response.json())
  .then(data => 

    this.setState({ 
    Positions: data, 
    isLoading: false 

  }));

}  


  render() { 
    
    
    
    const Positionz = 
      this.state.Positions.map(details => 
      {return (<Positions 
        Datum={details.Datum}
        TradeCollateral={details.TradeCollateral}
        AccountBallance={details.AccountBallance}
        Faktor={details.Faktor}
        Einstiegspreis={details.Einstiegspreis}
        StatusAktiv={details.StatusAktiv}
      />)}
      )

    let xxx = [[],[]];
    function todisplay (chartdata){
      let tempentries = Object.entries(chartdata);

      for (const element of tempentries) {
        xxx[1].push(element[1]);
        xxx[0].push(element[0]);
      };

      

    };
    todisplay(this.state.btcUsdChart)
   

    

    // let loadingPositionz = this.state.isLoading === true ? <p>Lädt</p> : {Positionz};
    let loadingChart= this.state.isLoading === true ? <p>Lädt</p>  : <Chart Daten={xxx}/>;

    return (
      <div>
      {loadingChart}
      {/* <ChartControlPanel /> */}
      {/* {loadingPositionz} */}
      {/* <NewPosition></NewPosition> */}
    </div>
      );
  }
}
 
export default App;

