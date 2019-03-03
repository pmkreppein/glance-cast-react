import React from 'react'
import Temperature from './Temperature'
import Wind from './Wind'
import WeatherEmoji from './WeatherEmoji';

function WeatherSnippet(props) {

    return (
  <div className="card">
      <div className="card-content">
          <div className="media">
              <div className="media-left">
                  <figure className="image ">
                      <WeatherEmoji icon={props.icon}/>
                  </figure>
              </div>
              <div className="media-content">
                  <p className="title is-4">{props.cityName}</p>
                  <div className="tags has-addons">
                      <span className="tag is-medium is-info"><Temperature temp={props.temperature} metricMode={props.metricMode}/></span>
                      <span className="tag is-medium is-dark">{props.summary}</span>
                  </div>
              </div>
          </div>
          <div className="content">
              <table className="table is-fullwidth">
                  <tbody>
                      <tr>
                          <td>Feels Like</td>
                          <td><Temperature temp={props.apparentTemperature} metricMode={props.metricMode}/></td>
                      </tr>
                      <tr>
                          <td>Wind</td>
                          <td><Wind
                              direction={props.windBearing}
                              speed={props.windSpeed}
                              gust={props.windGust}/></td>
                      </tr>
                      <tr>
                          <td>Visibility</td>
                          <td>{props.visibility}
                              Mi.</td>
                      </tr>
                      <tr>
                          <td>Barometric Pressure</td>
                          <td>{props.pressure}
                              mb</td>
                      </tr>
                      <tr>
                          <td>Humidity</td>
                          <td>{props.humidity * 100}%</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
)}

export default WeatherSnippet;
