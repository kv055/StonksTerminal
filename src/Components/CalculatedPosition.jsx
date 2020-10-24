import React from 'react';

class CalculatedPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            position:{
                tradecollateral: 200,
                accountballance: 500,
                faktor: 3,
                einstiegspreis: 6600,
                statusactive: true
            },

            price: 0
            
         }
    }

              
    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{mode: 'cors'})
        .then(response => response.json())
        .then(data => this.setState({ 
            price: data.bpi.USD.rate_float
        
    }));
    }

    render() { 

        let schwankung = null;
        let schwankungAbsolut= null;
        let profitloss = 1;  
        let liquidationlevel = null;
        let leverage = null;
        let equity = null;
        let marginlevel = null;
        let liquidationpreis = null;

        let indikator;
        if (
            // 1
            profitloss
            >0) {
            indikator = "green"}
        else
        { indikator = "red"
        }


      


        let PosVisualiser = function ({tradecollateral, accountballance, faktor, einstiegspreis, price}){
 

            schwankungAbsolut = price - einstiegspreis;
            
            schwankung = ((price / einstiegspreis) - 1) * 100;
            
            leverage = tradecollateral * faktor;
            //---------
            //Profit/Verlusst Rechner im Fall einer Long Position
            profitloss = (leverage / 100) * schwankung;
            
            //Liquidationslevel bei einer long position
            liquidationlevel = ((0.8 * tradecollateral) - accountballance) / (leverage / 100);
            //Prozentuale Preisveränderung bei der dann Liquidiert wird
            //---------
            equity = accountballance + profitloss;
            
            marginlevel = (equity / tradecollateral) * 100;
                    
            liquidationpreis = einstiegspreis-((-liquidationlevel * 0.01) * einstiegspreis);

            return (
                <div >
                    <p>Kursverlauf: {schwankungAbsolut}</p>
                    <p>Profit/Loss: {profitloss}</p>  
                    <p>Leverage (Gehebelter Betrag): {leverage}</p> 
                    <p>Equity: {equity}</p>  
                    <p>Marginlevel: {marginlevel}</p>    
                    <p>Liquiditons level: {liquidationlevel}</p>     
                    <p>Liquiditations Preis: {liquidationpreis}</p> 
                </div>
                )
        }


        return (
            <div >
                <p >Aktueller Preis: {this.state.price}</p> 

                <div style={{color: indikator, border: '1px solid black'}}>
                    <PosVisualiser 
                        
                        tradecollateral={this.state.position.tradecollateral} 
                        accountballance={this.state.position.accountballance} 
                        faktor={this.state.position.faktor} 
                        einstiegspreis={this.state.position.einstiegspreis}
                        price={this.state.price}
                    />
                </div>
            </div>
          );
    }
}
 
export default CalculatedPosition;

