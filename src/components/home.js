import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

import { connect } from 'react-redux';
import { fetchContacts, apiRequest } from '../actions/contacts';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faStar, faMobileAlt, faEnvelope, faUserEdit } from '@fortawesome/free-solid-svg-icons'

import './css/home.css';

library.add(faUserCircle, faStar, faMobileAlt, faEnvelope, faUserEdit);

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