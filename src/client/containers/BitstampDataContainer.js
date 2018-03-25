import React, { Component } from 'react';

import BitstampDataTickerSelect from '../components/BitstampDataTickerSelect';
import BitstampDataViewer from '../components/BitstampDataViewer';

import getJsonRestClient from './../lib/getJsonRestClient';

class BitstampDataContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { tickerType: 'select' };
  };

  onChange = (e) => {
    const ticker = e.target.value;

    this.setState({
      tickerType: ticker
    });

    if (ticker !== 'select') {
      const url = '/api/bitstamp?ticker=' + e.target.value;

      getJsonRestClient(url)
      .then(resp => {

        this.setState({
          data: resp
        });
      });
    }
  };

  render() {
    const tickerType = this.state.tickerType,
      data = this.state.data;

    return (
      <div>
        <BitstampDataTickerSelect
          tickerType={tickerType}
          onChange={this.onChange}
        />
        {data && <BitstampDataViewer
          data={data}
        />}
      </div>
    );
  };
};

export default BitstampDataContainer;
