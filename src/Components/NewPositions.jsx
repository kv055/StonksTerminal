import React from 'react';
//Todo: fetch-post to save the position


class NewPosition extends React.Component {
    constructor() {
        super();
        this.state = { 
            // datum: null,
            tradecollateral: null,
            accountballance: null,
            faktor: null,
            einstiegspreis: null,
            statusactive: true,
            price: null
         }
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        if (!isNaN(event.target.value) && (event.target.value) >= 0) {
            
            this.setState({
                // datum : new Date().toLocaleString(),
                [event.target.name] : event.target.value
                // event.tradecollateral : event.this.state.tradecollateral
                // event.target.tradecollateral : event.target.this.state.tradecollateral
            });

        }

    }

    render() { 
        
//-------------------------------
        let TradeCollateral = null;
        let AccountBallance = null;
        let Faktor = null;
        let Einstiegspreis = null;
        
        //funktioniert
        if (this.state.tradecollateral === NaN) {
            TradeCollateral = null;
        }
        if (this.state.tradecollateral === null) {
            TradeCollateral = null;
        }
        if (this.state.tradecollateral < 0) {
            TradeCollateral = null;
        }        
        if (this.state.tradecollateral > 0) {
            TradeCollateral = <p>Trade Collateral: {this.state.tradecollateral}</p>;
        }        

        if (this.state.accountballance === NaN) {
            AccountBallance = null;
        }
        if (this.state.accountballance === null) {
            AccountBallance = null;
        }
        if (this.state.accountballance < 0) {
            AccountBallance = null;
        }        
        if (this.state.accountballance > 0) {
            AccountBallance = <p>Accountballance: {this.state.accountballance}</p>;
        }        

        if (this.state.faktor === NaN) {
            Faktor = null;
        }
        if (this.state.faktor === null) {
            Faktor = null;
        }
        if (this.state.faktor < 0) {
            Faktor = null;
        }        
        if (this.state.faktor > 0) {
            Faktor = <p>Faktor: {this.state.faktor}</p>;
        }        

        if (this.state.einstiegspreis === NaN) {
            Einstiegspreis = null;
        }
        if (this.state.einstiegspreis === null) {
            Einstiegspreis = null;
        }
        if (this.state.einstiegspreis < 0) {
            Einstiegspreis = null;
        }        
        if (this.state.einstiegspreis > 0) {
            Einstiegspreis = <p>Einstiegspreis: {this.state.einstiegspreis}</p>;
        }        
//-------------------------------
            
       
        
        return (  
            <div>
                <h1>Margin Level Calculator</h1>
                <input name="tradecollateral" value={this.state.tradecollateral} placeholder="Trade Collateral" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="2" name="accountballance" value={this.state.accountballance} placeholder="Account Ballance" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="3" name="faktor" value={this.state.faktor} placeholder="Faktor/Hebel" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="4" name="einstiegspreis" value={this.state.einstiegspreis} placeholder="Einstiegspreis" onChange={this.handleChange}/>
                <br></br>
                <input type="number" name="price" value={this.state.price} placeholder="P/L Rechner Preis" onChange={this.handleChange}/>
                <br></br>
                <button id="5">Create Position</button>
                
                <div style={{border: '1px solid black'}}>
                    
                    {TradeCollateral}
                    {AccountBallance}
                    {Faktor}
                    {Einstiegspreis}
                </div>

            </div>

        );
    }
}
 
export default NewPosition;





//---------------------------------------------

// let renderVariable = ['Trade Collateral: {this.state.tradecollateral}']
// for(x of renderVariable ){
//         if (props === NaN) {
//             TradeCollateral = null;
//         }
//         if (props === null) {
//             TradeCollateral = null;
//         }
//         if (props < 0) {
//             TradeCollateral = null;
//         }        
//         if (props > 0) {
//             TradeCollateral = <p> </p>;
//         } 
//     }