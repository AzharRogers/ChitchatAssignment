import loggedReducer from './isLogged';
import selectedUserReducer from './SelectedUser';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    loggedReducer: loggedReducer,
    selectedUserReducer
})

export default allReducers;