import { SIGN_UP } from "../container/constant";

const initState={
    signUpState : {}
}

const SignUpReducer= (state=initState,action)=>{
    var {type , payload}= action;
    switch (type) {
        case SIGN_UP :
                return {...state,
                signUpState : payload};
            
            default :
            return state;
    }
}

export default SignUpReducer