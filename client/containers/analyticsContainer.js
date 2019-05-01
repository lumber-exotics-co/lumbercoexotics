import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';

class AnalyticsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {

    console.log(this.props.customerData)

    return (
      <div>
        <h4>Inside analytics</h4>
      </div>
    ) 
  }
}


const mapStateToProps = store => ({
    customerData: store.catalog.customerData
  });
  
  // Runs our action creator
  const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(actions.getData()),
  });


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalyticsContainer));