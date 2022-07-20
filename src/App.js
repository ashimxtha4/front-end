import React from 'react';
import MyRoutes from "./Components/MyRoutes"
import { BrowserRouter} from 'react-router-dom';
import SideBar from './Components/SideBar';


const App = ()=> {
  return (
    <>
    <BrowserRouter>
    <SideBar>
        <MyRoutes />
    </SideBar>
    </BrowserRouter>
    </>
  );
}

export default App;
