import axios from "axios";
import {TASK} from '../container/constant';

const TaskAction = ()=>async(dispatch) => {

    try{
        const response = await axios.post('http://192.168.0.155:3000/tasks/getalltasks');
        console.log(response.data,"data");
        dispatch({ type: TASK, payload: response.data});
    } catch(err){
        console.log(err);
    }
}

export default TaskAction