import { LOG_IN } from "../container/constant";

const initState={
    loginState:{}

}

export default (state = initState, action)=>{
    var {type , payload}= action;
    switch (type) {
        case LOG_IN :
            
            return {...state,
                loginState : payload};
            
            default :
            return state;
    }
}