import React from 'react';
 
// class App extends React.Component {
  
//   constructor() {
//     super();
 
//     this.state = {
//       isLoading: false,
//       btcUsdNow: [],
//       btcUsdChart: []
//     };
//   }

//   componentDidMount() {
//     this.setState({isLoading: true});
    
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{mode: 'cors'})
//       .then(response => response.json())
//       .then(data => this.setState({ 
//         btcUsdNow: data.bpi.USD.rate_float, 
        
//       }));
      
//     fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-07-01&end=2020-07-07',{mode: 'cors'})
//     .then(response => response.json())
//     .then(data => 

      
//       this.setState({ 
//       btcUsdChart: data.bpi, 
//       isLoading: false 

//     }));
//   }
  
//   render() {

    
//     let xxx = [[],[]];
    
//     function todisplay (chartdata){
//       let tempentries = Object.entries(chartdata);

//       for (const element of tempentries) {
//         xxx[0].push(element[1]);
//         xxx[1].push(element[0]);
//       };



//     };
//     todisplay(this.state.btcUsdChart)




//         return (

//         )
//       }
// }
 
// export default App;



