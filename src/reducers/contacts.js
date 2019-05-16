import { FETCH_CONTACTS, NEW_CONTACT, SET_EMERGENCY, FETCH_API } from '../actions/types';

const initialState = {
  data: [{
      letter: 'A',
      list: [
        {id: 1, name: 'Alfonso Cuaron', phone: '(847) 123 1234', email: 'cuaron@gmail.com', isFavorite: false},
        {id: 2, name: 'Adolfo Lopez Mateos', phone: '(310) 321 8859', email: 'calleadolfo@all.com', isFavorite: true}
    ]},{
      letter: 'B',
      list: [
        {id: 1, name: 'Benito Juarez', phone: '(449) 345 9898', email:'benito@hotmail.com', isFavorite: false}
    ]},{
      letter: 'C',
      list: [
        {id: 1, name: 'Carlos Slim', phone: '(555) 545 1212', email:'telmex@bimbo.com', isFavorite: false}
    ]},{
      letter: 'F',
      list: [
        {id: 1, name: 'Frida Kahlo', phone: '(555) 553 5351', email:'coyoacan@cdmx.com', isFavorite: false}
    ]},{
      letter: 'R',
      list: [
        {id: 1, name: 'Rodolfo Neri Vela', phone: '(555) 123 1234', email:'nvela@nasa.com', isFavorite: false}
    ]} 
  ],
  favoriteContact: {name:'Adolfo Lopez Mateos', phone:'(310) 321 8859'}
}

function deepClone(state) {
  return state.data.map(contacts=>{
    return Object.assign({}, {
      letter: contacts.letter,
      list: contacts.list.map(contact=>{
        return Object.assign({}, contact);
      })
    })
  });
}

function appendToState(contacts, oneLetter, payload) {
  let singleContact = contacts.filter(contact=>{ return contact.letter === oneLetter});
  if (singleContact.length === 1) {
    singleContact = singleContact[0];
  } else {
    const lastElementAdded = contacts.push({letter: oneLetter, list: []})
    singleContact = contacts[lastElementAdded-1];
  }
  singleContact.list.push({
    id: singleContact.list.length+1,
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    isFavorite: false
  });
  return contacts;
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_CONTACTS:
      return Object.assign({}, state);
    case NEW_CONTACT:
      return Object.assign({}, state, {
        data: appendToState([...state.data], action.payload.letter, action.payload.contactData),
      });
    case SET_EMERGENCY:
      const newState = deepClone(state),
        selectedLetter = newState.filter(contacts=>{
        return contacts.letter === action.payload.letter
      });

      if(selectedLetter.length === 1) {
        newState.forEach(contacts=>{
          contacts.list.forEach(contact=>{
            contact.isFavorite = false;
          })
        });

        selectedLetter[0].list.forEach(contact=>{
          contact.isFavorite = contact.id === action.payload.id;
        });
      }

      return Object.assign({}, {
        data: newState,
        favoriteContact: action.payload
      });
    case FETCH_API:
      return Object.assign({}, state, {
        data: action.payload
      });
    default:
      return initialState;
  }
}