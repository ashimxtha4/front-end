import axios from "axios";
import { GET_ALL_USER } from '../container/constant';

const GetAllUserAction = ()=>async(dispatch) => {

    try{
        const response = await axios.get('http://localhost:3000/user/getall-users');
        console.log(response.data.users);
        dispatch({ type: GET_ALL_USER, payload: response.data.users });
    } catch(err){
        console.log(err);
    }
}

export default GetAllUserAction