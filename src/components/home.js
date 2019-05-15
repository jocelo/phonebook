import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

import { connect } from 'react-redux';
import { fetchContacts, apiRequest } from '../actions/contacts';

import './css/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getApiData = this.getApiData.bind(this);
  }

  componentWillMount() {
    this.props.getContacts();
  }

  getApiData() {
    this.props.getApi();
  }

  render() {
    return (
      <div>
        <h1>
          <div className="left-main-header"><span>&nbsp;</span></div>
          <span className="main-header">Phonebook</span>
          <div className="right-main-header"><span>&nbsp;</span></div>
        </h1>
        <NewContact></NewContact>
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