import { 
    REGISTER_REVIEW,
    REGISTER_PURCHASE,
    REGISTER_FREE
} from "../_actions/types";

export default function write(state={}, action) {
    switch(action.type){
        case REGISTER_REVIEW:
            return { ...state, registerSuccess: action.payload }
        case REGISTER_PURCHASE:
            return { ...state, registerSuccess: action.payload }
        case REGISTER_FREE:
            return { ...state, registerSuccess: action.payload }
        default: 
            return state;
    }
}