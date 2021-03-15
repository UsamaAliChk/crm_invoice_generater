import {combineReducers} from 'redux';
import toggleLoader from './data/toggleLoader'
import getDataReducer from './data/getDataReducer';
import getContacts from './data/getContactsReducers'
const allReducers=combineReducers({
    getData:getDataReducer,
    getContacts,
    bidLoader:toggleLoader
})

export default allReducers