import React, { Component } from 'react';
import StockInfo from '../../components/Profile/StockInfo';
class Aapl extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      results: [],
    };

    this.fetchAaplStockInfo = this.fetchAaplStockInfo.bind(this);
  }

  componentWillMount(){
    this.fetchAaplStockInfo();
  }

  fetchAaplStockInfo(){
    console.log('fetchAaplStockInfo');
    fetch('/api/stock/aapl', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            isLoading: false,
            results: json.results,
          });
        } else {
          this.setState({
            isLoading: false,
            error: json.message,
          });
        }
      });
  }

render(){
  const {
    error,
    isLoading,
    results,
  } = this.state;

  if (isLoading){
    return(
      <div>
        <p>Loading....</p>
      </div>
    );
  }
  if (error){
    return(
      <div style={{ backgroundColor: '#610B21'}}>
        <p style={{ color: '#fff'}}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>Aapl Chart</p>
      {
        results.map( result => <StockInfo data={result}/>)
      }
    </div>
  );
 }

}

export default Aapl;
