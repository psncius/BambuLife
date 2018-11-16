import React, { Component } from 'react';
import StockInfo from '../../components/Profile/StockInfo';
class Luv extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      results: [],
    };

    this.fetchLuvStockInfo = this.fetchLuvStockInfo.bind(this);
  }

  componentWillMount(){
    this.fetchLuvStockInfo();
  }

  fetchLuvStockInfo(){
    console.log('fetchLuvStockInfo');
    fetch('/api/stock/luv', { method: 'POST' })
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
      <p>Luv Chart</p>
      {
        results.map( result => <StockInfo data={result}/>)
      }
    </div>
  );
 }

}

export default Luv;
