<div className="column"><WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit} cityName="New York" cityImage="https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg"/></div>

           <WeatherSnippet {...this.props.weather.currently} tempUnit={this.props.tempUnit}/>

          <FullDetail {...this.props.weather.currently}/>