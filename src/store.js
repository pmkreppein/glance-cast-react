import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'


const initialState = {
  weather: [],
  metricMode: false,
  error: ""
}



export default createStore(reducer, initialState, 
  applyMiddleware(thunk));
