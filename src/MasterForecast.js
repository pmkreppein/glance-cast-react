import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchWeather, swapMetric} from "./actions"
import {bindActionCreators} from 'redux';
import WeatherSnippet from './WeatherSnippet';
import ForecastDetail from './ForecastDetail';
 class MasterForecast extends Component {
    componentDidMount(){
        this.props.fetchWeather(this.props.match.params.latlong);
    }

  
   render() {
    console.log(this.props.match.params)
    return (
      <div>
        <WeatherSnippet {...this.props.weather.currently} metricMode={this.props.metricMode}/>
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