import {  applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import GetAllUserReducer from './reducer/GetAllUserReducer';
import LogInReducer from './reducer/LogInReducer';

const rootReducers = combineReducers({

    allUser: GetAllUserReducer,
    logIn : LogInReducer
  });

  const middleware = [thunk];
  // eslint-disable-next-line no-underscore-dangle
 
  

  
  export default createStore(rootReducers, {}, applyMiddleware(...middleware));
// export default  createStore(rootReducers);