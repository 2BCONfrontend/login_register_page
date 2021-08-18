import { combineReducers } from 'redux';
import user from './user_reducer';
import write from './write_reducer';

const rootReducer = combineReducers({
    user, write
})

export default rootReducer;