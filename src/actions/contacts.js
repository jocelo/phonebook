import { FETCH_CONTACTS, NEW_CONTACT, SET_EMERGENCY, FETCH_API } from './types';

export function addNewContact(newContact) {
  const oneLetter = newContact.name.substr(0,1).toUpperCase();
  return {
    type: NEW_CONTACT,
    payload: {
      letter: oneLetter,
      contactData:{ name: newContact.name, phone: newContact.phone }
    }
  }
}

export function fetchContacts() {
  return ({
    type: FETCH_CONTACTS,
    payload: {}
  })
}

export function setEmergencyContact(emergencyContact) {
  return ({
    type: SET_EMERGENCY,
    payload: emergencyContact
  })
}

export function apiRequest() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data) {
      return(data.json());
    })
    .then(function(moreData){
      const parseData = [],
        finalData = [],
        moreDataSimple = moreData.map(contact=>{
        return {
          name: contact.name,
          phone: contact.phone
        }
      });

      moreDataSimple.forEach(contact=>{
        const firstLetter = contact.name.substr(0,1).toUpperCase();
        if (!parseData.hasOwnProperty(firstLetter)) {
          parseData[firstLetter] = [];
        }
        parseData[firstLetter].push(contact);
      });

      for (let row in parseData) {
        finalData.push({
          letter: row,
          list: parseData[row]
        });
      }

      dispatch({
        type: FETCH_API,
        payload: finalData
      })
    })
  }
}