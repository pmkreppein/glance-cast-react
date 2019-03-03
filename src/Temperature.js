import React from 'react'
function Temperature(props){
    let temp;
    let unit;
    if (!props.metricMode){
        temp = Math.round(props.temp)
        unit = "F"
    }
    else if (props.metricMode){
        temp = Math.round((props.temp - 32) * (5/9)) 
        unit = "C"
    }
    
    return(
        <div><p>{temp}<span>&#176;</span> {unit}</p></div>
    )
}
export default Temperature