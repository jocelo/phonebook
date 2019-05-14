import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contacts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emergency: {
        id: 1,
        name: 'Alfredo Alonso',
        phone: '(847) 123 1234'
      }
    };

    this.handleSaveContact = this.handleSaveContact.bind(this);
    this.setEmergencyContact = this.setEmergencyContact.bind(this);
  }

  componentWillMount() {
    this.props.fetchContacts();
  }

  handleSaveContact(contactName, contactPhone) {
    const initialLetter = contactName.substr(0,1).toUpperCase(),
      contacts = this.state.contacts;
    let recordFound = contacts.filter(record=>record.letter === initialLetter);
    
    if (recordFound.length === 1) {
      recordFound = recordFound[0];
    } else {
      const newLength = contacts.push({
        letter: initialLetter,
        list: []
      })
      recordFound = contacts[newLength-1];
    }

    recordFound.list.push({
      id: recordFound.list.length + 1,
      name: contactName,
      phone: contactPhone
    })
  }

  setEmergencyContact(contactId, contactLetter) {
    const firstLevel = this.state.contacts.filter(contactGroup=>contactGroup.letter === contactLetter);
    const secondLevel = firstLevel[0].list.filter(contact=>contact.id === contactId);
    this.setState({emergency: secondLevel[0]});
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <hr />
        <NewContact saveNewContact={this.handleSaveContact}></NewContact>
        <hr />
        <EmergencyContact contact={this.state.emergency}></EmergencyContact>
        <hr />
        <ContactList listOfContacts={this.state.contacts} updateEmergencyContactParent={this.setEmergencyContact}></ContactList>
      </div>
    )
  }
}

const mapsStateToProps = state=>({
  contacts: state.contacts
})

export default connect(
  mapsStateToProps,
  { fetchContacts }
)(Home);