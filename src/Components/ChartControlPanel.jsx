
import React from 'react';
 
class ChartControlPanel extends React.Component {
  
  constructor() {
    super();
 
    this.state = {
      isLoading: false,
      btcUsdNow: []
    };
  }
 
  componentDidMount() {
  }
  
  render() {

        return (
         <div>
            <p>Datepicker: StartDate/EndDate (im ISO Format (YYYY-MM-DD)eingeben. BSP: 2020-12-13)</p>
            <input id="1" type="text" name="StartDate" value=""></input>
            <p>/</p>
            <input id="1" type="text" name="EndDate" value=""></input>
            <br></br>
            <br></br>
            <button id="3" type="button" name="button">TEST</button>
          </div>
        )
      }
}
 
export default ChartControlPanel;
