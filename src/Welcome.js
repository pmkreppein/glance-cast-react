import React from 'react'

export default function Welcome() {
  return (
    <div className="box">
        <p>Welcome to Glancecast!  This is the start of a hobby project of mine to make weather info quicker to access.  This is also a portfolio project for the Flatiron Online Code Bootcamp
        that I am working on.  Right now, this websites includes <a href="https://darksky.net/">Darksky</a> data and <a href="https://www.weather.gov/forecastmaps">National Weather Service </a> 
         forecast maps.  Darksky offers a great API and the National Weather Service has troves of data all available for free!
        </p>
        <p>
        I intend to continue building this project out, so check back soon as updates are posted!  You can learn more about me <a href="http://pmkdev.com">here.</a>  Thanks for visiting!
        </p>
        <p>
        Below is a visual representation of the National Weather Service's daily nationwide forecasts.
        </p>
        <p><strong>Instructions for use:</strong></p>
        <p>For three days of forecast maps like the one below, click <a href="/nation-overview">NWS Nation Overview.</a>  Select the city from the City Forecasts dropdown for detailed weather.  Toggle
        between Farenheit and Celsius by clicking on the "Metric Mode" button.
        </p>
        <p><strong>If data does not load, click <a href="https://glance-cast.herokuapp.com/" target="new">here, </a>and then come back to this site.</strong></p>
        
    </div>

  )
}
