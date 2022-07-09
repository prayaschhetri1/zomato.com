import { legacy_createStore as createStore,applyMiddleware, combineReducers } from "redux";
import { appReducer } from './appRedux/appReducer';
import thunk from 'redux-thunk'

const combine = combineReducers({
    appReducer,

})

export const store = createStore(combine,applyMiddleware(thunk))