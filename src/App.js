import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import MyRoutes from "./Components/MyRoutes"
// import { BrowserRouter} from 'react-router-dom';
// import SideBar from './Components/SideBar';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';


const App = ()=> {
  return (
    <BrowserRouter>
    <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
