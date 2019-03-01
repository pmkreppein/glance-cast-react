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
    
    return (
      <div>
        <WeatherSnippet {...this.props.weather.currently} metricMode={this.props.metricMode} cityName={this.props.match.params.name}/>
        <ForecastDetail {...this.props.weather.daily} metricMode={this.props.metricMode} />
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