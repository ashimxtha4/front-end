import axios from "axios";
import {TASK_ID} from '../container/constant';

const TaskAction = (id)=>async(dispatch) => {

    try{
        const response = await axios.post('http://192.168.0.155:3000/user/regester',abc);
        console.log(response.data,"data");
        dispatch({ type: SIGN_UP, payload: response.data});
    } catch(err){
        console.log(err);
    }
}

export default TaskAction