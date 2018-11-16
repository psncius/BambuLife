import React, { Component } from 'react';
import StockInfo from '../../components/Profile/StockInfo';
class Nflx extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      results: [],
    };

    this.fetchNflxStockInfo = this.fetchNflxStockInfo.bind(this);
  }

  componentWillMount(){
    this.fetchNflxStockInfo();
  }

  fetchNflxStockInfo(){
    console.log('fetchNflxStockInfo');
    fetch('/api/stock/nflx', { method: 'POST' })
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
      <p>Nflx Chart</p>
      {
        results.map( result => <StockInfo data={result}/>)
      }
    </div>
  );
 }

}

export default Nflx;
