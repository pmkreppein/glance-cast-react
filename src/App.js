import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchWeather, fetchCities, swapMetric} from "./actions"
import {bindActionCreators} from 'redux';
import WeatherSnippet from './WeatherSnippet';
import Temperature from './Temperature'
import ForecastDetail from './ForecastDetail';
import FullDetail from './FullDetail'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Navbar from './Navbar';
import CityButton from './CityButton';
import Store from './store';
class App extends Component {
  componentDidMount(){
    this.props.fetchWeather();
    this.props.fetchCities();
    console.log(this.props.metricMode)
    
  }


  handleOnClick = event => {
    this.props.swapMetric()
  }
  render() {
     return (
        <Router>
        <div className="container">
        <Navbar cities={this.props.cities}/>
        <button onClick={this.handleOnClick} className="is-primary button"> Metric Mode: {this.props.metricMode} </button> 
        
        <Route exact={true} path="/" render={() => (
           <div>

           </div>
         )}/>

        <Route exact={true} path="/day-details" render={() => (
          <div>

          </div>
        )} />

        <Route exact={true} path="/extended" render={() => (
          <div>
          <ForecastDetail {...this.props.weather.daily} tempUnit={this.props.tempUnit} />
          </div>
        )} />
          
          <Route exact={true} path="/nation-overview" render={() => (
          <div>
        <h2>National Weather Service Overview:</h2>
        <div class="image">
          <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day1.png" />
          <br/>
          <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day2.png" />
          <br/>
          <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day3.png" />
        </div>
          </div>
        )} />



        </div>
        </Router>
    );
  }
}
function mapStateToProps(state){
  return {
    weather: state.weather,
    tempUnit: state.tempUnit,
    cities: state.cities,
    metricMode: state.metricMode,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch),
    fetchCities: bindActionCreators(fetchCities, dispatch),
    swapMetric: () => {
      dispatch(swapMetric())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
