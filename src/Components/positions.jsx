import React from 'react';

function positions(props){
    let Status = props.StatusAktiv;
    let indikator;
    if (Status === true) {
        indikator = "green"}
    else
       { indikator = "red"
    }

    return(
        <div>
            <div style={{border: '2px solid black'}}>
                <ul style={{color: indikator}}>Eröffnungsdatum: {props.Datum}</ul>
                <ul style={{color: indikator}}>Trade Collateral: {props.TradeCollateral}</ul>
                <ul style={{color: indikator}}>Gesammt Kotostand: {props.AccountBallance}</ul>
                <ul style={{color: indikator}}>Eingesetzter Hebel: {props.Faktor}</ul>
                <ul style={{color: indikator}}>Einstiegspreis: +{props.Einstiegspreis}</ul>
            </div>
            <br/>
        </div>
    )
};

export default positions