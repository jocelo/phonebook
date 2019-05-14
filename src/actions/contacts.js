import { FETCH_CONTACTS, NEW_CONTACT, SET_EMERGENCY } from './types'

export function addNewContact() {
  return {
    type: NEW_CONTACT,
    payload: {
      letter: 'V',
      list: [{ id: 1, name: 'Vicente Fernandez', phone: '(443) 121 1522'}]
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