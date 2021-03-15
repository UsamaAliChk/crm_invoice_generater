import {combineReducers} from 'redux';

import getDataReducer from './data/getDataReducer';

const allReducers=combineReducers({
    getData:getDataReducer
})