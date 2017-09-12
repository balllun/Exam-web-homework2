import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Content } from '../Components';
import './Calculator.component';
import Calculator from "./Calculator.component";

class SumRouting extends React.Component {

  render() {

    return (
      <div>
        <h1 className="Text-menubar">SHOW CALCULATOR</h1>
        <div className="rightContent">
          <h3>SUM: {this.props.match.params.sum}</h3>
        </div>
      </div>
    );
  }
}

export default SumRouting;
