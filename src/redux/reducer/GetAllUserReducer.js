import { GET_ALL_USER } from "../container/constant";

const initState={
    userData:[]
    
}

export default (state = initState, action)=>{
    var {type , payload}= action;
    switch (type) {
        case GET_ALL_USER :
            return {
     
                ...state,
                userData: payload,
            };
            
            default :
            return state;
    }
}