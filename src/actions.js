import axios from 'axios';


export function fetchWeather(){
  return function(dispatch){
      axios.get("https://glance-cast.herokuapp.com/")
      .then((response) => {
        dispatch({type: 'GET_WEATHER', payload: response.data })
      })
        .catch((err) => {
          dispatch({type: "ERROR", payload: err})
        })
      }
  }


  export function fetchCities(){
    return function(dispatch){
        axios.get("https://glance-cast.herokuapp.com/cities")
        .then((response) => {
          dispatch({type: 'GET_CITIES', payload: response.data })
        })
          .catch((err) => {
            dispatch({type: "ERROR", payload: err})
          })
        }
    }

    export function swapMetric(){
      return function(dispatch){
            dispatch({type: 'SWAP_METRIC_MODE'})     
          }
      }