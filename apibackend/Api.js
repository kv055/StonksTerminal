// Global Config
const express = require("express");
const bodyParser = require('body-parser');
const nedb = require('nedb');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const jsonParser = bodyParser.json();


// app.use(cors());

//--------------------------------------------------
//Listen auf Port 3000(Funktioniert)
app.listen(3002, ()=>{
    console.log("Alles Roger auf Port 3000");
  });

//--------------------------------------------------
//Datenbank Config 
const database = new nedb('Positionen.db');
database.loadDatabase();

//--------------------------------------------------
//Neue Position vom Client empfangen und in die Datenbank schreiben(Funktioniert)
app.post('/antwort1', jsonParser, (req, res) => {
    let position = req.body;
    console.log("Schreibe folgendes in die Datenbank: ", position);
    database.insert(position);
  });
  

//--------------------------------------------------
// //Zeug aus der Datenbank laden(Funktioniert)
// database.find({}, (err, data) => {
    
  function getBtcUsd(position) {               
    return new Promise((resolve, reject) => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {method: 'get'})
        .then(res => {res.json()
          .then(data => {resolve(data)})
      });
    })

  };


  function senden(position){
    app.get('/antwort2', (request, response) => {
      response.json(position);
      
    }); 
    };

  

 


database.find({}, (err, data) => {

  for (const element of data) {
    PositionRaw.push(element);
  };
  
});
let PositionRaw = [];

// getBtcUsd(PositionRaw).then(data => {
//         const price = Math.trunc(data.bpi.USD.rate_float);
//         console.log(PositionRaw);
//         console.log(price);

//         //Poscalcs hier einfügen
//         //Am ende dann
//         for (element of PositionRaw) {
//           //Initalizing Variables of the Object
//           let datum = element.Datum;
//           let tradecollateral = parseInt(element.TradeCollateral);
//           let accountballance = parseInt(element.AccountBallance);
//           let faktor = parseInt(element.Faktor);
//           let einstiegspreis = parseInt(element.Einstiegspreis);
//           let short = element.StatusAktiv;

//              //Positionsberechnungen
       
//              let schwankungAbsolut = price - einstiegspreis;
//              schwankungAbsolut = Math.trunc(schwankungAbsolut);
       
//              let schwankung = ((price / einstiegspreis) - 1) * 100;
//              schwankung = Math.trunc(schwankung);
       
//              let leverage = tradecollateral * faktor;
       
//              let profitloss = null;
       
//              let liquidationlevel = null;
       
//              if (short == false) {
//                //Code für den Fall einer Long Position
       
//                //Schwankung im Fall einer Long Position
//                if (schwankung > 0) {
//                  // console.log("Positive Equity: " + schwankung + "% (Kursanstieg: " + schwankungAbsolut + " USD)");
//                } else {
//                  // console.log("Negative Equity: " + schwankung + "% (Kursverfall: " + schwankungAbsolut + " USD)");
//                };
       
//                //Profit/Verlusst Rechner im Fall einer Long Position
//                profitloss = (leverage / 100) * schwankung;
       
//                if (profitloss > 0) {
//                  // console.log("Profit: " + profitloss);
//                } else {
//                  // console.log("Loss: " + profitloss);
//                };
       
//                //Liquidationslevel bei einer long position
//                liquidationlevel = ((0.8 * tradecollateral) - accountballance) / (leverage / 100);
//                //Prozentuale Preisveränderung bei der dann Liquidiert wird
       
       
//              } else {
       
//                //Code für den Fall einer Short Position
       
       
//                // Schwankung im Fall einer Short Position
//                if (schwankung < 0) {
//                  // console.log("Positive Equity: " + schwankung + "% (Kursverfall: " + schwankungAbsolut + " USD)");
//                } else {
//                  // console.log("Negative Equity: " + schwankung + "% (Kursanstieg: " + schwankungAbsolut + " USD)");
//                };
       
//                // Profit/Verlusst Rechner im Fall einer Short Position
//                profitloss = (leverage / 100) * (-schwankung);
       
//                if (profitloss > 0) {
//                  // console.log("Profit: " + profitloss);
//                } else {
//                  // console.log("Loss: " + profitloss);
//                };
       
//                //Liquidationslevel (Prozentuale Preisveränderung bei der dann Liquidiert wird) bei einer short position
//                liquidationlevel = (-((0.8 * tradecollateral) - accountballance) / (leverage / 100));
//              };
       
//              let equity = accountballance + profitloss;
       
//              let marginlevel = (equity / tradecollateral) * 100;
       
//              let liquidationpreis = einstiegspreis - ((-liquidationlevel * 0.01) * einstiegspreis);
       
//              //--------------------------------------------------
//              //Positionsobjekt erstellen und zurück an App.js //Scope probleme
//              positionsObject = {
//                Datum: datum,
//                Tradecollateral: tradecollateral,
//                Accountballance: accountballance,
//                Faktor: faktor,
//                Einstiegspreis: einstiegspreis,
//                Short: short,
//                SchwankungAbsolut: schwankungAbsolut,
//                Schwankung: schwankung,
//                Leverage: leverage,
//                Profitloss: profitloss,
//                Liquidationlevel: liquidationlevel,
//                Equity: equity,
//                Marginlevel: marginlevel,
//                Liquidationpreis: liquidationpreis
//              };
//              console.log(positionsObject); 
//             PositionReady.push(positionsObject);
//          };
        
// });
// let PositionReady = [];


// senden(PositionReady);

senden(PositionRaw);

app.get('/antwort3', cors() , (request, response) => {
  response.json({
    Datum : '18.5.2020, 09:23:41'
});
  
}); 