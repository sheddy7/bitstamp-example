import React from 'react';
import Moment from 'react-moment';

import IoArrowGraphUpRight from 'react-icons/lib/io/arrow-graph-up-right';
import IoArrowGraphDownRight from 'react-icons/lib/io/arrow-graph-down-right';

const BitstampDataViewer = (props) => {

  const {
    data
  } = props;

  const {
    high,
    last,
    timestamp,
    bid,
    vwap,
    volume,
    low,
    ask,
    open
  } = data;

  return (
    <div id="data">
      <div className="data-row">
        <div className="data-left">Last BTC price</div>
        <div className="data-right">{last}</div>
      </div>
      <div className="data-row">
        <div className="data-left"><IoArrowGraphUpRight /> Last 24 hours price high</div>
        <div className="data-right">{high}</div>
      </div>
      <div className="data-row">
        <div className="data-left"><IoArrowGraphDownRight /> Last 24 hours price low</div>
        <div className="data-right">{low}</div>
      </div>
      <div className="data-row">
        <div className="data-left">Last 24 volume weighted average price</div>
        <div className="data-right">{vwap}</div>
      </div>
      <div className="data-row">
        <div className="data-left">Last 24 hours volume</div>
        <div className="data-right">{volume}</div>
      </div>
      <div className="data-row">
        <div className="data-left">Highest buy order</div>
        <div className="data-right">{bid}</div>
      </div>
      <div className="data-row">
        <div className="data-left">Lowest sell order</div>
        <div className="data-right">{ask}</div>
      </div>
      <div className="data-row">
        <div className="data-left">Date and time</div>
        <div className="data-right"><Moment unix>{timestamp}</Moment></div>
      </div>
      <div className="data-row">
        <div className="data-left">First price of the day</div>
        <div className="data-right">{open}</div>
      </div>
    </div>
  );

};

export default BitstampDataViewer;
