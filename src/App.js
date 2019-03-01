import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchWeather, swapMetric} from "./actions"
import {bindActionCreators} from 'redux';
import WeatherSnippet from './WeatherSnippet';
import Temperature from './Temperature'
import ForecastDetail from './ForecastDetail';
import FullDetail from './FullDetail'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Navbar from './Navbar';
import MasterForecast from './MasterForecast';
class App extends Component {
  componentDidMount(){
    // this.props.fetchWeather("29.7604,-95.3689");
    console.log(this.props.metricMode)
    
  }


  handleOnClick = event => {
    event.preventDefault();
    this.props.swapMetric()
  }
  render() {
     return (
        <Router>
        <div className="container">
        <Navbar/>
        <br/>
        <Route exact={true} path="/" render={() => (
           <div>

           </div>
         )}/>

        <Route exact={true} path="/weather/:name/:latlong" component={MasterForecast} />

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
    metricMode: state.metricMode,
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch),
    swapMetric: () => {
      dispatch(swapMetric())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
