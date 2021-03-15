import {combineReducers} from 'redux';

import getDataReducer from './data/getDataReducer';
import getContacts from './data/getContactsReducers'
const allReducers=combineReducers({
    getData:getDataReducer,
    getContacts
})

export default allReducers