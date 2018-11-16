import React, { Component } from 'react';
import 'whatwg-fetch';

/*
fetch('/api/counters', { method: 'POST' })
  .then(res => res.json())
  .then(json => {
    let data = this.state.counters;
    data.push(json);

    this.setState({
      counters: data
    });
  });
*/

const Home = () => (
  <div>
  <p><a href="/msft"> View MSFT Stock </a></p>
  <p><a href="/aapl"> View AAPL Stock </a></p>
  <p><a href="/intc"> View INTC Stock </a></p>
  <p><a href="/nflx"> View NFLX Stock </a></p>
  <p><a href="/orcl"> View ORCL Stock </a></p>
  <p><a href="/cmcsa"> View CMCSA Stock </a></p>
  <p><a href="/goog"> View GOOG Stock </a></p>
  <p><a href="/luv"> View LUV Stock </a></p>
  <p><a href="/hog"> View HUG Stock </a></p>
  <p><a href="/googl"> View GOOGL Stock </a></p>
  <p><a href="/amzn"> View AMZN Stock </a></p>
  </div>
)

export default Home;
