import {  applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import GetAllUserReducer from './reducer/GetAllUserReducer';
import LogInReducer from './reducer/LogInReducer';
import SignUpReducer from './reducer/SignUpReducer';

const rootReducers = combineReducers({

    allUser: GetAllUserReducer,
    logIn : LogInReducer,
    signUp : SignUpReducer
  });

  const middleware = [thunk];
  // eslint-disable-next-line no-underscore-dangle
 
  

  
  export default createStore(rootReducers, {}, applyMiddleware(...middleware));
// export default  createStore(rootReducers);