import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchWeather, swapMetric} from "./actions"
import {bindActionCreators} from 'redux';
import WeatherSnippet from './WeatherSnippet';
import ForecastDetail from './ForecastDetail';
 class MasterForecast extends Component {
  render() {
      console.log(this.props.params)
    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      weather: state.weather,
      metricMode: state.metricMode,
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
      fetchWeather: bindActionCreators(fetchWeather, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MasterForecast);