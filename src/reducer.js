

export default function reducer(state, action){
  switch(action.type){
    case "GET_WEATHER":{
      return {...state, weather: action.payload}
    }
    case "GET_CITIES":{
      return {...state, cities: action.payload}
    }
    case "ERROR": {
      return {...state, error: action.payload}
    }
    default: {
      return state
    }
  }
}
