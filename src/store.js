import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  weather: [],
  tempUnit: 'F',
  error: ""
}


const composeEnhancers = composeWithDevTools({
});
export default createStore(reducer, initialState, composeEnhancers(
  applyMiddleware(thunk)));
