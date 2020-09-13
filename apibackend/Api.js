// Global Config
const express = require("express");
const bodyParser = require('body-parser');
const nedb = require('nedb');

const app = express();
const jsonParser = bodyParser.json();

//Listen auf Port 3000(Funktioniert)
app.listen(3000, ()=>{
    console.log("Alles Roger auf Port 3000");
  });

//Datenbank Config 
// const database = new nedb('Positionen.db');
database.loadDatabase();

//Neue Position vom Client empfangen und in die Datenbank schreiben(Funktioniert)
app.post('/antwort1', jsonParser, (req, res) => {
    let position = req.body;
    console.log("Schreibe folgendes in die Datenbank: ", position);
    database.insert(position);
  });
  

//Zeug aus der Datenbank laden und an den Client raus schicken(Funktioniert)
database.find({}, (err, data) => {
    console.log("Alle einträge der Datenbank werden an den Client geschickt: ",data);
  
    app.get('/antwort1', (request, response) => {
      response.json(data);
    });
  });
  
  let positionsObject = null;



  database.find({
    "StatusAktiv": false
  }, (err, data) => {

    let x = Object.entries(data);
    console.log("1", x);

    let pos = data[0]; //For jedes Element bidde ausrechnen

    let datum = pos.Datum;

    let tradecollateral = parseInt(pos.TradeCollateral);

    let accountballance = parseInt(pos.AccountBallance);

    let faktor = parseInt(pos.Faktor);

    let einstiegspreis = parseInt(pos.Einstiegspreis);

    let short = pos.StatusAktiv;

    //--------------------------------------------------
    //Positionsberechnungen

    let schwankungAbsolut = price - einstiegspreis;
    schwankungAbsolut = Math.trunc(schwankungAbsolut);

    let schwankung = ((price / einstiegspreis) - 1) * 100;
    schwankung = Math.trunc(schwankung);

    let leverage = tradecollateral * faktor;

    let profitloss = null;

    let liquidationlevel = null;

    if (short == false) {
      //Code für den Fall einer Long Position


      //Schwankung im Fall einer Long Position
      if (schwankung > 0) {
        console.log("Positive Equity: " + schwankung + "% (Kursanstieg: " + schwankungAbsolut + " USD)");
      } else {
        console.log("Negative Equity: " + schwankung + "% (Kursverfall: " + schwankungAbsolut + " USD)");
      };

      //Profit/Verlusst Rechner im Fall einer Long Position
      profitloss = (leverage / 100) * schwankung;

      if (profitloss > 0) {
        console.log("Profit: " + profitloss);
      } else {
        console.log("Loss: " + profitloss);
      };

      //Liquidationslevel bei einer long position
      liquidationlevel = ((0.8 * tradecollateral) - accountballance) / (leverage / 100);
      //Prozentuale Preisveränderung bei der dann Liquidiert wird


    } else {

      //Code für den Fall einer Short Position


      // Schwankung im Fall einer Short Position
      if (schwankung < 0) {
        console.log("Positive Equity: " + schwankung + "% (Kursverfall: " + schwankungAbsolut + " USD)");
      } else {
        console.log("Negative Equity: " + schwankung + "% (Kursanstieg: " + schwankungAbsolut + " USD)");
      };

      // Profit/Verlusst Rechner im Fall einer Short Position
      profitloss = (leverage / 100) * (-schwankung);

      if (profitloss > 0) {
        console.log("Profit: " + profitloss);
      } else {
        console.log("Loss: " + profitloss);
      };

      //Liquidationslevel (Prozentuale Preisveränderung bei der dann Liquidiert wird) bei einer short position
      liquidationlevel = (-((0.8 * tradecollateral) - accountballance) / (leverage / 100));
    };

    let equity = accountballance + profitloss;

    let marginlevel = (equity / tradecollateral) * 100;

    let liquidationpreis = einstiegspreis - ((-liquidationlevel * 0.01) * einstiegspreis);

    //--------------------------------------------------
    //Positionsobjekt erstellen und zurück an app.js, und dann an Index.js schicken(oder direkt zu index.js schicken)
    positionsObject = {
      Datum: datum,
      Tradecollateral: tradecollateral,
      Accountballance: accountballance,
      Faktor: faktor,
      Einstiegspreis: einstiegspreis,
      Short: short,
      SchwankungAbsolut: schwankungAbsolut,
      Schwankung: schwankung,
      Leverage: leverage,
      Profitloss: profitloss,
      Liquidationlevel: liquidationlevel,
      Equity: equity,
      Marginlevel: marginlevel,
      Liquidationpreis: liquidationpreis
    };
    console.log(positionsObject);
    
  });
  console.log("2",positionsObject); 