import React, {useState, useEffect} from 'react';

const NewPosition = () => {

    const [tradeCollateral, setTradeCollateral] = useState(null);
    const [accountBallance, setAccountBallance] = useState(null);
    const [faktor, setFaktor] = useState(null);
    const [einstiegPreis, setEinstiegsPreis] = useState(null);
    const [statusActive, setStatusActive] = useState(null);
    
}
//Please Loop this
const handleChange = (event) => {
    console.log(event)
    if (!isNaN(event.target.value)) {
        setTradeCollateral(event.target.value)
    }
}

const handleChange = (event) => {
    console.log(event)
    if (!isNaN(event.target.value)) {
        setInputVal(event.target.value)
    }
}

const handleChange = (event) => {
    console.log(event)
    if (!isNaN(event.target.value)) {
        setInputVal(event.target.value)
    }
}

const handleChange = (event) => {
    console.log(event)
    if (!isNaN(event.target.value)) {
        setInputVal(event.target.value)
    }
}

const handleChange = (event) => {
    console.log(event)
    if (!isNaN(event.target.value)) {
        setInputVal(event.target.value)
    }
}

const handleClick = (event) => {
    console.log(event)
    setNumber(inputVal)
}

    // handleChange(event){
    //     this.setState({
    //         // datum : new Date().toLocaleString(),
    //         [event.target.name] : event.target.value

    //     });



    // }

    
        let price = 9000;

        let schwankungAbsolut = price - this.state.einstiegspreiseinstiegspreis;
        schwankungAbsolut = Math.trunc(schwankungAbsolut);
        
        let schwankung = ((price / this.state.einstiegspreis) - 1) * 100;
        schwankung = Math.trunc(schwankung);
        
        let leverage = this.state.tradecollateral * this.state.faktor;
            
        let profitloss = null;
        
        let liquidationlevel = null;
        
     
          //Profit/Verlusst Rechner im Fall einer Long Position
          profitloss = (leverage / 100) * schwankung;
        
          //Liquidationslevel bei einer long position
          liquidationlevel = ((0.8 * this.state.tradecollateral) - this.state.accountballance) / (leverage / 100);
          //Prozentuale Preisveränderung bei der dann Liquidiert wird

        
        let equity = this.state.accountballance + profitloss;
        
        let marginlevel = (equity / this.state.tradecollateral) * 100;
        
        
        let liquidationpreis = this.state.einstiegspreis-((-liquidationlevel * 0.01)*this.state.einstiegspreis);
        
        const [inputVal, setInputVal] = useState(9)

        
        
    

        return (  
            <div>
                <input value={inputVal} onChange={handleChange}/>
                <h1>Margin Level Calculator</h1>
                <input type="number" id="1" name="tradecollateral" value={this.state.tradecollateral} placeholder="Trade Collateral" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="2" name="accountballance" value={this.state.accountballance} placeholder="Account Ballance" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="3" name="faktor" value={this.state.faktor} placeholder="Faktor/Hebel" onChange={this.handleChange}/>
                <br></br>
                <input type="number" id="4" name="einstiegspreis" value={this.state.einstiegspreis} placeholder="Einstiegspreis" onChange={this.handleChange}/>
                <br></br>
                <button id="5">Create Position</button>

                <p>Trade Collateral: {this.state.tradecollateral}</p> 
                <p>Account Ballance: {this.state.accountballance}</p>
                <p>Eingesetzter Faktor/Hebel: {this.state.faktor}</p>
                <p>Einstiegspreis: {this.state.einstiegspreis}</p> 


        <p>Aktueller Preis: {price}</p> 
        <p>Kursverlauf: {schwankungAbsolut}</p>
        <p>Profit/Loss:{profitloss}</p>  
        <p>Leverage (Gehebelter Betrag):{leverage}</p> 
        <p>Equity: {equity}</p>  
        <p>Marginlevel: {marginlevel}</p>   
        <p>Liquiditons level: </p>     
        <p>Liquiditations Preis: {liquidationpreis}</p>    
            </div>
        );
 
export default NewPosition;