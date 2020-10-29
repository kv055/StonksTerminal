//Config import
import React from 'react';


//-------------------------------------------------
//Components import
import Positions from './Components/positions.jsx';
import Chart from './Components/chart.jsx';
import NewPosition from './Components/NewPositions.jsx'


//-------------------------------------------------
class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      isLoading: false,
      PositionsFromApi : [],
      btcUsdChart: [],
      btcUsdNow: null
     }
  }
componentDidMount(){
  this.setState({isLoading: true});
  let today = new Date().toISOString().split("T")[0];

  fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{mode: 'cors'})
    .then(response => response.json())
    .then(data => this.setState({ 
      btcUsdNow: data.bpi.USD.rate_float, 
      
    }));
    
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2014-07-01&end='+today,{mode: 'cors'})
  .then(response => response.json())
  .then(data => 
    this.setState({ 
    btcUsdChart: data.bpi

  }));
  fetch('http://localhost:3002/antwort2')
  .then(response => response.json())
  .then(data => 

    this.setState({ 
    PositionsFromApi: data, 
    isLoading: false 

  }));

}  


  render() { 
    console.log(this.state.PositionsFromApi);
    
    //------------------------------------------


   

    

    let loadingPositionz = this.state.isLoading === true ? <p>Lädt</p> :       
    this.state.PositionsFromApi.map(details => 
      {return (<Positions 
        Datum={details.Datum}
        TradeCollateral={details.TradeCollateral}
        AccountBallance={details.AccountBallance}
        Faktor={details.Faktor}
        Einstiegspreis={details.Einstiegspreis}
        StatusAktiv={details.StatusAktiv}
      />)}
      );


    let loadingChart= this.state.isLoading === true ? <p>Lädt</p>  : <Chart dten={this.state.btcUsdChart}/>;

    return (
      <div>
      {/* {loadingChart} */}

      <Chart vis={this.state.btcUsdChart} />

      {loadingPositionz}

      {/* <Positions 
        Datum={this.state.PositionsFromApi.Datum}
        TradeCollateral={this.state.PositionsFromApi.TradeCollateral}
        AccountBallance={this.state.PositionsFromApi.AccountBallance}
        Faktor={this.state.PositionsFromApi.Faktor}
        Einstiegspreis={this.state.PositionsFromApi.Einstiegspreis}
        StatusAktiv={this.state.PositionsFromApi.StatusAktiv}
      
      /> */}

      <NewPosition></NewPosition>

      {/* <CalculatedPosition 
          // tradecollateral={this.state.Positions.TradeCollateral}
          // accountballance = {this.state.Positions.AccountBallance}
          // faktor = {this.state.Positions.Faktor}
          // einstiegspreis = {this.state.Positions.Einstiegspreis}
          //  // statusactive = {props.statusactive}
          // price = {this.state.btcUsdNow}
        /> */}
    </div>
      );
  }
}
 
export default App;

