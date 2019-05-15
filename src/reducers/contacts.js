import { FETCH_CONTACTS, NEW_CONTACT, SET_EMERGENCY, FETCH_API } from '../actions/types';

const initialState = {
  data: [{
      letter: 'A',
      list: [
        {id: 1, name: 'Alfonso Cuaron', phone: '(847) 123 1234'},
        {id: 2, name: 'Adolfo Lopez Mateos', phone: '(310) 321 8859'}
    ]},{
      letter: 'B',
      list: [
        {id: 1, name: 'Benito Juarez', phone: '(449) 345 9898'}
    ]},{
      letter: 'C',
      list: [
        {id: 1, name: 'Carlos Slim', phone: '(555) 545 1212'}
    ]},{
      letter: 'F',
      list: [
        {id: 1, name: 'Frida Kahlo', phone: '(555) 553 5351'}
    ]},{
      letter: 'R',
      list: [
        {id: 1, name: 'Rodolfo Neri Vela', phone: '(555) 123 1234'}
    ]} 
  ],
  favoriteContact: {name:'Jocelo', phone:'1234'}
}


export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_CONTACTS:
      return Object.assign({}, { 
        data: state.data, 
        favoriteContact: state.favoriteContact
      });
      break;
    case NEW_CONTACT:
      return [...state, action.payload]
      break;
    case SET_EMERGENCY:
    console.log('set emergency', state.data, action.payload);
      return Object.assign({}, { 
        data: state.data, 
        favoriteContact: action.payload
      })
      break;
    case FETCH_API:
      return Object.assign({}, {
        data: action.payload
      })
      break;
    default:
      return initialState;
  }
  return state;
}