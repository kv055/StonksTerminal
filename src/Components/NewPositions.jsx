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

        let TradeCollateral = this.state.tradecollateral <= 0 ? null : <p>Trade Collateral: {this.state.tradecollateral}</p>;
        let AccountBallance = this.state.accountballance <= 0 ? null : <p>Accountballance: {this.state.accountballance}</p>;
        let Faktor = this.state.faktor <= 0 ? null : <p>Faktor: {this.state.faktor}</p>;
        let Einstiegspreis = this.state.einstiegspreis <= 0 ? null : <p>Einstiegspreis: {this.state.einstiegspreis}</p>;
        
      
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