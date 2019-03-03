import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchWeather, swapMetric} from "./actions"
import {bindActionCreators} from 'redux';
import ForecastDetail from './ForecastDetail';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import MasterForecast from './MasterForecast';
import Welcome from './Welcome';
class App extends Component {
  componentDidMount(){
    this.props.fetchWeather("29.7604,-95.3689");
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

              <Welcome />
              <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day1.png" alt="Day 1 NWS Nation Overview" />
            <br/>
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
                <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day1.png" alt="Day 1 NWS Nation Overview"/>
                <br/>
                <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day2.png" alt="Day 2 NWS Nation Overview"/>
                <br/>
                <img src="https://www.wpc.ncep.noaa.gov/exper/nationalforecastchart/data/day3.png" alt="Day 3 NWS Nation Overview"/>
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
