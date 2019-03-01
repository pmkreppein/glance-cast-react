import React from 'react'
import Temperature from './Temperature'
export default function TempBug(props) {


      if (props) {
          return (<div className="tags has-addons">
          <span className="tag is-medium is-success"><Temperature temp={props.high} metricMode={props.metricMode}/></span>
          <span className="tag is-medium is-link"><Temperature temp={props.low} metricMode={props.metricMode}/></span></div>);
      }
        return (<p>Loading...</p>);
      

    

}


