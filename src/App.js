//Config import
import React from 'react';
import './App.css';

//-------------------------------------------------
//Components import
import Positions from './Components/positions.jsx';
import Chart from './Components/chart.jsx';

//-------------------------------------------------
//Data Source
import obj from './Data/data.js';
import chartdata from './Data/chartdata.js'


//-------------------------------------------------

function App() {

  console.log(chartdata);


  const Positionz = obj.map(details => 
    {return (<Positions 
      Datum={details.Datum}
      TradeCollateral={details.TradeCollateral}
      AccountBallance={details.AccountBallance}
      Faktor={details.Faktor}
      Einstiegspreis={details.Einstiegspreis}
      StatusAktiv={details.StatusAktiv}
    />)}
    )



    return (
      <div>
        {Positionz}
        <Chart 
          Xachse= {chartdata[0]}
          Yachse= {chartdata[1]}
        />

      </div>
    );
}



//-------------------------------------------------
//Export
export default App;
