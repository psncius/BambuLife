const request = require('superagent');

module.exports = (app) => {
    app.post('/api/stock/msft',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['MSFT'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/aapl',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['AAPL'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/intc',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['INTC'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/nflx',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['NFLX'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/orcl',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['ORCL'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/cmcsa',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['CMCSA'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/goog',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['GOOG'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/luv',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['LUV'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/hog',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['HOG'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/googl',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['GOOGL'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

    app.post('/api/stock/amzn',function (req,res,next) {
      const apiKey = 'WXPIQGAFBOYB8OV4';
      const tickers = ['AMZN'];

      let completed = 0;
      const results = [];
      for(let i = 0; i < tickers.length; i += 1){
        const ticker = tickers[i];

        request
        .get('https://www.alphavantage.co/query')
        .query({'function':'TIME_SERIES_DAILY'})
        .query({symbol: ticker})
        .query({apikey: apiKey})
        .then((response) => {
          completed += 1;
          results.push(response.body);
          if(completed === tickers.length) {
            console.log('completed');

            res.send({
              success: true,
              message: 'Ticker info',
              results: results
            });
          }
        });
      }
    });

};
