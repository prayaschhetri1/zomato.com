import { legacy_createStore as createStore,applyMiddleware, combineReducers } from "redux";
import { appReducer } from './appRedux/appReducer';
import thunk from 'redux-thunk'
import { authReducer } from './authRedux/authReducer';

const combine = combineReducers({
    appReducer,
    authReducer

})

export const store = createStore(combine,applyMiddleware(thunk))