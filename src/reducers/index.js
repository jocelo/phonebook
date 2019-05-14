import { combineReducers } from 'redux';
import contactsReducers from './contacts'

export default combineReducers({
  contacts: contactsReducers
})