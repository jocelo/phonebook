import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

import { connect } from 'react-redux';
import { fetchContacts, apiRequest } from '../actions/contacts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSaveContact = this.handleSaveContact.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  componentWillMount() {
    this.props.getContacts();
  }

  getApiData() {
    this.props.getApi();
  }

  handleSaveContact() {

  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <hr />
        <NewContact saveNewContact={this.handleSaveContact}></NewContact>
        <hr />
        <EmergencyContact contact={this.props.emergencyContact}></EmergencyContact>
        <hr />
        <ContactList listOfContacts={this.props.contacts}></ContactList>
      </div>
    )
  }
}

const mapsStateToProps = state=>({
  contacts: state.contacts.data,
  emergencyContact: state.contacts.favoriteContact
});

const mapActionsToProps = {
  getContacts: fetchContacts,
  getApi: apiRequest
};

export default connect(
  mapsStateToProps,
  mapActionsToProps
)(Home);