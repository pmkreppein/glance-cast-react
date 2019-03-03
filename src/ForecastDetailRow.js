import React from 'react'
import WeatherEmoji from './WeatherEmoji'
import Moment from 'react-moment';
import TempBug from './TempBug'
import SunBug from './SunBug';

export default function ForecastDetailRow(props) {
  console.log(props);
  return (

      <tr >
          <td><Moment unix format="dddd">{props.time}</Moment></td>
          <td><WeatherEmoji icon={props.icon}/></td>
          <td><TempBug high={props.temperatureHigh} low={props.temperatureLow} metricMode={props.metricMode} /></td>
          <td><SunBug sunrise={props.sunriseTime} sunset={props.sunsetTime} /></td>
          <td>{Math.round(props.windSpeed)}</td>
          <td>{props.pressure}</td>    
      </tr>


  )
}
