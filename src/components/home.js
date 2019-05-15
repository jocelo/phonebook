import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

import { connect } from 'react-redux';
import { fetchContacts, apiRequest } from '../actions/contacts';

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
    this.getApiData = this.getApiData.bind(this);
  }

  componentWillMount() {
    this.props.getContacts();
  }

  getApiData() {
    this.props.getApi();
  }

  handleSaveContact(contactName, contactPhone) {

  }

  setEmergencyContact(contactId, contactLetter) {

  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <hr />
        <NewContact saveNewContact={this.handleSaveContact}></NewContact>
        <button onClick={this.getApiData}>Load data from server</button>
        <hr />
        <EmergencyContact contact={this.state.emergency}></EmergencyContact>
        <hr />
        <ContactList listOfContacts={this.props.contacts} updateEmergencyContactParent={this.setEmergencyContact}></ContactList>
      </div>
    )
  }
}

const mapsStateToProps = state=>({
  contacts: state.contacts.data
});

const mapActionsToProps = {
  getContacts: fetchContacts,
  getApi: apiRequest
};

export default connect(
  mapsStateToProps,
  mapActionsToProps
)(Home);