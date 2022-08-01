import axios from "axios";
import {SIGN_UP } from '../container/constant';

const SingUpAction = (abc)=>async(dispatch) => {

    try{
        const response = await axios.post('http://192.168.0.155:3000/user/regester',abc);
        console.log(response.data,"data");
        dispatch({ type: SIGN_UP, payload: response.data});
    } catch(err){
        console.log(err);
    }
}

export default SingUpAction