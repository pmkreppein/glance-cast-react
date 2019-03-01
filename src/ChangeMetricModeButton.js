import React, { Component } from 'react'
import {connect} from 'react-redux';
import { swapMetric} from "./actions"


 class ChangeMetricModeButton extends Component {
    handleOnClick = event => {
        event.preventDefault();
        this.props.swapMetric()
      }

    render() {
    return (
      <div>
        <button onClick={this.handleOnClick} className="is-primary button"> Metric Mode: {this.props.metricMode ? 'On' : 'Off'} </button> 
      </div>
    )
  }
 }

 function mapStateToProps(state){
    return {
      metricMode: state.metricMode
    }
  }
  
function mapDispatchToProps(dispatch){
    return {
      swapMetric: () => {
        dispatch(swapMetric())
      }
    }
  }

  
  export default connect(mapStateToProps, mapDispatchToProps)(ChangeMetricModeButton);