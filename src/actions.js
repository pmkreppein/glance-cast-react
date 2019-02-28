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
