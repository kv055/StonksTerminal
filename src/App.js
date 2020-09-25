//Config import
import React from 'react';
import './App.css';

//-------------------------------------------------
//Components import
import Positions from './Components/positions.jsx';
// import Chart from './Components/chart.jsx';

//-------------------------------------------------
//Data Source
import obj from './Data/data.js';


//-------------------------------------------------

function App() {
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
        

      </div>
    );
}



//-------------------------------------------------
//Export
export default App;
