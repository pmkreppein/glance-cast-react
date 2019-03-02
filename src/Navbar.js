import React, { Component } from 'react'
import ChangeMetricModeButton from './ChangeMetricModeButton';

class Navbar extends Component {

  render() {
    return (
        <div>
          <div className="columns">
              <div className="column">
                <a className="button is-warning" href="/">
                  Glancecast
                </a>
              </div>

              <div className="column">    
                <a href="/nation-overview" className="button is-info">
                  NWS Nation Overview
                </a>
              </div>

            <div className="column">
                <ChangeMetricModeButton />
            </div>

            <div className="column">
              <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>City Forecasts</span>
                    <span className="icon is-small">v</span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                      <a href="/weather/New York City/40.7624,-73.9738" className="dropdown-item">New York City</a>
                      <a href="/weather/Los Angeles/33.9780,-118.4671" className="dropdown-item">Los Angeles</a>
                      <a href="/weather/Chicago/41.8887,-87.6264" className="dropdown-item">Chicago</a>
                      <a href="/weather/Houston/29.7604,-95.3689" className="dropdown-item">Houston</a>
                      <a href="/weather/Phoenix/33.4452,-112.0668" className="dropdown-item">Phoenix</a>
                      <a href="/weather/Philadelphia/39.9491,-75.1506" className="dropdown-item">Philadelphia</a>
                      <a href="/weather/San Antonio/29.4241,-98.4924" className="dropdown-item">San Antonio</a>
                      <a href="/weather/San Diego/34.0194,-118.4108" className="dropdown-item">San Diego</a>
                      <a href="/weather/Dallas/32.7472,-97.0926" className="dropdown-item">Dallas</a>
                      <a href="/weather/Austin/30.3039,-97.7544" className="dropdown-item">Austin</a>
                      <a href="/weather/Jacksonville/30.3369,-81.6616" className="dropdown-item">Jacksonville</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

    )
  }
}


export default Navbar;












