import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
     Glancecast
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="/nation-overview" className="navbar-item">
        NWS Nation Overview
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Cities
        </a>
        
        <div className="navbar-dropdown">
        <a href="/weather/New York City/40.7624,-73.9738" className="navbar-item">New York City</a>
        <a href="/weather/Los Angeles/33.9780,-118.4671" className="navbar-item">Los Angeles</a>
        <a href="/weather/Chicago/41.8887,-87.6264" className="navbar-item">Chicago</a>
        <a href="/weather/Houston/29.7604,-95.3689" className="navbar-item">Houston</a>
        <a href="/weather/Phoenix/33.4452,-112.0668" className="navbar-item">Phoenix</a>
        <a href="/weather/Philadelphia/39.9491,-75.1506" className="navbar-item">Philadelphia</a>
        <a href="/weather/San Antonio/29.4241,-98.4924" className="navbar-item">San Antonio</a>
        <a href="/weather/San Diego/34.0194,-118.4108" className="navbar-item">San Diego</a>
        <a href="/weather/Dallas/32.7472,-97.0926" className="navbar-item">Dallas</a>
        <a href="/weather/Austin/30.3039,-97.7544" className="navbar-item">Austin</a>
        <a href="/weather/Jacksonville/30.3369,-81.6616" className="navbar-item">Jacksonville</a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Home</strong>
          </a>

          <a className="button is-light">
            Metric Mode: Off
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, null)(Navbar);
