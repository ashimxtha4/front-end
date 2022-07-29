import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyRoutes from "./Components/MyRoutes"
import store from './redux/Store';
import { Provider } from 'react-redux/es/exports';


const App = ()=> {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <MyRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
