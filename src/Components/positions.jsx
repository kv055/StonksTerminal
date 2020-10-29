import React from 'react';
import CalculatedPosition from './CalculatedPosition';

// function positions(props){
//     let Status = props.StatusAktiv;
//     let indikator;
//     if (Status === true) {
//         indikator = "green"}
//     else
//        { indikator = "red"
//     }

//     //Conditional Rendering Variable für die Calculated Position bauen und per event listener triggern 
//     let eventhandler = false;
//     let toggleCalculatedPosition = eventhandler = true ? <CalculatedPosition 
//         Tradecollateral={props.TradeCollateral}
//         AccountBallance={props.AccountBallance}
//         Faktor={props.Faktor}
//         Einstiegspreis={props.Einstiegspreis} 
//     /> : null;

//     return(
//         <div>

//             <div style={{border: '2px solid black'}} 
//                 // name={"Position"} value={eventhandler} onClick={}
//             >
                
//                 <ul style={{color: indikator}}>Eröffnungsdatum: {props.Datum}</ul>
//                 <ul style={{color: indikator}}>Trade Collateral: {props.TradeCollateral}</ul>
//                 <ul style={{color: indikator}}>Gesammt Kotostand: {props.AccountBallance}</ul>
//                 <ul style={{color: indikator}}>Eingesetzter Hebel: {props.Faktor}</ul>
//                 <ul style={{color: indikator}}>Einstiegspreis: {props.Einstiegspreis}</ul>

//             </div>
//             <br/>
//             {/* <CalculatedPosition 
//                 Tradecollateral={props.TradeCollateral}
//                 AccountBallance={props.AccountBallance}
//                 Faktor={props.Faktor}
//                 Einstiegspreis={props.Einstiegspreis} 
//             /> */}

//             {toggleCalculatedPosition}

//         </div>
//     )
// };

// export default positions

// --------------------------------------

class Positions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
          }
          this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Test')
        if(this.state.isToggleOn === true){
            this.setState(
            {isToggleOn: false}
        );}
        if(this.state.isToggleOn === false){
            this.setState(
            {isToggleOn: true}
        );}
      }
    
    render() { 
        console.log('Teeeeeeeeeeeeeeeeeeeeeeeeeeeee',this.state.isToggleOn);
    let Status = this.props.StatusAktiv;
    let indikator;
    if (Status === true) {
        indikator = "green"}
    else
       { indikator = "red"
    }

    //Conditional Rendering Variable für die Calculated Position bauen und per event listener triggern 
    let eventhandler = false;

    let toggleCalculatedPosition = this.state.isToggleOn === true ? 
        
        <CalculatedPosition 
            Tradecollateral={this.props.TradeCollateral}
            AccountBallance={this.props.AccountBallance}
            Faktor={this.props.Faktor}
            Einstiegspreis={this.props.Einstiegspreis} 
        />

        : null;

        return (  
            <div>

            <div style={{border: '2px solid black'}} 
                // name={"Position"} value={eventhandler} onClick={}
            >
                
                <ul style={{color: indikator}}>Eröffnungsdatum: {this.props.Datum}</ul>
                <ul style={{color: indikator}}>Trade Collateral: {this.props.TradeCollateral}</ul>
                <ul style={{color: indikator}}>Gesammt Kotostand: {this.props.AccountBallance}</ul>
                <ul style={{color: indikator}}>Eingesetzter Hebel: {this.props.Faktor}</ul>
                <ul style={{color: indikator}}>Einstiegspreis: {this.props.Einstiegspreis}</ul>
                
                <button onClick={this.handleClick}>
                   Show Calculated Position
                </button>
            </div>
            <br/>
           

            {toggleCalculatedPosition}

        </div>
        );
    }
}
 
export default Positions;