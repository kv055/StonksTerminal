//Config import
import React from 'react';
import './App.css';

//-------------------------------------------------
//Components import
import positions from './Components/positions';
import chart from './Components/chart';

//-------------------------------------------------
//Data Source

//-------------------------------------------------

function App() {
  
  let Chartdata;
    return (
      <div className="App">
        <chart />
        <p>Dateselector</p>
      </div>
    );
  
  let PositionData;
  const PositionSections = PositionData.map(detail =>
    {return (<positions Position={detail}/>)})
  
  return (
    <div className="App">
      {PositionSections}
    </div>
  );
}



//-------------------------------------------------
//Export
export default App;
