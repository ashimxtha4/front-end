import axios from "axios";
import { LOG_IN } from '../container/constant';

const LogInAction = (credentials)=>async(dispatch) => {

 
        const response = await axios.post('http://192.168.0.123:3000/user/login',credentials);
        console.log(response.data,"data");
        dispatch({ type: LOG_IN, payload: response.data});
    
}

export default LogInAction